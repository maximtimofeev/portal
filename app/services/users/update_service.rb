class Users::UpdateService
  attr_reader :user, :errors

  def initialize(params, user)
    @user = user
    @params = params
  end

  def call
    if @params[:password].present?
      @user.enforce_password_validation
    end

    @user.assign_attributes(@params)

    unless (@user.valid?) 
      @errors = @user.errors
      return
    end
  end
end