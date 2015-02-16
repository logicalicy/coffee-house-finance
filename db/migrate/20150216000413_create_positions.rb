class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
      t.string :isin
      t.integer :units
      t.string :currency
      t.date :purchase_date
      t.decimal :purchase_price
      t.decimal :current_price
      t.string :asset_class

      t.timestamps
    end
  end
end
