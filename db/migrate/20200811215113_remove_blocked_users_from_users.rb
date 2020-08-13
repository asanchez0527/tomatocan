class RemoveBlockedUsersFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :BlockedUsers
  end
end
