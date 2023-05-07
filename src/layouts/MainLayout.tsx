import ProfileCard from '@/components/ProfileCard';
import Navigation from '@/components/Navigtion';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mb-8">
        <ProfileCard />
      </div>
      <Navigation />
      <div className="mt-8">{children}</div>
    </>
  );
}
