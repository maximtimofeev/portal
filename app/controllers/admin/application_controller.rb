class Admin::ApplicationController < ::ApplicationController
  include Auth
  include InertiaCsrf
  include InertiaFlash

  layout 'admin'

  inertia_share auth: -> {
    if admin_user_signed_in?
      {
        user: {
          first_name: current_user.first_name,
          last_name: current_user.last_name,
          email: current_user.email
        }
      }
    end
  }

  def not_found
    render inertia: 'ErrorPage', props: {
      status: 404
    }, status: 404
  end

  def current_user
    current_admin_user
  end
end
