class Portfolio < ActiveRecord::Base
    belongs_to :user
    has_many :positions
    # Ensure that a user_id is present
    validates :user_id, presence: true
end
