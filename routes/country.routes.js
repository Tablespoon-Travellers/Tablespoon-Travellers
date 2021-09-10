/* 
TODO: ADD ROUTES FOR LIST, DETAIL, CREATE, UPDATE AND DELETE
 */

// starter code in both routes/countries.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Country = require('../models/Country.model');


router.get(
  "/create",
  (req, res)=>{
  res.render("countries/new-country")
})

router.get(
  "/:id",
  (req, res)=>{
    Country.findById(req.params.id).
    then((country)=>{
      res.render("countries/country-details", country)
    })
  })

router.get("/:id/delete",(req, res)=>{
  Country.findByIdAndDelete(req.params.id)
  .then(deletedCountry => res.redirect("/countries"))
  .catch(error=> console.log(error))
})

router.get(
  '/',
  (req, res) => {
  Country.find()
  .then(allCountries => {
    res.render('countries/countries', {allCountries})})
});

router.post(
  "/",
  (req, res)=>{
  const {name, description, playlistId, recipeUrl, imageUrl} = req.body
  Country.create({name, description, playlistId, recipeUrl, imageUrl})
  .then(newCountry => res.redirect("/countries/"))
})

module.exports = router;