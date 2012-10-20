require 'active_support'


class Goal < ActiveRecord::Base
    
    
    has_many :targets, :dependent=>:destroy
    
    accepts_nested_attributes_for :targets, :allow_destroy=>true
    attr_accessible :end_date, :start_date, :title, :targets_attributes
    
    def self.current
        Goal.where('start_date BETWEEN ? AND ?', 13.hours.ago, 13.hours.from_now).all
    end
    
    def state
        all_targets = Target.all( :conditions => ["goal_id = ?", id]).count 
        complete_targets = Target.find(:all, :conditions => ["state=? and goal_id=?", true, id]).count
       
        if(all_targets>0)
            ratio=complete_targets.to_f/all_targets.to_f
        else
            0
        end
    end

    
end
 