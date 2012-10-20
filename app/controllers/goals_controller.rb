class GoalsController < ApplicationController
   def index
    @goals = Goal.all
    @targets = Target.all

    respond_to do |format|
      format.html
    end
  end

  def show
    @goal = Goal.find(params[:id])
    respond_to do |format|
      format.html
        format.xml  { render :xml => @goal }
    end
  end
  def new
    @goal = Goal.new
      3.times { @goal.targets.build }
    respond_to do |format|
      format.html
    end
  end
  def edit
    @goal = Goal.find(params[:id])
   
  end
  def create
    @goal = Goal.new(params[:goal])
    respond_to do |format|
      if @goal.save
          format.html { redirect_to @goal, :notice => 'Goal was save successfully.' }
      else
        format.html { render :action => "new" }
    end
    end
  end
  def update
    @goal = Goal.find(params[:id])

    respond_to do |format|
      if @goal.update_attributes(params[:goal])
        format.html { redirect_to @goal, :notice => 'Goal was save successfully' }
        format.json { head :no_content }
           
      else
          format.html {render :action => "edit"}
      end
    end
  end
  def destroy
    @goal = Goal.find(params[:id])
    @goal.destroy

    respond_to do |format|
      format.html { redirect_to goals_url }
    end
  end
end
