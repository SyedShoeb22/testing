export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    if (pathname === "/") {
      pathname = "/index.html";
    }

    const objectKey = pathname.slice(1);
    const object = await env.R2_BUCKET.get(objectKey);

    if (!object) {
      return new Response("Not Found", { status: 404 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);

    return new Response(object.body, { headers });
  },
};
