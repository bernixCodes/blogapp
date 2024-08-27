import { createServer, Model } from "miragejs";

createServer({
  models: {
    blog: Model,
  },
  seeds(server) {
    server.create("blog", {
      id: 1,
      title: "Tesla New Cyberbeast!",
      summary:
        "Tesla Releases New Car! View details on the Cybertruck and maxed-out Cyberbeast",
      tagcolor: "tag-blue",
      tag: "Automobile",
      content:
        "Last week, Tesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to North America next year (it debuted in Europe in 2020). Today, we learned more about the 2024 500e for North America, including its starting price and initial availability.Tesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to North",
      imageUrl:
        "https://cdn.europosters.eu/image/750/posters/cars-characters-i33475.jpg",
      authorImg: "https://i.pravatar.cc/40?img=2",
    });
    server.create("blog", {
      id: 5,
      title: "Food Up!",
      summary:
        "Tesla Releases New Car! View details on the Cybertruck and maxed-out Cyberbeast",
      tagcolor: "tag-red",
      tag: "Food",
      content:
        "Last week, Tesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to North America next year (it debuted in Europe in 2020). Today, we learned more about the 2024 500e for North America, including its starting price and initial availability.Tesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to North",
      imageUrl:
        "https://cdn.europosters.eu/image/750/posters/cars-characters-i33475.jpg",
      authorImg: "https://i.pravatar.cc/40?img=2",
    });
    server.create("blog", {
      id: 6,
      title: "Tesla New Cyberbeast!",
      summary:
        "Tesla Releases New Car! View details on the Cybertruck and maxed-out Cyberbeast",
      tagcolor: "tag-brown",
      tag: "Automobile",
      content:
        "Last week, Tesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to North America next year (it debuted in Europe in 2020). Today, we learned more about the 2024 500e for North America, including its starting price and initial availability.Tesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to NorthTesla dropped details on the Cybertruck and maxed-out Cyberbeast. After all that talk of supersized trucks, the North American release of the Fiat 500e buggy hits like a frosty mug of ice water.    Fiat owner, Stellantis, said it would bring the popular li’l EV to North",
      imageUrl:
        "https://cdn.europosters.eu/image/750/posters/cars-characters-i33475.jpg",
      authorImg: "https://i.pravatar.cc/40?img=2",
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/blogs", (schema, request) => {
      return schema.blogs.all();
    });

    this.get("/blogs/:id", (schema, request) => {
      let id = request.params.id;

      return schema.blogs.find(id);
    });

    this.post("/blogs", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      let newBlog = schema.blogs.create(attrs);
      return newBlog;
    });

    this.patch("/blogs/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let blog = schema.blogs.find(id);

      return blog.update(newAttrs);
    });

    this.delete("/blogs/:id", (schema, request) => {
      let id = request.params.id;

      return schema.blogs.find(id).destroy();
    });
  },
});
