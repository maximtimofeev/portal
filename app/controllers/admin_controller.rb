class AdminController < ApplicationController
  def index
    render inertia: 'HomePage', props: {
      title: 'admin homepage'
    }
  end
end
