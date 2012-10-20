class Target < ActiveRecord::Base
    belongs_to :goal
    
    attr_accessible :name, :deadline, :goal, :state, :goal_id
    
end
