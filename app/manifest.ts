export default function manifest() {
  return {
    name: 'Kaialan Portfolio',
    short_name: 'Portfolio',
    description: 'Portfolio showcasing design projects',
    start_url: '/',
    scope: "/",
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: "portrait-primary",
    prefer_related_applications: false,
    related_applications: [],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  }
}