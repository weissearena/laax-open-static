addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
return new Response(null, {
  headers: {
    'content-type': 'text/html;charset=UTF-8',
  },
})
}