require 'test_helper'

class CertControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cert_index_url
    assert_response :success
  end

end
