Rails.application.routes.draw do

  get 'sample_request', to: 'sample_request#index', as: :'sample_request'

  get 'not_for_all', to: 'closed_section#index', as: :'closed_index'
  get 'not_for_all_preview', to: 'closed_section#show', as: :'closed_show'

  get 'reviews_of_the_store', to: 'store_reviews#index', as: :'store_reviews'

  get 'partners', to: 'partners#index', as: :'partners'

  get 'news', to: 'media#index', as: :'news'
  get 'press', to: 'media#press', as: :'press'


  get 'sales_rules', to: 'rules#index', as: :'rules'
  get 'public_offer', to: 'rules#public_offer', as: :'public_offer'
  get 'confidentiality', to: 'rules#confidentiality', as: :'confidentiality'
  get 'faq', to: 'rules#faq', as: :'faq'
  get 'payment_methods', to: 'rules#payment_methods', as: :'payment_methods'

  get 'certificates', to: 'cert#index', as: :'cert'

  get 'return_product', to: 'return_product#index', as: :'return_product'



  get 'about', to: 'about#index', as: :'about'
  get 'about_samples', to: 'about#samples', as: :'about_samples'
  get 'about_sets', to: 'about#sets', as: :'about_sets'
  get 'how_to_make_an_order', to: 'about#howto', as: :'howto'

  get 'contacts', to: 'contacts#index', as: :'contacts'

  get 'all_brands', to: 'brands#index', as: :'all_brands'

  get 'private_office', to: 'private#personal_data', as: :'private'
  get 'private_office/my_orders', to: 'private#my_orders', as: :'private_orders'
  get 'private_office/my_orders/order_3214', to: 'private#order_item', as: :'private_order_item'
  get 'private_office/my_favorites', to: 'private#my_favorites', as: :'private_favorites'
  get 'private_office/promo_gifts', to: 'private#promo_gifts', as: :'private_promo_gifts'
  get 'private_office/my_subscription', to: 'private#my_subscription', as: :'private_subscription'

  get 'gifts', to: 'gifts#index', as: :gifts

  get 'checkout/login', to: 'authorization#index', as: :authorization
  get 'checkout/login/remember_password', to: 'authorization#remember_password', as: :remember_password
  get 'checkout/login/remember_password/ok', to: 'authorization#remember_password_ok', as: :remember_password_ok

  get 'checkout/delivery', to: 'purchase_process#delivery', as: :delivery

  get 'checkout/payment', to: 'purchase_process#payment', as: :payment

  get 'checkout/payment/go', to: 'payment#index', as: :payment_go

  get 'checkout/payment/successful', to: 'total_payment#successful', as: :payment_successful
  get 'checkout/payment/failed', to: 'total_payment#failed', as: :payment_failed

  get 'checkout/cart', to: 'cart#index', as: :cart

  get 'samples', to: 'product_samples#index', as: :product_samples

  get 'sample_name', to: 'product_samples#show', as: :product_samples_show

  get 'sets', to: 'product_sets#index', as: :product_sets

  get 'set_name', to: 'product_sets#show', as: :product_sets_show

  root 'home#index', to: 'home#index', as: :root

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
