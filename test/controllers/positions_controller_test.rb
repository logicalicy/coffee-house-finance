require 'test_helper'

class PositionsControllerTest < ActionController::TestCase

  include Devise::TestHelpers
  include Warden::Test::Helpers

  setup do
    @position = positions(:one)
  end

  test "should get index" do
    get :index
    assert_response 302
    assert_not_nil assigns(:positions)
  end

  test "should get new" do
    get :new
    assert_response 302
  end

  test "should create position" do
    assert_difference('Position.count') do
      post :create, position: { asset_class: @position.asset_class, currency: @position.currency, current_price: @position.current_price, isin: @position.isin, purchase_date: @position.purchase_date, purchase_price: @position.purchase_price, units: @position.units }
    end

    assert_redirected_to portfolio_position_path(assigns(:position))
  end

  test "should show position" do
    get :show, id: @position
    assert_response 302
  end

  test "should get edit" do
    get :edit, id: @position
    assert_response 302
  end

  test "should update position" do
    patch :update, id: @position, position: { asset_class: @position.asset_class, currency: @position.currency, current_price: @position.current_price, isin: @position.isin, purchase_date: @position.purchase_date, purchase_price: @position.purchase_price, units: @position.units }
    assert_redirected_to portfolio_position_path(assigns(:position))
  end

  test "should destroy position" do
    assert_difference('Position.count', -1) do
      delete :destroy, id: @position
    end

    assert_redirected_to root_path
  end
end
