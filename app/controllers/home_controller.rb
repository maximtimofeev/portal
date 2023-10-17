class HomeController < ApplicationController
  def index
    render inertia: 'HomePage', props: {
      title: 'Home page'
    }
  end
end
