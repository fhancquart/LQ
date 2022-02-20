// const withPWA = require('next-pwa');

// module.exports = withPWA({
//     reactStrictMode: true,
//     pwa:{
//       dest: "public",
//       register: true,
//       skipWaiting: true,
//       disable: process.env.NODE_ENV === 'development'
//     }
// })

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/accueil': { page: '/accueil' },
    }
  }
}