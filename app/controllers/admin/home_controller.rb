class Admin::HomeController < Admin::ApplicationController
  def index
    render inertia: 'HomePage', props: {
      title: 'Dashboard'
    }
  end
end
