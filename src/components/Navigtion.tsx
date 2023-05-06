'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navigation = [
  { name: 'TimeLine', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="rounded-full bg-slate-800 p-2 w-min">
      <div className="mx-4 flex flex-row space-x-4 text-xl">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={
                pathname == item.href ? 'text-blue-gradation' : 'text-white'
              }
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
