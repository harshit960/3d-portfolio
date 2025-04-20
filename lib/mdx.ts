import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import rehype from 'remark-rehype';
import stringify from 'rehype-stringify';

// Define the type for blog post metadata
export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  image?: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), 'app/blog');

// Get all blog post slugs (folder names)
export function getAllPostSlugs() {
  const folders = fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  return folders;
}

// Get a specific post's content and metadata by slug
export async function getPostBySlug(slug: string): Promise<{ content: string; metadata: PostMetadata }> {
  const fullPath = path.join(postsDirectory, slug, 'README.md');
  
  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post file not found for slug: ${slug}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Process markdown content to HTML
  const processedContent = await remark()
    .use(rehype)
    .use(stringify)
    .process(content);
  
  // Return with typed metadata
  return {
    content: processedContent.toString(),
    metadata: {
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      author: data.author || '',
      tags: data.tags || [],
      image: data.image || '',
      slug
    }
  };
}

// Get all posts with metadata
export async function getAllPosts(): Promise<{ slug: string; metadata: PostMetadata }[]> {
  const slugs = getAllPostSlugs();
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const { metadata } = await getPostBySlug(slug);
        return {
          slug,
          metadata
        };
      } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        return null;
      }
    })
  );
  
  // Filter out any null entries and sort by date, newest first
  // Explicitly type the filtered array to remove null values
  return posts
    .filter((post): post is { slug: string; metadata: PostMetadata } => post !== null)
    .sort((a, b) => {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    });
} 