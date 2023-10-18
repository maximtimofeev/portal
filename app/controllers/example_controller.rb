class ExampleController < ApplicationController
  layout 'client'

  before_action :set_seo_attrs, only: :index

  def index
    render inertia: 'ExamplePage', props: {
      seo: @seo
    }
  end

  private

  def set_seo_attrs
    @seo = {
      title: 'Example page',
      meta: [
        {
          name: 'description',
          content: 'description example page with description meta tag'
        }
      ]
    }
  end
end
