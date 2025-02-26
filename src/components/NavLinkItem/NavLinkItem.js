import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ label, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive && 'font-bold'
      } italic text-black hover:text-gray-900 dark:text-white`}
    >
      {label}
    </Link>
  );
}
