module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  env: {
    HOST: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
module.exports = {
  async rewrites() {
    return [
      
      {
        // type: LOAD_ARTICLES,
        source: "/api/:slug*",
        // destination: 'https://guestbookapibyar.herokuapp.com/api/:slug*', // Proxy to Backend
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:slug*`,
       
      },
    ];
  },
};
