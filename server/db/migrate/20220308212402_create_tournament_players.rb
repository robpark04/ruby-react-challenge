class CreateTournamentPlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :tournament_players do |t|
      t.references :tournament_id, references: :tournaments, null: false # creates 'tournament_id_id'
      t.references :player_id, references: :players, null: false # creates 'player_id_id'

      t.timestamps
    end

    rename_column :tournament_players, :tournament_id_id, :tournament_id
    add_foreign_key :tournament_players, :tournaments, column: 'tournament_id', primary_key: 'id'

    rename_column :tournament_players, :player_id_id, :player_id
    add_foreign_key :tournament_players, :players, column: 'player_id', primary_key: 'id'
  end
end
