require 'spec_helper'

describe "targets/index" do
  before(:each) do
    assign(:targets, [
      stub_model(Target,
        :name => "Name",
        :goal => Goal.new
      ),
      stub_model(Target,
        :name => "Name",
        :goal => Goal.new
      )
    ])
  end

  it "renders a list of targets" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Home | Back to Goals | Add Target".to_s    
  end
end
