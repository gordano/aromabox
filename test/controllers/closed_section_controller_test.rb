require 'test_helper'

class ClosedSectionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get closed_section_index_url
    assert_response :success
  end

  test "should get show" do
    get closed_section_show_url
    assert_response :success
  end

end
