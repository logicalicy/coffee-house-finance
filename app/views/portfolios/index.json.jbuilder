json.array!(@portfolios) do |portfolio|
  json.extract! portfolio, :id, :name, :description, :default_currency
  json.url portfolio_url(portfolio, format: :json)
end
