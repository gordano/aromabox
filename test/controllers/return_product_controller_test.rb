require 'test_helper'

class ReturnProductControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get return_product_index_url
    assert_response :success
  end

end
