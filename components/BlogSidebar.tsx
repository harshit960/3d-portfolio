import Image from 'next/image';
import Link from 'next/link';
import { PostMetadata } from '@/lib/mdx';

interface BlogSidebarProps {
  posts: { slug: string; metadata: PostMetadata }[];
  currentSlug?: string;
}

export default function BlogSidebar({ posts, currentSlug }: BlogSidebarProps) {
  // Filter out current post if we're on a post page
  const otherPosts = posts.filter(post => post.slug !== currentSlug);
  
  // Background patterns for posts without images
  const patternColors = [
    'from-blue-500 to-purple-600',
    'from-pink-500 to-orange-400',
    'from-green-400 to-blue-500',
    'from-purple-500 to-indigo-500',
    'from-yellow-400 to-orange-500',
    'from-teal-400 to-blue-500',
  ];

  // Placeholder images from Unsplash (add attribution if used in production)
  const placeholderImages = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=300&fit=crop',
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 shadow-lg shadow-[#0d1117]/50 sticky top-24">
      <h3 className="text-xl font-bold text-[#c9d1d9] mb-6 relative overflow-hidden">
        <span className="relative z-10">More Stories</span>
        <div className="absolute w-24 h-2 bg-gradient-to-r from-primary to-secondary bottom-0 left-0 rounded"></div>
      </h3>
      
      <div className="space-y-6">
        {otherPosts.length === 0 ? (
          <p className="text-[#8b949e] text-center py-4">No other posts yet!</p>
        ) : (
          otherPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group block"
            >
              <div className="flex flex-col space-y-2 transition-all duration-300 transform group-hover:translate-x-1">
                <div className="relative h-28 w-full overflow-hidden rounded-lg">
                  {post.metadata.image ? (
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fill
                      sizes="(max-width: 768px) 100vw, 250px"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${patternColors[index % patternColors.length]}`}></div>
                      <Image
                        src={placeholderImages[index % placeholderImages.length]}
                        alt={post.metadata.title}
                        className="object-cover opacity-50 mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
                        fill
                        sizes="250px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Floating date */}
                  <div className="absolute bottom-2 right-2 bg-[#0d1117]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-[#c9d1d9]">
                    {new Date(post.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
                
                <h4 className="font-bold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors line-clamp-2">
                  {post.metadata.title}
                </h4>
                
                {post.metadata.tags.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-[#c9d1d9] px-2 py-1 bg-[#1f6feb40] rounded-full">
                      {post.metadata.tags[0]}
                    </span>
                    {post.metadata.tags.length > 1 && (
                      <span className="text-xs text-[#8b949e]">+{post.metadata.tags.length - 1}</span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
      
      {/* Decorative element */}
      <div className="mt-8 pt-6 border-t border-[#30363d] text-center">
        <div className="inline-flex items-center justify-center space-x-2">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-2 h-2 bg-secondary rounded-full"></span>
          <span className="w-2 h-2 bg-[#c9d1d9] rounded-full"></span>
        </div>
        <p className="text-[#8b949e] text-sm mt-2">Discover more content</p>
      </div>
    </div>
  );
} 