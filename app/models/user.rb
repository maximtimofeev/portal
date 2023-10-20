class User < ApplicationRecord
  NAME_FORMAT_REGEX = /\A[a-z ,.'-]+\z/

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable

  validates :first_name, presence: true, length: { maximum: 50 }, format: { with: NAME_FORMAT_REGEX }
  validates :last_name, presence: true, length: { maximum: 50 }, format: { with: NAME_FORMAT_REGEX }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }, if: :password_required?

  def enforce_password_validation
    @enforce_password_validation = true
  end

  private

  def password_required?
    @enforce_password_validation || password.present?
  end
end
