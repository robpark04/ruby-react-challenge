class Tournament < ApplicationRecord
  belongs_to :tournament_player, optional: true
end
