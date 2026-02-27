/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'bg-app': 'var(--bg-app)',
                'bg-subtle': 'var(--bg-subtle)',
                'bg-ui': 'var(--bg-ui)',
                'bg-ui-hover': 'var(--bg-ui-hover)',
                'bg-ui-active': 'var(--bg-ui-active)',
                'border-subtle': 'var(--border-subtle)',
                'border-focus': 'var(--border-focus)',
                'border-hover': 'var(--border-hover)',
                'solid': 'var(--solid)',
                'solid-hover': 'var(--solid-hover)',
                'text-low': 'var(--text-low)',
                'text-high': 'var(--text-high)',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
