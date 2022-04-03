"use strict"

const express = require("express"),
app = express(),
errorController= require("./controllers/errorController"),
homeController= require("./controllers/homeController"),
layouts = require("express-ejs-layouts");


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/", homeController.index);
app.get("/films", homeController.showFilms);
app.get("/reels", homeController.showReels);
app.get("/itwork",homeController.showItwork);

app.use(errorController.noPageFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});





