export const Footer = () => {
  return (
    <footer className="border-t">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description Column */}
          <div className="lg:col-span-1">Brand</div>

          {/* Quick Links Column */}
          <div className="lg:col-span-1">Links</div>

          {/* More links Column */}
          <div className="lg:col-span-1">Links</div>

          {/* Contact Information Column */}
          <div className="lg:col-span-1">Contact</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <span>© {new Date().getFullYear()} Leighton CRM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
