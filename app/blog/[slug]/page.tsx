import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/mdx';
import BlogSidebar from '@/components/BlogSidebar';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { metadata } = await getPostBySlug(params.slug);
    
    return {
      title: `${metadata.title} | Blog`,
      description: metadata.description,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        type: 'article',
        authors: [metadata.author],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post | Portfolio',
      description: 'Read my latest blog posts about web development and technology.',
    };
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const { content, metadata } = await getPostBySlug(params.slug);
    const allPosts = await getAllPosts();
    
    const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center mb-8 text-[#58a6ff] hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="lg:col-span-8">
            {/* Blog header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat gradient-text mb-6">
                {metadata.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="text-[#c9d1d9]">{formattedDate}</div>
                <div className="mx-3 text-[#8b949e]">•</div>
                <div className="text-[#c9d1d9]">{metadata.author}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {metadata.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm bg-[#1f6feb40] text-[#58a6ff] rounded-full border border-[#1f6feb60]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {metadata.image && (
                <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20">
                  <Image 
                    src={metadata.image} 
                    alt={metadata.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Blog content */}
            <div className="bg-[#161b22] rounded-lg p-6 md:p-8 shadow-lg shadow-[#0d1117]/50 border border-[#30363d] mb-10">
              <div 
                className="prose prose-invert prose-lg max-w-none prose-pre:bg-[#0d1117] prose-a:text-[#58a6ff] prose-headings:text-[#c9d1d9] prose-p:text-[#c9d1d9] prose-strong:text-[#e6edf3] prose-code:text-[#c9d1d9] prose-code:bg-[#21262d]"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            
            {/* Article footer */}
            <div className="bg-[#161b2280] rounded-lg p-6 border border-[#30363d] mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-xl font-bold text-[#c9d1d9] mb-2">Share this article</h4>
                  <div className="flex space-x-3">
                    <button className="p-2 bg-[#21262d] rounded-full text-[#c9d1d9] hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="p-2 bg-[#21262d] rounded-full text-[#c9d1d9] hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-2 bg-[#21262d] rounded-full text-[#c9d1d9] hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center px-4 py-2 bg-[#21262d] hover:bg-primary transition-colors text-[#c9d1d9] hover:text-white rounded-lg"
                >
                  <span>More articles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <BlogSidebar posts={allPosts} currentSlug={params.slug} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
} 