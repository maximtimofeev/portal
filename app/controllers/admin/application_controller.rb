class Admin::ApplicationController < ::ApplicationController
  include Auth
  include InertiaCsrf

  layout 'admin'

  def not_found
    render inertia: 'ErrorPage', props: {
      status: 404
    }, status: 404
  end

  def current_user
    current_admin_user
  end
end
