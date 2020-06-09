namespace :all do
  task sprites: [:cart_sprites]

  task cart_sprites: :environment do
    Tools::Sprite.new(
      images_path: 'app/assets/images/cart',
      sprite_name: 'cart',
      styles_path: 'app/assets/stylesheets/web/cart/_sprites.sass'
    ).make
  end
end