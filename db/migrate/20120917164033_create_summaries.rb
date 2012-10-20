class CreateSummaries < ActiveRecord::Migration
  def change
    create_table :summaries do |t|

      t.timestamps
    end
  end
end
