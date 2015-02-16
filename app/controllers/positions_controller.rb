class PositionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_position, only: [:show, :edit, :update, :destroy]
  before_action :set_portfolio, only: [:index, :new, :create]

  respond_to :html, :json

  def index
    @positions = @portfolio.positions.all
    respond_with(@positions)
  end

  def show
    respond_with(@position)
  end

  def new
    @position = @portfolio.positions.new
    respond_with(@position)
  end

  def edit
  end

  def create
    @position = @portfolio.positions.new(position_params)
    @position.user = current_user
    @position.save
    respond_with(@position)
  end

  def update
    @position.update(position_params)
    respond_with(@position)
  end

  def destroy
    @position.destroy
    redirect_to root_url
  end

  private
    def set_position
      unless @position = current_user.positions.where(id: params[:id]).first
        flash[:alert] = 'Position not found.'
        redirect_to root_url
      end
    end
    def set_portfolio
      unless @portfolio = current_user.portfolios.where(id: params[:portfolio_id]).first
        flash[:alert] = 'Portfolio not found.'
        redirect_to root_url
      end
    end
    def position_params
      params.require(:position).permit(:isin, :units, :currency, :purchase_date, :purchase_price, :current_price, :asset_class, :description, :ticker_symbol)
    end
end
