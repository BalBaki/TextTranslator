/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens: {
            short: { max: '512px' },
        },
        extend: {
            width: {
                100: '30rem',
            },
        },
    },
    plugins: [],
};
