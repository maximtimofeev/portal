class HomeController < ApplicationController
  layout 'client'

  before_action :set_seo_attrs, only: :index
  def index
    render inertia: 'HomePage', props: {
      seo: @seo
    }
  end

  private

  def set_seo_attrs
    @seo = {
      title: 'Home page',
      meta: [
        {
          name: 'description',
          content: 'description home page with description meta tag'
        }
      ]
    }
  end
end
