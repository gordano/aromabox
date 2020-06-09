require 'test_helper'

class RulesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rules_index_url
    assert_response :success
  end

  test "should get public_offer" do
    get rules_public_offer_url
    assert_response :success
  end

  test "should get confidentiality" do
    get rules_confidentiality_url
    assert_response :success
  end

  test "should get faq" do
    get rules_faq_url
    assert_response :success
  end

  test "should get payment_methods" do
    get rules_payment_methods_url
    assert_response :success
  end

end
