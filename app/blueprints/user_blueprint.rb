class UserBlueprint < Blueprinter::Base
  identifier :id
  fields :first_name, :last_name, :email, :role
  field :created_at do |user|
    user.created_at.to_i
  end
  field :last_sign_in_at do |user|
    user.last_sign_in_at.to_i
  end
end