class TournamentPlayer < ApplicationRecord
  has_many :players, :foreign_key => "id", :primary_key => "player_id"
  has_many :tournaments, :foreign_key => "id", :primary_key => "tournament_id"
end
