/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                grotesk: ['Space Grotesk', 'sans-serif', 'Arial'],
            },
            colors: {
                primary: '#07242B',
                secondary: '#FFBE00',
            },
            backgroundImage: {
                'heroSection-back': 'url(../public/images/HeroSection.jpg)',
            },
        },
    },
    plugins: [],
}
