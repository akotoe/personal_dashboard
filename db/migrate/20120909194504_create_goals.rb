class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :title
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
