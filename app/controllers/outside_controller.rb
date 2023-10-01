class OutsideController < ApplicationController
  def test
  end

  def get_data_json
    render:json => { :name => "John", :age => 30, :city => "New York" }
  end
end
