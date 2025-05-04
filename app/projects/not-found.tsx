import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat gradient-text mb-6">
        Blog Post Not Found
      </h2>
      <p className="text-xl text-[#c9d1d9] mb-6">
        The blog post you're looking for doesn't exist or may have been moved.
      </p>
      <div className="p-10 bg-[#161b22] rounded-lg border border-[#30363d] shadow-lg shadow-[#0d1117]/50 max-w-md w-full text-center mb-8">
        <p className="text-[#8b949e] mb-4">Try checking the URL or navigating back to the blog index.</p>
      </div>
      <Link 
        href="/projects" 
        className="px-6 py-3 bg-[#1f6feb] text-white rounded-full font-medium text-lg hover:bg-[#388bfd] transition-colors"
      >
        Back to Blog
      </Link>
    </div>
  );
} 