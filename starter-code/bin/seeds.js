const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose.connect("mongodb://localhost/celebrity-app");

Celebrity.collection.drop();
Movie.collection.drop();

const celebrities = [
    {
        name: "Peter Dinklage",
        occupation: "actor",
        catchPhrase: "A Lannister always pays his debts!",
    },
    {
        name: "Maisie Williams",
        occupation: "actor",
        catchPhrase: "Winter is Coming!",
    },
    {
        name: "Emilia Clarke",
        occupation: "actor",
        catchPhrase: "Dracarys!",
    },
];

Celebrity.create(celebrities)
    .then(data => {
        console.log(`Created ${data.length} celebrities successfully`);
    })
    .catch(err => {
        console.error("Error while seeding the database", err);
    });

const movies = [
    {
        title: "the developer movie",
        genre: "comedy",
        plot: "a movie about a failed developer",
    },
    {
        title: "the developer movie 2",
        genre: "tragedy",
        plot: "the developer fails even more, it is not fun anymore, but sad",
    },
    {
        title: "Game of Thrones - the movie",
        genre: "drama",
        plot: "winter is coming...",
    },
];

Movie.create(movies)
    .then(data => {
        console.log(`Created ${data.length} movies successfully`);
    })
    .catch(err => {
        console.error("Error while seeding the database", err);
    });
