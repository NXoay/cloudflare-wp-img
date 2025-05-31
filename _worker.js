export default {
  async fetch(request, env) {
    try {
      // Configuration - Use environment variable with fallback
      const TARGET_DOMAIN = env.TARGET_DOMAIN || 'kudoshirt.com';
      const STRIP_METADATA = env.STRIP_METADATA || '';

      const originalUrl = new URL(request.url);

      if (originalUrl.pathname === '/' || 
          originalUrl.pathname === '/favicon.ico' || 
          originalUrl.pathname === '/robots.txt') {
        return Response.redirect(`https://${TARGET_DOMAIN}${originalUrl.pathname}`, 301);
      }
      // Build proxied URL with required parameters
      const proxiedUrl = new URL(`https://i0.wp.com/${TARGET_DOMAIN}${originalUrl.pathname}`);
      
      // Copy original query parameters and add required ones
      originalUrl.searchParams.forEach((value, key) => {
        proxiedUrl.searchParams.append(key, value);
      });
      
      if (STRIP_METADATA === '' || STRIP_METADATA === 'none') {
        proxiedUrl.searchParams.append('strip', 'none');
      }
      proxiedUrl.searchParams.append('ssl', 'true');

      // Build request with optimized options
      const newRequest = new Request(proxiedUrl, {
        method: request.method,
        headers: request.headers,
        body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
        redirect: 'follow',
      });

      // Optimized cache configuration
      const response = await fetch(newRequest, {
        cf: {
          cacheEverything: true,
          cacheTtlByStatus: {
            "200-299": 86400,  // 1 day for success
            "404": 30,         // 30 seconds for 404s
            "500-599": 0       // No cache for errors
          }
        }
      });

      // Create response headers efficiently
      const headers = new Headers(response.headers);
      
      // Set cache headers based on status
      const isSuccess = response.status >= 200 && response.status < 300;
      headers.set('Cache-Control', isSuccess 
        ? 'public, max-age=31536000, immutable' 
        : 'no-store, max-age=0'
      );
      
      //headers.set('X-Frame-Options', 'SAMEORIGIN');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });

    } catch (err) {
      return new Response(`Proxy error: ${err.message}`, { 
        status: 500,
        headers: { 'Cache-Control': 'no-store' }
      });
    }
  }
};
