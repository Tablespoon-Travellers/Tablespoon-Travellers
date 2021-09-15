# Tablespoon Travellers 

## Description

An app that lets you travel with your tastebuds and experience the world through food.
 
## User Stories

- **404** - As users, we want to see a nice 404 page when we go to a page that doesn’t exist so that we know it was our fault 
- **500** - As users, we want to see an error page when the developers screws it up so that we know that is not our fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **countries list** - As a user I want to see all the countries available so that I can choose which ones I want to attend
- **countries create** - As a user I want to create an event so that I can invite others to attend
- **countries detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend 

## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list of events created by the user
- list events the user is attending

Geo Location:
- add geolocation to events when creating
- show event in a map in event detail page
- show all events in a map in the event list page

Homepage
- ...

## ROUTES:

- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

- GET /events
  - renders the event list + the create form
- POST /events/create 
  - redirects to / if user is anonymous
  - body: 
    - name
    - date
    - location
    - description
- GET /events/:id
  - renders the event detail page
  - includes the list of attendees
  - attend button if user not attending yet
- POST /events/:id/attend 
  - redirects to / if user is anonymous
  - body: (empty - the user is already stored in the session)


## Models

User model
 
```
username: String
password: String
```

Event model

```
owner: ObjectId<User>
name: String
description: String
date: Date
location: String
attendees: [ObjectId<User>]
``` 

## Links


### Wireframes

[Wireframes Link](https://whimsical.com/mathijs-and-jesse-project-2-SiS68mSSwMX9QFswLDdKbZ)

### Trello

[Miro Board](https://miro.com/app/board/o9J_lxn1n94=/)

### Git

[Repository Link](https://github.com/Tablespoon-Travellers/Tablespoon-Travellers)

[Deploy Link](https://tablespoon-travellers.herokuapp.com/)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1qkwZ_TNYzlOh7jphpve0BpYQ7aXOvjFgTHpo2DQi5gU/edit?usp=sharing)
