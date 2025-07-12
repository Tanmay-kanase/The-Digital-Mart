// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define colors based on the provided CSS variables if they exist
        // You'll need to inspect your site's actual CSS variables or choose values.
        "color-text-dark": "#333333", // Example: replace with actual dark text color
        "color-gray-1": "#666666", // Example
        "color-gray-3": "#999999", // Example (for social icons)
        "color-gray-4": "#cccccc", // Example (for footer bottom link separator)
        "color-link": "#007bff", // Example: Your primary link color (e.g., blue)
        "color-body": "#4a4a4a", // Example: Your main body text color
        "color-ghost": "#e5e5e5", // Example: A light gray for borders
      },
      fontSize: {
        "h2-base": "calc(1.325rem + .9vw)", // Matches original CSS h2 calc
        "h6-base": "1rem",
        "font-body-2": "16px", // Example, adjust as needed
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-up-100": "slideUp 0.5s ease 0.1s forwards",
        "slide-up-200": "slideUp 0.5s ease 0.2s forwards",
        "slide-up-300": "slideUp 0.5s ease 0.3s forwards",
        "slide-up-400": "slideUp 0.5s ease 0.4s forwards",
        "slide-up-500": "slideUp 0.5s ease 0.5s forwards",
        "slide-right-100": "slideRight 0.8s ease 0.1s forwards",
        "slide-left-100": "slideLeft 0.8s ease 0.1s forwards",
        slideInLeft: "slideInLeft 1s ease-in-out forwards",
        slideInRight: "slideInRight 1s ease-in-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".footer-link-underline": {
          position: "relative",
          display: "inline-block", // Ensure the pseudo-element positions correctly
          "&::after": {
            content: '""',
            position: "absolute",
            width: "0%",
            height: "1px",
            bottom: "0",
            left: "0",
            backgroundColor: theme("colors.color-link"), // Use your link color
            transition: "width 0.3s ease-out",
          },
          "&:hover::after": {
            width: "100%",
          },
        },
        ".footer-bottom-link-separator li:not(:last-child)::after": {
          content: '""',
          height: "4px",
          width: "4px",
          backgroundColor: theme("colors.color-gray-4"),
          borderRadius: "50%",
          position: "absolute",
          top: "50%", // Adjusted for better centering
          right: "-5px",
          transform: "translateY(-50%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
