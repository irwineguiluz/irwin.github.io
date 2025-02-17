import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white p-4">
    <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-black italic">irwineguiluz</h1>
      </div>

      <nav className="hidden md:flex justify-center space-x-8">
        <Link href="/" className="font-bold italic text-black hover:text-gray-900">
          Home
        </Link>
        <Link href="#" className="text-black hover:text-gray-900">
          About
        </Link>
        <Link href="/contact" className="text-black hover:text-gray-900">
          Contact
        </Link>
      </nav>

      <div className="hidden md:flex justify-end space-x-4">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          FB
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          X
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          IG
        </Link>
      </div>
    </div>
  </header>
  );
};
