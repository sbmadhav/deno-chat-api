addEventListener("fetch", (evt) => {
    const response = new Response("Hello World second update!", {
      headers: { "content-type": "text/plain" },
    });
    evt.respondWith(response);
});