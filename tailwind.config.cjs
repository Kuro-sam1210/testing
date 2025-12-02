/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other configs (content paths, etc.)
  theme: {
    extend: {
      colors: {
        // Map CSS variables to Tailwind utilities for consistency
        'primary': 'var(--primary)',
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        'text-dark': 'var(--text-dark)', // Note: This is now text-light in the CSS variables
        'text-mid': 'var(--text-mid)',
        'text-light': 'var(--text-light)',
        'border-color': 'var(--border)',
        'success': 'var(--success)',
        'error': 'var(--error)',
      },
      borderRadius: {
        // Use the variable for corner radius
        'xl': 'var(--radius)',
      },
      boxShadow: {
        // Define the new dark shadow
        'luxe': 'var(--shadow-dark)',
      },
      fontFamily: {
        // Define custom font groups
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  // ... plugins
}