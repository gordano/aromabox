class ProductSetsController < ApplicationController
  Sample = Struct.new(:title, :description)

  def index
  end

  def show
    @samples = [
      Sample.new('Escentric Molecules', 'Escentric Molecules Escentric 02'),
      Sample.new('Ajmal', 'Shadow For Her'),
      Sample.new('Amouage', 'Honour for woman super lesbian gyro efect'),
      Sample.new('Lanvin', 'Eclat d`Arpege'),
      Sample.new('Nasomatto', 'Black Afgano'),
      Sample.new('Byredo', 'Byredo Mojave Ghost'),
      Sample.new('Amouage', 'Honour for woman super lesbian gyro efect'),
      Sample.new('Nasomatto', 'Black Afgano'),
      Sample.new('Escentric Molecules', 'Escentric Molecules Escentric 02'),
      Sample.new('Byredo', 'Byredo Mojave Ghost'),
      Sample.new('Ajmal', 'Shadow For Her'),
      Sample.new('Lanvin', 'Eclat d`Arpege'),
      Sample.new('Amouage', 'Shadow For Her'),
      Sample.new('Byredo', 'Black Afgano'),
      Sample.new('Lanvin', 'Byredo Mojave Ghost'),
      Sample.new('Escentric Molecules', 'Honour for woman super lesbian gyro efect'),
      Sample.new('Nasomatto', 'Eclat d`Arpege'),
      Sample.new('Ajmal', 'Escentric Molecules Escentric 02')
    ]
    @samples_per_row = case @samples.size
    when 18 then 6
    else @samples.size / 2
    end
  end
end
