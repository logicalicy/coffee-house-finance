class AddPortfolioToPosition < ActiveRecord::Migration
  def change
    add_column :positions, :portfolio_id, :integer
  end
end
