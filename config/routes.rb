Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  resources :users, only: [:edit, :update]
  resources :groups, except: [:new, :create, :edit, :update]
  # resources :messages, only: [:new, :create, :show, destroy]
end