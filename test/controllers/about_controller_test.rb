require 'test_helper'

class AboutControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get about_index_url
    assert_response :success
  end

  test "should get samples" do
    get about_samples_url
    assert_response :success
  end

  test "should get sets" do
    get about_sets_url
    assert_response :success
  end

  test "should get howto" do
    get about_howto_url
    assert_response :success
  end

end
