import ProfileCard from '@/components/ProfileCard';
import Navigation from '@/components/Navigtion';

export default function Home() {
  return (
    <div className="">
      <div className="mb-8">
        <ProfileCard />
      </div>
      <Navigation />
      <h1 className="text-2xl mt-8">これはダミーのコンテンツ</h1>
    </div>
  );
}
