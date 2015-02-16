require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  include Devise::TestHelpers
  include Warden::Test::Helpers
  test "should get index" do
    get :index
    assert_response :success
  end

end
