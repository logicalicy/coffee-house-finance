class AddTickerSymbolToPositions < ActiveRecord::Migration
  def change
    add_column :positions, :ticker_symbol, :string
  end
end
