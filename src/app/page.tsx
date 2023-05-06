import ProfileCard from '@/components/ProfileCard';
import Navigation from '@/components/Navigtion';

export default function Home() {
  return (
    <div className="">
      <div className="mb-12">
        <ProfileCard />
      </div>
      <Navigation />
      <h1 className="text-center text-2xl">
        Your Content in the Cente
        これはダミーのタイトルです。ああああああああああああああああああああああああああああああああああああああ
        r
      </h1>
    </div>
  );
}
