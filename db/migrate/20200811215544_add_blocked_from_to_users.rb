class AddBlockedFromToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :blocked_from, :text, default: [], array:true
  end
end
