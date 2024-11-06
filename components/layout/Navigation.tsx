import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-64 bg-gray-800 text-white p-6">
      <div className="space-y-4">
        <Link href="/" className="block hover:text-gray-300">
          Home
        </Link>
        <Link href="/projects" className="block hover:text-gray-300">
          Projects
        </Link>
        <Link href="/about" className="block hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  );
}