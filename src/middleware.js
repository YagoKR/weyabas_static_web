// src/middleware.js
export async function onRequest(context, next) {
  const response = await next();
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  return response;
}