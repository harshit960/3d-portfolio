import Image from 'next/image';
import Link from 'next/link';
import { PostMetadata } from '@/lib/mdx';

interface BlogCardProps {
  post: {
    slug: string;
    metadata: PostMetadata;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const { metadata, slug } = post;
  const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    // day: 'numeric',
  });

  return (
    <div className="bg-[#161b22] rounded-lg overflow-hidden shadow-md shadow-[#0d1117]/50 hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-4px] transition-all duration-300 ease-in-out border border-[#30363d] h-full">
      <Link href={`/projects/${slug}`} className="block h-full">
        <div className="relative overflow-hidden aspect-video">
          {metadata.image ? (
            <Image 
              src={metadata.image} 
              alt={metadata.title} 
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-primary to-secondary" />
          )}
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="text-sm text-[#8b949e]">{formattedDate}</div>
            <div className="mx-2 text-[#6e7681]">•</div>
            <div className="text-sm text-[#8b949e]">{metadata.author}</div>
          </div>
          
          <h3 className="font-bold text-xl mb-3 text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">{metadata.title}</h3>
          
          <p className="text-[#8b949e] line-clamp-3 mb-4">{metadata.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {metadata.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs bg-[#1f6feb40] text-[#58a6ff] rounded-full"
              >
                {tag}
              </span>
            ))}
            {metadata.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-[#1f6feb40] text-[#58a6ff] rounded-full">
                +{metadata.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
} 