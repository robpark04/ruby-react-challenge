class Api::V1::TournamentPlayersController < ApplicationController

  before_action :set_tournament_players, only: %i[ show destroy ]
  before_action :set_tournament_player_record, only: %i[ update ]

  # GET /players
  def index
    @players = TournamentPlayer.all

    render json: @players
  end
  
  # GET /tournament_players/1
  def show
    render json: @tournamentPlayers
  end

  # POST /tournaments
  def create
    @tournamentPlayers = TournamentPlayer.new(tournament_players_params)

    if @tournamentPlayers.save
      render json: @tournamentPlayers, status: :created, location: api_v1_tournament_players_path(@tournamentPlayers)
    else
      render json: @tournamentPlayers.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tournaments/1
  def update
    if @tournamentPlayerRecord.update(tournament_players_params)
      render json: @tournamentPlayerRecord
    else
      render json: @tournamentPlayerRecord.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tournaments/1
  def destroy
    @tournamentPlayers.destroy
    render json: {}
  end

  # DELETE /tournaments/1/2
  def destroyPlayer
    puts params
    TournamentPlayer.delete_by(tournament_id: params[:id], player_id: params[:player])
    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tournament_player_record
      @tournamentPlayerRecord = TournamentPlayer.find(params[:id])
    end
    def set_tournament_players
      @tournamentPlayers = TournamentPlayer.where(tournament_id: params[:id]).joins(:players).select("players.*, tournament_players.*")
    end

    # Only allow a list of trusted parameters through.
    def tournament_players_params
      params.require(:tournament_player).permit(:id, :player_id, :tournament_id, :score)
    end
end
