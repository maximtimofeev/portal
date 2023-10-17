Rails.application.routes.draw do
  root 'home#index'

  get 'example' => 'example#index'
  get 'admin' => 'admin#index'

  # get "*admin_path", to: 'admin#index'
  # get "/*path", to: 'home#index'

  # match '/admin', to: 'admin#index', via: :all
  # scope :admin do
  #   match '*path', to: 'admin#index', via: :all
  # end
end
