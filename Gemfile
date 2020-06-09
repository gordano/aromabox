source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.3.3'

gem 'rails', '~> 5.0.2'
gem 'sqlite3'
gem 'sass-rails', '~> 5.0'
gem 'jquery-rails'
gem 'jquery-ui-rails', '~> 5.0'
# gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'evil-blocks-rails'
gem 'autoprefixer-rails'
gem 'slim-rails'
gem 'rmagick'



gem 'appsignal'

# gem 'redis', '~> 3.0'
# gem 'bcrypt', '~> 3.1.7'

# gem 'therubyracer', platforms: :ruby

gem 'puma', '~> 3.0'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'rails_real_favicon'
  gem 'sprite-factory'

  gem 'capistrano', '~> 3.8'
  gem 'capistrano-rvm'
  gem 'capistrano-rails', '~> 1.2.3'
  gem 'capistrano3-puma'
  gem 'capistrano-upload-config'

  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'

  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'awesome_print'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
