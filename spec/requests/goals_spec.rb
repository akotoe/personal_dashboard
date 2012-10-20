require 'spec_helper'

describe "Goals" do
  
    describe "GET /goals" do
        it 'has a link back home' do
            visit goals_path
            click_link 'Home'
            current_path.should == root_path
        end

       it 'has a link to add goals' do
           visit goals_path
           click_link 'Add Goal'
           current_path.should == new_goal_path
       end
        it 'has a link to manage targets' do
            visit goals_path
            click_link 'Manage Targets'
            current_path.should == targets_path
        end
    end
end
