class RemoveStateFromSummaries < ActiveRecord::Migration
  def up
      remove_column :summaries, :state
  end

  def down
      add_column :summaries, :state
  end
end
