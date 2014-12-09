role :app, %w{app@dashboard.nodejs.qutics.com}
role :web, %w{ubuntu@dashboard.nodejs.qutics.com}, no_release: true

set :branch, 'master'
set :user, 'app'

set :slack_run_starting, -> { true }
set :slack_run_finished, -> { true }
set :slack_run_failed,   -> { true }