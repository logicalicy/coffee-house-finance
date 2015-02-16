json.array!(@positions) do |position|
  json.extract! position, :id, :isin, :units, :currency, :purchase_date, :purchase_price, :current_price, :asset_class, :ticker_symbol, :description, :portfolio_id
  json.url position_url(position, format: :json)
end
