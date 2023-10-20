# frozen_string_literal: true

class Admin::SessionsController < Devise::SessionsController
  layout 'admin'
  before_action :sign_in_params, only: :create
  before_action :load_user, only: :create

  # GET /admin/login
  def new
    render inertia: 'LoginPage', props: {}
  end

  # POST /admin/login
  def create
    if @user.valid_password?(sign_in_params[:password])
      sign_in(@user)
      redirect_to admin_path
    else
      redirect_to new_admin_user_session_path
    end
  end

  # DELETE /admin/logout
  def destroy
    sign_out
    redirect_to new_admin_user_session_path
  end


  private
  def sign_in_params
    params.require(:user).permit(:email, :password)
  end


  def load_user
    @user = User.find_for_database_authentication(email: sign_in_params[:email])
    if @user
      return @user
    else
      redirect_to new_admin_user_session_path
    end
  end
end
