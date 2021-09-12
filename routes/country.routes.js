/* 
TODO: ADD ROUTES FOR LIST, DETAIL, CREATE, UPDATE AND DELETE
 */

// starter code in both routes/countries.routes.js and routes/countries.routes.js
const router = require("express").Router();

const Country = require("../models/Country.model");

// create country form
router.get("/create", (req, res) => {
    Recipe.find().then((allRecipes) => {
      res.render("countries/new-country", {allRecipes});
    })
});

// gets 1 country
router.get("/:id", (req, res) => {
  Country.findById(req.params.id).then((country) => {
    res.render("countries/country-details", country);
  });
});

// deletes country
router.get("/:id/delete", (req, res) => {
  Country.findByIdAndDelete(req.params.id)
    .then((deletedCountry) => res.redirect("/countries"))
    .catch((error) => console.log(error));
});

// finds all countries
router.get("/", (req, res) => {
  Country.find().then((allCountries) => {
    res.render("countries/countries", { allCountries });
  });
});

// gets a random country
router.get("/show-me-a-random-country", (req, res) => {
  Country.find().then((allCountries) => {
    // TODO: Not sure this works with Mongoose
    const randomCountry =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    res.render("countries/random-country", { country: randomCountry });
  });
});

// creates a country NEEDS TO CHANGE TO SUPPORT RECIPES
router.post("/", (req, res) => {
  const { name, description, playlistId, recipeUrl, imageUrl } = req.body;
  Country.create({ name, description, playlistId, recipeUrl, imageUrl }).then(
    (newCountry) => res.redirect("/countries/")
  );
});

router
  .route("/:id/edit")
  .get((req, res) => {
    Country.findById(req.params.id)
      .populate("recipe")
      .then((country) => {
        Recipe.where("_id")
          .nin(country.recipe)
          .then((allRecipes) => {
            res.render("countries/edit-country", { country, allRecipes });
          });
      });
  })
  .post((req, res) => {
    const { title, genre, plot, recipe } = req.body;
    Country.findByIdAndUpdate(req.params.id, { title, genre, plot, recipe })
      .then((updateCountry) => res.redirect(`/countries/${req.params.id}`))
      .catch((error) => console.log(error));
  });

module.exports = router;
