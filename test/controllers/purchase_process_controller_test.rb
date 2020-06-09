require 'test_helper'

class PurchaseProcessControllerTest < ActionDispatch::IntegrationTest
  test "should get delivery" do
    get purchase_process_delivery_url
    assert_response :success
  end

  test "should get payment" do
    get purchase_process_payment_url
    assert_response :success
  end

end
