export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/static/')) {
      url.hostname = 'pub-20771ffbfa2343be8b01ca6bf4b7046c.r2.dev';  // Replace with your R2 public URL
      url.pathname = '/lxp-static' + url.pathname;
      return fetch(url.toString());
    }

    return new Response('Not Found', { status: 404 });
  },
};
