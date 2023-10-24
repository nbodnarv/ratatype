module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'dark-blue': '#0a335c',
      'blue': '#00acff',
      'light-yellow': '#ffeb99',
      'yellow': '#ffcc00',
      'gray': '#d8e2e6',
      'gray-light': '#eef4f6',
      'white': '#fff',
      'input-c': '#174258cc',
      'black': '#000',
      'red': '#FF3B30',
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.25rem',
      lg: '3rem',
      xl: '4rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '10': '10px',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        '590': '590px',
       }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
