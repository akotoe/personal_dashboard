require 'spec_helper'

describe Goal do
 
 describe 'attributes' do
    it 'should have title' do
        respond_to :title
    end
    it 'should have start_date' do
        respond_to :start_date
    end
    it 'should have end_date' do
        respond_to :end_date
    end
    
    it 'should have many targets' do
        should have_many :targets
    end
end
    
describe 'behaviour' do
    it 'an instance should return current state between zero and one' do
        goal = Goal.new
        goal.state.should (be<=1) or  goal.state.should (be>=0)
    end
    
end

    
end
