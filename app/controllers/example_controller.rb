class ExampleController < ApplicationController
  def index
    render inertia: 'ExamplePage', props: {
      title: 'Example page'
    }
  end
end
