set :stages, %w(prod dev)
set :default_stage, "dev"

require 'capistrano/ext/multistage'

set :application, "igdaloff_site"
set :scm, :git
set :repository, "git@github.com:igdaloff/igdaloff.com.git"
set :scm_passphrase, ""

set :user, "ec2-user"
ssh_options[:keys] = %w(~/.ssh/igdaloff-server.pem)

ssh_options[:forward_agent] = true
default_run_options[:pty] = true