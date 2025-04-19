import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">

        {/* Left Side - Logo and Copyright */}
        <div className="flex flex-col items-start">
          <img
            src="/your-logo.png" // << replace with your image file path
            alt="Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} YourWebsite. All rights reserved.</p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-col md:flex-row gap-10 text-sm font-medium">
          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-semibold mb-2">Explore</h4>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/services" className="hover:text-white transition">Services</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col space-y-2 text-sm">
          <h4 className="text-white font-semibold mb-2">Contact Us</h4>
          <p>📍 Ghaziabad, India</p>
          <p>✉️ support@yourwebsite.com</p>
          <p>📞 +91 12345 67890</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
