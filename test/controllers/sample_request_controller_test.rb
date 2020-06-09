require 'test_helper'

class SampleRequestControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sample_request_index_url
    assert_response :success
  end

end
