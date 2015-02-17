class PortfoliosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_portfolio, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def index
    @portfolios = current_user.portfolios.all
    respond_with(@portfolios)
  end

  def show
    redirect_to root_url
  end

  def new
    @portfolio = current_user.portfolios.new
    respond_with(@portfolio)
  end

  def edit
  end

  def create
    @portfolio = current_user.portfolios.new(portfolio_params)
    @portfolio.save
    respond_with(@portfolio)
  end

  def update
    @portfolio.update(portfolio_params)
    respond_with(@portfolio)
  end

  def destroy
    @portfolio.destroy
    respond_with(@portfolio)
  end

  private
    def set_portfolio
      unless @portfolio = current_user.portfolios.where(id: params[:id]).first # Sets portfolio if present.
        flash[:alert] = 'Portfolio not found.'
        redirect_to root_url
      end
    end

    def portfolio_params
      params.require(:portfolio).permit(:name, :description, :default_currency)
    end
end
