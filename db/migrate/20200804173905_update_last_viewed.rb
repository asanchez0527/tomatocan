class UpdateLastViewed < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :last_viewed, :text, default: [], array:true
  end
end
