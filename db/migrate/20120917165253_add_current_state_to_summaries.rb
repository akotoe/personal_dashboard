class AddCurrentStateToSummaries < ActiveRecord::Migration
  def change
    add_column :summaries, :current_state, :float
  end
end
