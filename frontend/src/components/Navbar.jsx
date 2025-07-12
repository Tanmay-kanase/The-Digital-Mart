import React, { useState, useEffect } from "react";
import "./styles/style.css";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For future mobile menu functionality

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", link: "#" },
    {
      name: "Our Services",
      link: "#",
      dropdown: [
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
      ],
    },
    {
      name: "Our Products",
      link: "#",
      dropdown: [
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
      ],
    },
    {
      name: "Pages",
      link: "#",
      dropdown: [
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
      ],
    },
    {
      name: "Contact",
      link: "#",
      dropdown: [
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
      ],
    },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 bg-white shadow-md" : "relative bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            {/* Replace with your actual logo component or image */}
            <img
              src="https://thedigitalmart.in/images/black_logo.png"
              alt="The Digital Mart Logo"
              className="h-8 md:h-10"
            />
            {/* If your logo is complex HTML+Tailwind, you can put it here directly */}
            {/* Example: <div className="text-xl font-bold text-gray-800">THE DIGITAL MART</div> */}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className=" ">
          <nav className="flex justify-between items-center gap-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-2 transition-all duration-300 relative
                           group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:w-full after:scale-x-0 after:transition-transform after:duration-300 after:origin-left"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#" // Adjust href as needed for sub-items
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div>
          <button
            class="btn-wrap flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full bg-gray-400 transition-all duration-300 hover:gap-0.5 focus:outline-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenuRight"
          >
            <span class="bar h-[2px] w-5 mb-1 rounded-[10px] bg-gray-800 transition-all duration-300"></span>
            <span class="bar h-[2px] w-5 mb-1 rounded-[10px] bg-gray-800 transition-all duration-300"></span>
            <span class="bar h-[2px] w-[10px] mb-1 rounded-[10px] bg-gray-800 transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, will show based on isMobileMenuOpen state) */}
      {/* You'd typically add more logic here to slide it in/out */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg pb-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.link}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="pl-6">
                  {" "}
                  {/* Indent dropdown items for mobile */}
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-500 text-sm transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
