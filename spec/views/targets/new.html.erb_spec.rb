require 'spec_helper'

describe "targets/new" do
  before(:each) do
    assign(:target, stub_model(Target,
      :name => "MyString",
      :goal => nil
    ).as_new_record)
  end

  it "renders new target form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => targets_path, :method => "post" do
      assert_select "input#target_name", :name => "target[name]"
    end
  end
end
