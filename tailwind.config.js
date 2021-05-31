module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}'
        ],
        options: {
            safelist: [
                'text-gray-600',
                'text-red-600',
                'text-orange-600',
                'text-yellow-600',
                'text-green-600',
                'text-teal-600',
                'text-blue-600',
                'text-indigo-600',
                'text-purple-600',
                'text-pink-600',
                'border-gray-400',
                'border-red-400',
                'border-orange-400',
                'border-yellow-400',
                'border-green-400',
                'border-teal-400',
                'border-blue-400',
                'border-indigo-400',
                'border-purple-400',
                'border-pink-400'
            ],
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
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
