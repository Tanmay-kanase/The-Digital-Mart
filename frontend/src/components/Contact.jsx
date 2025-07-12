const services = [
  "Website Designing",
  "Website Development",
  "Software Development",
  "Mobile App Development",
  "Digital Marketing",
  "Social Media Management",
  "Search Engine Optimization",
  "Logo & Graphic Designing",
  "CRM Development",
  "Whatsapp Marketing",
];

const products = [
  "Mobile App",
  "Website & Portal",
  "Web Application",
  "Digital Products",
];

const importantPages = [
  "About Us",
  "Disclaimer",
  "Our Aim",
  "Our Expertise",
  "Our Services",
  "Our Portfolio",
  "Our Clients",
  "Our Plan",
  "Our Team",
  "Why Choose us",
  "Our Testimonials",
];

const policyLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Return & Refund Policy",
  "AMC Policy",
  "FAQ",
];

const Contact = () => {
  return (
    <div className="container mx-auto p-10 animation-slideInLeft">
      <div className="">
        <ul className="flex items-center justify-between mb-[90px]">
          <li>fb</li>
          <li>insta</li>
          <li>ywitter</li>
          <li>yt</li>
          <li>tg</li>
          <li>wp</li>
        </ul>
      </div>
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 lg:gap-y-0">
        {/* Contact Info */}
        <div className="lg:col-span-5 animate-slideInLeft lg:border-r-2 lg:border-r-neutral-500 lg:pr-6">
          <h2 className="text-5xl font-bold mb-[40px]">Contact us</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-[40px]">Our Address</h3>
            <p className="flex items-center text-gray-700 mb-5">
              📍 Near Metro Travels, Nasirabad Road, Nagra, Ajmer
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-5">
              We're Available 24/7. Call Now.
            </h3>
            <p className="text-gray-700 mb-4">📞 9831810122</p>
            <p className="text-gray-700 mb-4">💬 7033623289</p>
            <p className="text-gray-700 mb-4">📧 info@thedigitalmart.com</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 animate-slideInRight">
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-700">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-700">
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Important Pages</h3>
            <ul className="space-y-2 text-gray-700">
              {importantPages.map((page, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; 2025 All rights reserved by THE DIGITAL MART.</p>
        <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
          {policyLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </footer>

      {/* Scroll to Top */}
      <button
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Contact;
