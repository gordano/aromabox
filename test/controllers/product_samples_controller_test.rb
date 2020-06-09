require 'test_helper'

class ProductSamplesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get product_samples_index_url
    assert_response :success
  end

  test "should get show" do
    get product_samples_show_url
    assert_response :success
  end

end
