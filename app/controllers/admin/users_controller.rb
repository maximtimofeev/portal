class Admin::UsersController < Admin::ApplicationController
  before_action :find_user, only: [:edit, :update, :destroy]
  load_and_authorize_resource

  def index
    @users = User.page(params[:page])
    render inertia: 'users/UsersPage', props: {
      title: 'Users',
      users: UserBlueprint.render_as_json(@users)
    }
  end

  def new
    render inertia: 'users/UserEditPage', props: {
      title: 'New user',
      roles: User.roles.keys,
    }
  end

  def create
    service = Users::CreateService.new(user_params)
    service.call

    handle_service_result(service, new_admin_user_path)
  end

  def edit
    render inertia: 'users/UserEditPage', props: {
      title: 'Edit user',
      user: UserBlueprint.render_as_json(@user),
      roles: User.roles.keys
    }
  end

  def update
    service = Users::UpdateService.new(user_params, @user)
    service.call

    handle_service_result(service, edit_admin_user_path)
  end

  def destroy
    if @user == current_user
      redirect_to admin_users_path, notice: 'You can not delete yourself'
    else
      notice = @user.destroy ? 'User was deleted' : 'Failed to delete user'
      redirect_to admin_users_path, notice: notice
    end
  end

  private

  def handle_service_result(service, return_path)
    unless service.errors.present?
      service.user.save
      redirect_to admin_users_path
    else
      redirect_to return_path, inertia: { errors: service.errors }, notice: "Failed to create or update user"
    end
  end

  def find_user
    @user = User.find(user_params[:id])
  end

  def user_params
    params.permit(:id, :first_name, :last_name, :email, :login, :password, :role)
    .reject { |_, v| v.blank? }
  end
end
