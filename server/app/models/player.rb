class Player < ApplicationRecord
  belongs_to :tournament_player, optional: true
end
