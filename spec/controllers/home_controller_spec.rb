require 'spec_helper'

describe HomeController do



  describe "GET 'index'" do
    
    it "assigns all current goals to goals" do
        @goals=Goal.current
    end
    
    it "creates a new Summary object" do
        summary = Summary.new
    end
    
  end

end
