role :app, %w{mdashboard@n01.dashboard.staging.qutics.com}
role :web, %w{ubuntu@n01.dashboard.staging.qutics.com}, no_release: true

puts "Deploying #{`git rev-parse --abbrev-ref HEAD`.chomp}"
set :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }
set :user, 'mdashboard'

set :slack_token, 'QCUMAhPjOjCjUn9ZAKENt8gM'
set :slack_run_starting, -> { true }
set :slack_run_finished, -> { true }
set :slack_run_failed,   -> { true }