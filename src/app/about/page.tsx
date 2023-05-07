import ProfileCard from '@/components/ProfileCard';
import Navigation from '@/components/Navigtion';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h2 className="text-2xl mb-4">Work</h2>
      <div className="border-slate-800 border-2 rounded-md p-4">
        <div className="flex justify-between">
          <p>GMOペパボ株式会社</p>
          <p className="text-slate-500">2022.4 - Present</p>
        </div>
        <p>SUZURI / エンジニア</p>
      </div>
      <h2 className="text-2xl mt-8 mb-4">Skill</h2>
      <div className="border-slate-800 border-2 rounded-md p-4">
        <div className="flex justify-between">
          <p>上級VR技術者</p>
          <p className="text-slate-500">2022.1</p>
        </div>
      </div>
    </MainLayout>
  );
}
