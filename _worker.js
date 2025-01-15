addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Customize this to match your directory structure
  const filePath = '/public' + path;

  // Serve index.html for root requests
  if (path === '/') {
    return fetch(`<span class="math-inline">\{url\.origin\}</span>{filePath}index.html`);
  }

  // Try to serve the requested file
  const response = await fetch(`<span class="math-inline">\{url\.origin\}</span>{filePath}`);

  // If the file exists, return it
  if (response.status === 200) {
    return response;
  }

  // Optional: Customize your 404 response
  return new Response('Not found', { status: 404 });
}