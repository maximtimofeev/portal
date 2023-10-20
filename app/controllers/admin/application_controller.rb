class Admin::ApplicationController < ::ApplicationController
  include Auth
  # protect_from_forgery with: :exception
  # before_action :check_auth

  include InertiaCsrf
  layout 'admin'

  # def check_auth
  #   if !signed_in?
  #     authenticate_admin_user!
  #   end
  # end
end
