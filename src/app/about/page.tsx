import MainLayout from '@/layouts/MainLayout';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const dataPath = path.join(process.cwd(), '/src/app/about/data.json');
  const rawData = fs.readFileSync(dataPath, 'utf8');
  const data = JSON.parse(rawData);
  return (
    <MainLayout>
      <h2 className="text-2xl mb-4">Work</h2>
      {data.work.map((work, index) => (
        <div key={index} className="border-slate-800 border-2 rounded-md p-4">
          <div className="flex justify-between">
            <p>{work.conpany_name}</p>
            <p className="text-slate-500">
              {work.period_start} - {work.period_end}
            </p>
          </div>
          <p>{work.position}</p>
        </div>
      ))}
      <h2 className="text-2xl mt-8 mb-4">Skill</h2>
      {data.skill.map((skill, index) => (
        <div key={index} className="border-slate-800 border-2 rounded-md p-4">
          <div className="flex justify-between">
            <p>{skill.name}</p>
            <p className="text-slate-500">{skill.date}</p>
          </div>
        </div>
      ))}
    </MainLayout>
  );
}
