/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 0 24px  rgba(0, 0, 0, 0.15)',
      },
      container: {
        center: true,
      },
      colors: {
        'brand': '#0095f6',
        'facebook': '#385185',
        'link': '#262626',
        'linkHover': '#fafafa'

      },
      backgroundImage: {
        'logo-pattern': 'url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW)',
        'logo-instagram': 'url(https://static.cdninstagram.com/rsrc.php/v3/yK/r/ATdtiLb2BQ9.png)',
      }

    },
  },
  plugins: [],
}