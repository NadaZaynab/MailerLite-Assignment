  // remember to use module.exports instead of tailwind.config in production
// remember to use module.exports instead of tailwind.config in production
module.exports = {
  content: ["./src/**/*.{html,vue,svelte,js,jsx,tsx}"],
  theme: {
    extend: {// remember to use module.exports instead of tailwind.config in production
      fontFamily: {
        "text-3xl-leading-9-font-bold": "Inter-Bold, sans-serif",
      },
      fontSize: {
        "text-3xl-leading-9-font-bold": "30px",
      },
      fontWeight: {
        "text-3xl-leading-9-font-bold": "700",
      },
      lineHeight: {
        "text-3xl-leading-9-font-bold": "36px",
      },
      borderRadius: {
        "corner-extra-small": "4px",
      },
      colors: {
        "default-white": "#ffffff",
        "default-gray-200": "#e5e7eb",
      },
      keyframes: {
        slidesUp: {
          '0%, 20%': { transform: 'translateY(0)' },
          '25%, 45%': { transform: 'translateY(-100%)' },
          '50%, 70%': { transform: 'translateY(-200%)' },
          '75%, 95%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(-400%)' },
        }
      },
      animation: {
        'slide-up': 'slidesUp 8s infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}
