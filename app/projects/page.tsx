import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';
import BlogSidebar from '@/components/BlogSidebar';
import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
    const posts = await getAllPosts();
    
    // Featured post is the most recent one (if available)
    const featuredPost = posts.length > 0 ? posts[0] : null;
    // Other posts for the main grid (excluding the featured post)
    const otherPosts = posts.length > 1 ? posts.slice(1) : [];
    
    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className='text-center mb-12'>
                <h2 className='mb-4 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Projects and Blog</h2>
                <p className='font-medium text-xl lg:text-2xl text-[#c9d1d9] max-w-[960px] mx-auto'>
                    Thoughts, stories, and tutorials on web development and technology
                </p>
            </div>
            
            {/* No posts state */}
            {posts.length === 0 && (
                <div className="text-center py-16 bg-[#161b22] rounded-lg border border-[#30363d] shadow-lg shadow-primary/10 my-8">
                    <p className='font-medium text-xl text-[#c9d1d9]'>Blog posts coming soon!</p>
                    <p className='text-[#8b949e] mt-4'>Check back later for updates.</p>
                </div>
            )}
            
            {/* Posts exist - show layout with featured post */}
            {featuredPost && (
                <div className="mb-16">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-[#c9d1d9] mb-4 relative inline-block">
                            <span className="relative z-10">Featured Post</span>
                            <div className="absolute w-full h-2 bg-gradient-to-r from-primary to-secondary bottom-0 left-0 rounded opacity-70"></div>
                        </h3>
                    </div>
                    
                    <Link href={`/projects/${featuredPost.slug}`} className="group block">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
                            <div className="lg:col-span-7 relative">
                                <div className="h-64 lg:h-full w-full relative">
                                    {featuredPost.metadata.image ? (
                                        <Image 
                                            src={featuredPost.metadata.image}
                                            alt={featuredPost.metadata.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary/80 to-secondary/80"></div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-center">
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {featuredPost.metadata.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 text-xs bg-[#1f6feb40] text-[#58a6ff] rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <h4 className="text-2xl lg:text-3xl font-bold text-[#c9d1d9] mb-4 group-hover:text-primary transition-colors">
                                    {featuredPost.metadata.title}
                                </h4>
                                
                                <p className="text-[#8b949e] line-clamp-3 mb-5">{featuredPost.metadata.description}</p>
                                
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-sm text-[#8b949e]">
                                        {new Date(featuredPost.metadata.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                    
                                    <span className="text-primary group-hover:text-secondary transition-colors inline-flex items-center">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            
            {/* Main content with sidebar */}
            {posts.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main posts grid */}
                    <div className="lg:col-span-8">
                        <h3 className="text-2xl font-bold text-[#c9d1d9] mb-8 relative inline-block">
                            <span className="relative z-10">All Posts</span>
                            <div className="absolute w-full h-2 bg-gradient-to-r from-primary to-secondary bottom-0 left-0 rounded opacity-70"></div>
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <BlogSidebar posts={posts} />
                    </div>
                </div>
            )}
        </div>
    );
}
