module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}'
        ],
        options: {
            safelist: [/(border|bg|text)-(.*)-(\\d{1}0{1,2})/],
            blocklist: [/^debug-/],
            keyframes: true,
            fontFace: true
        }
    },
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
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-debug-screens')
    ]
};
