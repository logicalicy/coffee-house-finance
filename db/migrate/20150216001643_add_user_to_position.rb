class AddUserToPosition < ActiveRecord::Migration
  def change
    add_column :positions, :user_id, :integer
  end
end
