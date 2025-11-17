export default function manifest() {
  return {
    name: 'Kaialan Portfolio',
    short_name: 'Kaialan',
    description: 'My creative corner, showcasing works in UI/UX, Web, Mobile design',
    start_url: '/',
    scope: "/",
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: "portrait-primary",
    lang: "en",
    id: "/",
    dir: "ltr",
    categories: ["portfolio", "design", "personal", "brand", "freelancer"],
    // screenshots: [
    //   {
    //     src: "/screenshots/home.png",
    //     type: "image/png",
    //     sizes: "1280x720"
    //   }
    // ],
    display_override: ["standalone", "fullscreen"],
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