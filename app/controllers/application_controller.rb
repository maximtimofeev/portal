class ApplicationController < ActionController::Base
  layout 'client'

  def not_found
    render inertia: 'ErrorPage', props: {
      status: 404
    }, status: 404
  end
end
