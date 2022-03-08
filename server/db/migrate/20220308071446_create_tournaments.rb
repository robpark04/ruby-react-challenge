class CreateTournaments < ActiveRecord::Migration[7.0]
  def change
    create_table :tournaments do |t|
      t.string :name
      t.string :course_name
      t.date :date

      t.timestamps
    end
  end
end
