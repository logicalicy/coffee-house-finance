class Position < ActiveRecord::Base
    belongs_to :user
    belongs_to :portfolio
    # Ensure that a user_id is present.
    validates :user_id, presence: true
    # Ensure that ISIN is present and 12 chars long.
    validates :isin, length: { is: 12 }, presence: true
end
