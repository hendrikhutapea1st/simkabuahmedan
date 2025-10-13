/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-out',
        'fade-in-right': 'fadeInRight 0.5s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s infinite',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'slide-in-down': 'slideInDown 0.5s ease-out',
        'slide-left': 'slideLeft 20s linear infinite',
        'slide-left-reverse': 'slideLeftReverse 25s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        slideInUp: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideLeftReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  safelist: [
    // Safelist untuk warna
    'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-500', 'bg-green-600', 'bg-green-700', 
    'bg-emerald-50', 'bg-emerald-500', 'bg-emerald-600',
    'bg-yellow-100', 'bg-gray-800', 'bg-gray-50', 'bg-white',
    'text-green-600', 'text-green-400', 'text-gray-800', 'text-gray-700', 'text-gray-600', 'text-gray-300', 'text-gray-500',
    'text-white', 'text-green-100',
    'border-green-600',
    
    // Safelist untuk ukuran
    'w-16', 'h-16', 'h-8', 'w-8', 'w-6', 'h-6', 'h-5', 'w-5',
    'w-32', 'h-32', 'w-40', 'h-40', 'w-64', 'h-64', 'w-full', 'h-48',
    'w-80',
    
    // Safelist untuk layout dan spacing
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4',
    
    // Safelist untuk efek
    'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow', 'rounded-xl', 'rounded-full',
    
    // Safelist untuk interaksi
    'hover:shadow-md', 'hover:bg-green-700', 'hover:bg-green-50', 'hover:text-green-600', 'hover:text-white',
    
    // Safelist untuk breakpoints
    'md:w-1/2', 'md:flex-row', 'md:flex', 'md:flex-col', 'md:grid-cols-2', 'md:grid-cols-4',
    'md:text-4xl', 'md:text-5xl', 'md:w-80', 'md:h-80', 'md:w-40', 'md:h-40', 'md:py-24', 'md:mb-0',
    
    // Safelist untuk utilities
    'flex', 'items-center', 'justify-center', 'text-center', 'space-y-3', 'space-x-8', 'space-x-4',
    'py-16', 'py-12', 'py-4', 'py-3', 'py-2', 'px-4', 'px-8', 'px-10', 'px-6',
    'mb-16', 'mb-12', 'mb-4', 'mb-3', 'mb-8', 'mt-4', 'mt-2', 'mt-12', 'mr-2',
    'max-w-lg', 'max-w-2xl', 'max-w-md',
    'transition', 'transition-shadow', 'duration-300', 'duration-200',
    'font-bold', 'font-medium', 'font-semibold', 'font-extrabold',
    'text-3xl', 'text-xl', 'text-lg', 'text-2xl', 'text-sm',
    'leading-tight',
    'absolute', 'relative', 'fixed', 'static',
    'container', 'mx-auto', 'px-4', 'flex-col', 'flex-row',
    'text-center', 'items-center', 'justify-between', 'justify-center', 'gap-4', 'gap-6', 'gap-10',
    'bg-gradient-to-r', 'from-green-50', 'to-emerald-50',
    'border', 'border-2', 'border-t', 'border-gray-700', 'border-dashed',
    'object-cover',
    'overflow-hidden',
    'block', 'inline', 'inline-block',
    'hidden', 'z-10', 'z-20',
    // Safelist untuk animasi
    'animate-fade-in-up', 'animate-fade-in-down', 'animate-fade-in-left', 'animate-fade-in-right',
    'animate-zoom-in', 'animate-bounce', 'animate-pulse', 'animate-slide-in-up', 'animate-slide-in-down',
    'animate-slide-left', 'animate-slide-left-reverse',
  ],
  plugins: [],
}