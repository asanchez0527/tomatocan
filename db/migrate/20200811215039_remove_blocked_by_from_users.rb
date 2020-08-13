class RemoveBlockedByFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :blockedBy
  end
end
