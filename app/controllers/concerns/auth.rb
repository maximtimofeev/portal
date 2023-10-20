require 'active_support/concern'

module Auth
  extend ActiveSupport::Concern

  included do
    protect_from_forgery with: :exception
    before_action :check_auth
  end

  private

  def check_auth
    if !signed_in?
      authenticate_admin_user!
    end
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def after_sign_out_path_for(_resource_or_scope)
    new_user_session_path
  end
end
