Rails.application.routes.draw do
  root 'home#index'

  get 'example' => 'example#index'

  namespace :admin do
    devise_for :users, skip: [:passwords, :registrations], controllers: {
      sessions: 'admin/sessions'
    }, path: '', path_names: {
      sign_in: 'login',
      sign_out: 'logout',
    }

    get '/' => 'home#index'
  end
end
