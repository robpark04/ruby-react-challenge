# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'
10.times do
  Tournament.create(
    name: Faker::Lorem.sentence,
    course_name: Faker::Lorem.paragraph,
    date: Faker::Date.in_date_period)
end
10.times do
  Player.create(
    name: Faker::Lorem.sentence,
    handicap: Faker::Number.number(digits: 2),
    location: Faker::Address.full_address)
end