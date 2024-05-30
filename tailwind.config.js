/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif", "Arial"],
      },
      colors: {
        primary: "#07242B",
        secondary: "#FFBE00",
        "custom-grey": "rgba(35,31,32,0.35)",
      },
      backgroundImage: {
        "heroSection-back": "url(../public/images/HeroSection.jpg)",
        "service-1": "url(../public/images/Home/Services/1.png)",
        "service-2": "url(../public/images/Home/Services/2.png)",
        "service-3": "url(../public/images/Home/Services/3.png)",
        "service-4": "url(../public/images/Home/Services/4.png)",
        "service-5": "url(../public/images/Home/Services/5.png)",
        "find-job-back": "url(../public/images/Home/FindJob/background.png)",
        "find-job-back2": "url(../public/images/Order/login.png)",
        "marketing-logo": "url(../public/images/Home/Marketing/logo.png)",
        "download-back": "url(../public/images/Home/Download/back.png)",
        "footer-back": "url(../public/images/Home/Footer/back.png)",
      },
    },
  },
  plugins: [],
};
