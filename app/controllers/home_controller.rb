require 'date'

class HomeController < ApplicationController
  def index
      
      @goals = Goal.current
      gon.goals = @goals
      
      
      @targets=Target.all
      gon.targets=@targets
      @summary = Summary.new
    
  end
    
    
end


