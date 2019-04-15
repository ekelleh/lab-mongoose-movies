const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/celebrities", (req, res, next) => {
    Celebrity.find({})
        .then(celebrities => {
            res.render("celebrities", { celebrities });
        })
        .catch(err => {
            console.log("Error rendering celebrities", err);
        });
});

router.get("/celebrities/:id", (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render("celebrities/show", { celebrity });
        })
        .catch(err => {
            console.log("Error rendering celebrities", err);
            next();
        });
});

router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({
        name,
        occupation,
        catchPhrase,
    })
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch(err => {
            console.error("Error while adding celebrity", err);
        });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch(err => {
            console.error("Error while deleting celebrity", err);
        });
});

router.get("/movies", (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render("movies", { movies });
        })
        .catch(err => {
            console.log("Error rendering movies", err);
        });
});

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render("movies/show", { movie });
        })
        .catch(err => {
            console.log("Error rendering movies", err);
            next();
        });
});

module.exports = router;
