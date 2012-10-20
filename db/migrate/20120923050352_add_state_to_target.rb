class AddStateToTarget < ActiveRecord::Migration
  def change
      change_column :targets, :state, :boolean, :default=>false
  end
end
