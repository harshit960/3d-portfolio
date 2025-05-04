import Footer from '@/components/Footer';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'Read articles on web development, coding tips, and more!',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <main>{children}</main>
      <Footer />
    </div>
  );
} 