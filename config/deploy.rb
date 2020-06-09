# config valid only for current version of Capistrano
lock "3.8.0"

set :application, "dreambox"
set :repo_url, "git@gitlab.randewoo.ru:webarte/dreambox.git"

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/ex0rcist/ruby/dreambox'

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, 'config/database.yml', 'config/secrets.yml', 'config/appsignal.yml'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system', 'vendor/bundle'

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

set :rvm_ruby_version, File.read(File.expand_path('../../.ruby-version', __FILE__)).strip

# TODO: заменить на config/puma.rb + init script
set :puma_bind,       -> { "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock" }
set :puma_state,      -> { "#{shared_path}/tmp/pids/puma.state" }
set :puma_pid,        -> { "#{shared_path}/tmp/pids/puma.pid" }
set :puma_access_log, -> { "#{release_path}/log/puma.error.log" }
set :puma_error_log,  -> { "#{release_path}/log/puma.access.log" }
set :puma_preload_app, true
set :puma_worker_timeout, nil
set :puma_init_active_record, true  # Change to false when not using ActiveRecord

namespace :puma do
  desc 'Create directories for Puma pids and socket'
  task :make_dirs do
    on roles(:app) do
      execute "mkdir -p #{shared_path}/tmp/sockets"
      execute "mkdir -p #{shared_path}/tmp/pids"
    end
  end

  before :start, :make_dirs
end
