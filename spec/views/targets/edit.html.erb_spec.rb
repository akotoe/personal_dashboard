require 'spec_helper'

describe "targets/edit" do
  before(:each) do
    @target = assign(:target, stub_model(Target,
      :name => "MyString",
      :goal => nil
    ))
  end

  it "renders the edit target form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => targets_path(@target), :method => "post" do
      assert_select "input#target_name", :name => "target[name]"
      
    end
  end
end
