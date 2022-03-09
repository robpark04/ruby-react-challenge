### Notes

- Separated Front end to `client` directory and backend to `server` directory
- This is to make sure we can deploy each one separately and does not need to be dependent on other packages
- Another reason is we can use server apis for any client (web, mobile, etc)

### How to run

- Clone this repo
- server

  - `cd server`
  - `bundle install`
  - `rake db:migrate db:seed`
  - `rails s`

- client:

  - `cd client`
  - `npm install`
  - `npm start`

- Load `http://localhost:3000/` in browser

## TODO/Improvements

- pagination for tournament/players list. Currently application loads all the tournaments/players in system. This will be a problem if we have more data. It will be good to have infinite scrolling in client and loads data in batches from database
- Unit testing - Added few unit tests for react components. But unit testing backend code is not done because of time constraints.

### Requirements

This code sample will show the skill set required to create a list of golf tournaments in a Rails app. We are a Ruby and React stack, so showing skill in these areas will help us in our evaluation. This is not meant to take more than 3-5 hours, but rather meant for you to showcase your experience and skill.

### Tournament List Requirements:

Create a page that contains a list of golf tournaments, from this page, you should be able to view all the golf tournaments currently in the system, as well as select a date to query and display all the golf tournaments occurring on that day.

Create another page that contains a list of players, from this list, the user should be able to click into a certain player and modify player details as well as remove them from the system.

From the golf tournaments list, the user should be able to click into a certain tournament and add/remove players, modify name, course name, date, as well as remove the tournament from the system.

Technical details:
Tournament model has attributes such as: name, course name, date.
Tournament has a many to many relationship with the Player model.
Player has attributes such as name, handicap, location.

Extra credit items: Add an additional feature to give a player a final score for a specific tournament, implement a front-end UI framework like React, write unit tests using RSpec, or add any extra features you think would add value.

For portability reasons, use SQLite as your database.

Please respond with GitHub or similar repo link when finished, share it for review.

### Tasks

- [ ] Setup basic react app (with redux, toolkit, MUI, TS, react-router-dom,storybook)
- [ ] Setup basic Rails app and integrate with SQLite
- [ ] Create first api integration btw FE and BE
- [ ] Bonus: deploy this in vercel/heroku
- [ ] Bonus: Admin user login - use precreated account
- [ ] Tournament list page
  - show all
  - filter by date
  - api should take optional date input
  - Bonus: pagination?
- [ ] Players list page
  - show all players
  - search
- [ ] Tournament page
  - add/remove players
  - modify details
  - remove tournament
- [ ] Player view page
  - modify details
  - delete player
- [ ] add final score for a player by tournament
