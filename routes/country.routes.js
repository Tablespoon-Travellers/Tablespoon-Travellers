/* 
TODO: ADD ROUTES FOR LIST, DETAIL, CREATE, UPDATE AND DELETE
 */

// starter code in both routes/countries.routes.js and routes/countries.routes.js
const router = require("express").Router();
const Yummly = require('../clients/yummly');

const Country = require("../models/Country.model");

// create country form
router.get("/create", (req, res) => {
  res.render("countries/new-country");
});

// gets 1 country
router.get("/:id", (req, res) => {
  Country.findById(req.params.id)
    .populate('created_by')
    .populate('updated_by')
    .then((country) => {
      // Retrieve an access token
      req.app.spotifyApi
        .clientCredentialsGrant()
        .then((data) => {
          req.app.spotifyApi.setAccessToken(data.body["access_token"]);
          req.app.spotifyApi
            .getPlaylist(country.playlistId)
            .then(async (playlist) => {
              const yummly = new Yummly()
              const recipe = await yummly.search(country.dishName)
              // recipe.content.ingredientLines.forEach(
              //   (item) => {
              //     console.log(JSON.stringify(item, undefined, 2))
              //     imperialString = `${item.amount.imperial.quantity} ${item.amount.imperial.unit.pluralAbbreviation}`
              //     metricString = `${item.amount.metric.quantity} ${item.amount.metric.unit.pluralAbbreviation}`
              //     item.wholeLine = item.wholeLine.replace(imperialString, metricString)
              //   }
              // )
              // console.log(JSON.stringify(recipe, undefined, 2))
              res.render("countries/country-details", {
                country,
                recipe,
                playlist: playlist.body,
              });
            })
            .catch((err) =>
              console.log("The error while fetching playlist occurred: ", err)
            );
        })
        .catch((error) =>
          console.log(
            "Something went wrong when retrieving an access token",
            error
          )
        );
    })
    .catch((error) => console.log(error));
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
router.get("/-/show-me-a-random-country", (req, res) => {
  Country.find()
    .then((allCountries) => {
      // TODO: Not sure this works with Mongoose
      const randomCountry =
        allCountries[Math.floor(Math.random() * allCountries.length)];
      res.redirect(`/countries/${randomCountry._id}`)
    })
    .catch((error) => console.log(error));
});

// creates a country NEEDS TO CHANGE TO SUPPORT RECIPES
router.post("/", (req, res) => {
  const { name, description, playlistId, dishName, imageUrl } = req.body;
  Country.create({ name, description, playlistId, dishName, imageUrl, created_by: req.session.currentUser, updated_by: req.session.currentUser })
    .then((newCountry) => res.redirect("/countries/"))
    .catch((error) => console.log(error));
});

router
  .route("/:id/edit")
  .get((req, res) => {
    Country.findById(req.params.id)
      .then((country) => {
        res.render("countries/edit-country", { country });
      })
      .catch((error) => console.log(error));
  })
  .post((req, res) => {
    const { name, description, playlistId, dishName, imageUrl } = req.body;
    Country.findByIdAndUpdate(req.params.id, {
      name,
      description,
      playlistId,
      dishName,
      imageUrl,
      updated_by: req.session.currentUser
    })
      .then((updateCountry) => res.redirect(`/countries/${req.params.id}`))
      .catch((error) => console.log(error));
  });

module.exports = router;
