require 'spec_helper'

describe Summary do
    
    describe '#current' do
        it 'should return a value between 0 and 100' do
            summary = Summary.new
            summary.current.should (be<=100) or  goal.state.should (be>=0)
        end
    end
  
end
