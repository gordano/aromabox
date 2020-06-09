require 'test_helper'

class TotalPaymentControllerTest < ActionDispatch::IntegrationTest
  test "should get successful" do
    get total_payment_successful_url
    assert_response :success
  end

  test "should get failed" do
    get total_payment_failed_url
    assert_response :success
  end

end
