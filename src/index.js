export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/static/')) {
      // Remove '/static' and append the actual path under 'lxp-static'
      const rewrittenPath = url.pathname.replace('/static', '')
      const r2Url = `https://pub-20771ffbfa2343be8b01ca6bf4b7046c.r2.dev/lxp-static${rewrittenPath}`
      return fetch(r2Url)
    }

    return new Response('Not Found', { status: 404 })
  }
}
