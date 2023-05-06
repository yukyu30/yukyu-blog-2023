import ProfileCard from '@/components/ProfileCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <div className="mb-12">
        <ProfileCard />
      </div>

      <h1 className="text-center text-2xl">
        Your Content in the Cente
        これはダミーのタイトルです。ああああああああああああああああああああああああああああああああああああああ
        r
      </h1>
    </div>
  );
}
