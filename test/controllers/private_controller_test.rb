require 'test_helper'

class PrivateControllerTest < ActionDispatch::IntegrationTest
  test "should get personal_data" do
    get private_personal_data_url
    assert_response :success
  end

  test "should get my_orders" do
    get private_my_orders_url
    assert_response :success
  end

  test "should get order_item" do
    get private_order_item_url
    assert_response :success
  end

  test "should get my_favorites" do
    get private_my_favorites_url
    assert_response :success
  end

  test "should get promo_gifts" do
    get private_promo_gifts_url
    assert_response :success
  end

  test "should get my_subscription" do
    get private_my_subscription_url
    assert_response :success
  end

end
