# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'
100.times do
  Tournament.create(
    name: Faker::Company.name,
    course_name: Faker::Coffee.blend_name,
    date: Faker::Date.in_date_period)
end
100.times do
  Player.create(
    name: Faker::Name.name,
    handicap: Faker::Number.number(digits: 2),
    location: Faker::Address.full_address)
end