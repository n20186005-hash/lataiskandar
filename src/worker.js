export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isProductionHost = url.hostname === 'lataiskandar.com' || url.hostname === 'www.lataiskandar.com';
    if (isProductionHost && (url.protocol !== 'https:' || url.hostname !== 'lataiskandar.com')) {
      url.protocol = 'https:';
      url.hostname = 'lataiskandar.com';
      url.port = '';
      return Response.redirect(url.href, 301);
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(response.body, { status: 404, statusText: 'Not Found', headers });
  },
};
