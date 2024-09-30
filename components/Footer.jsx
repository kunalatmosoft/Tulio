import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo and Copyright */}
        <div className="mb-6 md:mb-0">
          <Link href="/"
             className="text-white text-2xl font-bold">Tulio
          </Link>
          <p className="text-sm text-gray-400 mt-2">&copy; 2024 Tulio. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 mb-6 md:mb-0">
          <Link href="#features"
             className="text-gray-400 hover:text-gray-200">Features
          </Link>
          <Link href="#pricing"
             className="text-gray-400 hover:text-gray-200">Pricing
          </Link>
          <Link href="#contact"
             className="text-gray-400 hover:text-gray-200">Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="space-x-4">
            <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.827.775 4.932 4.932 0 0 0 2.163-2.724c-.937.555-1.975.959-3.084 1.184A4.916 4.916 0 0 0 16.616 3a4.92 4.92 0 0 0-4.917 4.917c0 .385.043.761.127 1.122-4.083-.205-7.7-2.161-10.124-5.134a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.215 2.189 4.099a4.903 4.903 0 0 1-2.23-.616v.063a4.92 4.92 0 0 0 3.946 4.827 4.993 4.993 0 0 1-2.223.084 4.928 4.928 0 0 0 4.596 3.419A9.876 9.876 0 0 1 0 19.54a13.955 13.955 0 0 0 7.548 2.212c9.056 0 14.01-7.502 14.01-14.01 0-.213-.004-.425-.013-.636A10.002 10.002 0 0 0 24 4.557z"/>
            </svg>

          
        </div>
      </div>
    </footer>
  );
}
