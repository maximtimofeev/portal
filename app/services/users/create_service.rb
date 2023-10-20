class Users::CreateService
  attr_reader :user, :errors

  def initialize(params)
    @params = params
  end

  def call
    @user = User.new(@params)

    unless (@user.valid?) 
      @errors = @user.errors
      return
    end
  end
end