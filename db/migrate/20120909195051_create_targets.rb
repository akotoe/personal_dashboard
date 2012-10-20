class CreateTargets < ActiveRecord::Migration
  def change
    create_table :targets do |t|
      t.string :name
      t.datetime :deadline
      t.references :goal

      t.timestamps
    end
    add_index :targets, :goal_id
  end
end
