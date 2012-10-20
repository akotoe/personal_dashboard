require 'Goal'
class Summary < ActiveRecord::Base
    
    attr_accessible :current_state
    
    def initialize
        @current_state =0.0
    end
    
    def current
        goals =  Goal.all
        goals.each do |g|
           @current_state += g.state
        end
        
        if( goals.count>0)
        
            ((@current_state.to_f/goals.count.to_f).round(2))*100
        else
            0.0
        end
    end
    
    
end
