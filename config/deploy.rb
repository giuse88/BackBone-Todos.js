lock '3.2.1'

set :application, 'backbone'
set :repo_url, 'https://github.com/giuse88/BackBone-Todos.js.git'
set :deploy_to, Proc.new{ "/home/#{fetch(:user)}/www/#{fetch(:application)}" }

set :linked_dirs, %w{log}

set :node_upstart_apps, [
  { app_name: fetch(:application), app_path: './bin/www', app_roles: ['web'] }
]

set :slack_team, 'qubit'
set :slack_token, '4qdeIAuWcmBAYu6xsVV4dmQK'
set :slack_run_starting, -> { false }
set :slack_run_finished, -> { false }
set :slack_run_failed,   -> { false }

namespace :deploy do
  task :restart do; invoke 'node_upstart:restart'; end
  task :start do; invoke 'node_upstart:start'; end
  task :stop do; invoke 'node_upstart:stop'; end
  # If you need nginx, uncomment this section 
  # after :published, :update_nginx_config do
  #   on roles(:web) do
  #     execute "sudo ln -nfs #{current_path}/config/nginx.#{fetch(:stage)}.conf /etc/nginx/sites-enabled/#{fetch(:application)}"
  #     execute "sudo nginx -s reload"
  #   end
  # end
end
