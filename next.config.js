module.exports = {
  reactStrictMode: true,
};
module.exports = {
  async rewrites() {
    return [
      {
        // type: LOAD_ARTICLES,
        source: "/api/:slug*",
        // destination: 'https://guestbookapibyar.herokuapp.com/api/:slug*', // Proxy to Backend
        destination: "http://localhost:5000/api/:slug*",
      },
    ];
  },
};
