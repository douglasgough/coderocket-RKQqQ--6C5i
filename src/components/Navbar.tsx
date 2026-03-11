import { Button } from './ui/button';
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4A5568] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ML</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Miller's Landing</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#welcome" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              About
            </a>
            <a href="#service-times" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Services
            </a>
            <a href="#ministries" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Ministries
            </a>
            <a href="#sermons" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Sermons
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Contact
            </a>
          </div>
          <Button className="hidden md:flex cursor-pointer">
            Plan Your Visit
          </Button>
          <button className="md:hidden p-2 cursor-pointer" aria-label="Menu">
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}