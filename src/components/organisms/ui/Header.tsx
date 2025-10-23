export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-shadow duration-200 min-h-12">
      <div className="w-full">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center space-x-8 pl-4 sm:pl-6 lg:pl-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="site-header-logo">LOGO</div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 pr-4 sm:pr-6 lg:pr-8">
            Right Menu
          </div>
        </div>
      </div>
    </header>
  );
};