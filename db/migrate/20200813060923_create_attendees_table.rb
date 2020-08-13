class CreateAttendeesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :attendees do |t|
      t.text :room_type
      t.integer :user_id
    end
  end
end
