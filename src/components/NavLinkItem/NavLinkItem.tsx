'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? 'font-bold' : ''} italic text-black hover:text-gray-900 dark:text-white`}
    >
      {label}
    </Link>
  );
}
