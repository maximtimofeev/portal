class User < ApplicationRecord
  NAME_FORMAT_REGEX = /\A[a-z ,.'-]+\z/

  enum role: %i[admin seo content]

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable

  validates :first_name, length: { maximum: 50 }, format: { with: NAME_FORMAT_REGEX }, allow_blank: true
  validates :last_name, length: { maximum: 50 }, format: { with: NAME_FORMAT_REGEX }, allow_blank:  true

  validates :login, presence: true, uniqueness: true, length: { minimum: 3, maximum: 50 }, format: { with: /\A[\d|\w]+\z/ }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }, if: :password_required?

  def enforce_password_validation
    @enforce_password_validation = true
  end

  private

  def password_required?
    @enforce_password_validation || password.present?
  end

  def self.find_for_database_authentication(auth_hash)
    self.where("login = :query OR email = :query", query: auth_hash[:login].downcase).first
  end
end
