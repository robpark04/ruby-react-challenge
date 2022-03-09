class Api::V1::PlayersController < ApplicationController
  before_action :set_player, only: %i[ show update destroy ]

  # GET /players
  def index
    @players = Player.all.order(created_at: :desc)

    render json: @players
  end

  # GET /players/1
  def show
    render json: @player
  end

  # POST /players
  def create
    @player = Player.new(player_params)

    if @player.save
      render json: @player, status: :created, location: api_v1_player_path(@player)
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /players/1
  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /players/1
  def destroy
    TournamentPlayer.delete_by(player_id: params[:id])
    @player.destroy

    render json: {}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_params
      params.require(:player).permit(:name, :handicap, :location)
    end
end
