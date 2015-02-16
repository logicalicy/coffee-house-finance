require 'test_helper'

class PortfoliosControllerTest < ActionController::TestCase

  include Devise::TestHelpers
  include Warden::Test::Helpers

  setup do
    @portfolio = portfolios(:one)
  end

  test "should get index" do
    get :index
    assert_response 302
    assert_not_nil assigns(:portfolios)
  end

  test "should get new" do
    get :new
    assert_response 302
  end

  test "should create portfolio" do
    assert_difference('Portfolio.count') do
      post :create, portfolio: { default_currency: @portfolio.default_currency, description: @portfolio.description, name: @portfolio.name }
    end

    assert_redirected_to portfolio_path(assigns(:portfolio))
  end

  test "should show portfolio" do
    get :show, id: @portfolio
    assert_response 302
  end

  test "should get edit" do
    get :edit, id: @portfolio
    assert_response 302
  end

  test "should update portfolio" do
    patch :update, id: @portfolio, portfolio: { default_currency: @portfolio.default_currency, description: @portfolio.description, name: @portfolio.name }
    assert_redirected_to portfolio_path(assigns(:portfolio))
  end

  test "should destroy portfolio" do
    assert_difference('Portfolio.count', -1) do
      delete :destroy, id: @portfolio
    end

    assert_redirected_to portfolios_path
  end
end
