module Tools
  class Sprite
    require 'sprite_factory'

   def initialize(options = {})
      @dpr                = options[:dpr] || 1
      @images_path        = options[:images_path]
      @sprite_name        = options[:sprite_name]
      @styles_path        = options[:styles_path]
      @output_sprite_path = "app/assets/images/#{@sprite_name}.png"
      @styles_content     = ''
    end

   def make
      SpriteFactory.run!(
        Rails.root.join(@images_path),
        {style: 'sass', pngcrush: true, layout: 'packed', nocss: true, output_image: @output_sprite_path}
      ) do |images|
        @styles_content << icons_styles(images)
      end

     # @styles_content = bg_sizes << @styles_content if @dpr > 1

     File.open(Rails.root.join(@styles_path), 'w') { |file| file << @styles_content }
    end

   private

   def icons_styles(images)
      images.map{ |name, data| icon_styles(name, data) }.join("\n")
    end

   def icon_styles(name, data)
      name = "#{name}-#{@dpr}x" if @dpr > 1

     <<-EOF
$#{name}-name: '#{name}';
$#{name}-x: #{data[:x]}px;
$#{name}-y: #{data[:y]}px;
$#{name}-offset-x: #{data[:x] * -1}px;
$#{name}-offset-y: #{data[:y] * -1}px;
$#{name}-width: #{data[:width]}px;
$#{name}-height: #{data[:height]}px;
$#{name}-image: asset_path('#{@sprite_name}.png');
$#{name}: #{data[:x]}px #{data[:y]}px #{data[:x] * -1}px #{data[:y] * -1}px #{data[:width]}px #{data[:height]}px asset_path('#{@sprite_name}.png') '#{name}'#{' $sprite-' + @sprite_name + '-width $sprite-' + @sprite_name + '-height' if @dpr > 1};

i.sprite-icon.icon-#{name} { @include sprite#{'-2x' if @dpr > 1}($#{name}); }
      EOF
    end

    # def bg_sizes
    #   dimensions = ::MiniMagick::Image.open(@output_sprite_path)[:dimensions]

    #  [
    #     '',
    #     "$sprite-#{@sprite_name}-width: #{dimensions[0]}px;",
    #     "$sprite-#{@sprite_name}-height: #{dimensions[1]}px;",
    #     ''
    #   ].join("\n")
    # end
  end
end