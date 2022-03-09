Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tournaments
      resources :players
      resources :tournament_players
      delete 'tournament_players/:id/:player' => 'tournament_players#destroyPlayer', :as=>:remove_player_from_tournament
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
