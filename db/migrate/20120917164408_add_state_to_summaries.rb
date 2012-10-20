class AddStateToSummaries < ActiveRecord::Migration
  def change
    add_column :summaries, :state, :float
  end
end
