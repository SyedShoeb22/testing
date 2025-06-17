export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/static/")) {
      const originUrl = `https://pub-20771ffbfa2343be8b01ca6bf4b7046c.r2.dev/lxp-static${url.pathname}`;
      console.log("Proxying to:", originUrl);
      return fetch(originUrl);
    }

    return new Response("Not Found", { status: 404 });
  },
};
