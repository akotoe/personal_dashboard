require 'spec_helper'

describe "goals/index" do
  before(:each) do
    assign(:goals, [
      stub_model(Goal,
        :title => "Title"
      ),
      stub_model(Goal,
        :title => "Title"
      )
    ])
  end

  it "renders a list of goals" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Home | Add Goal | Manage Targets".to_s  end
end
