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
- [ ] Admin user login - use precreated account
- [ ] Tournament list page
    - show all
    - filter by date
    - api should take optional date input
    - pagination?
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
- [ ] Bonus: add final score for a player by tournament