require 'test_helper'

class StoreReviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get store_reviews_index_url
    assert_response :success
  end

end
