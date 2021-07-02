addEventListener("fetch", (evt) => {
    const response = new Response("Hello World!"), {
        headers: { "content-type": "text/plain" },
    });
    evt.respondWith(response);
});