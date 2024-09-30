import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10 backdrop-blur-lg bg-glassBg border-b border-glassBorder shadow-lg rounded-b-3xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-500">
          <Link href="/">Tulio</Link>
        </div>
        <div className="space-x-4">
          <Link href="#features" className="text-teal-500 hover:text-teal-600">Features</Link>
          <Link href="#pricing" className="text-teal-500 hover:text-teal-600">Pricing</Link>
          <Link href="#contact" className="text-teal-500 hover:text-teal-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
