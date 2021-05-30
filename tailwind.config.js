module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};
