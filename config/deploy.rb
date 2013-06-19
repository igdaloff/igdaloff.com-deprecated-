set :stages, %w(prod dev)
set :default_stage, "dev"

require 'capistrano/ext/multistage'

set :application, "igdaloff.com"

set :scm, :git
set :repository, "git@github.com:igdaloff/igdaloff.com.git"
set :scm_passphrase, ""

set :user, "ubuntu"
#set :deploy_to, '/home/ubuntu/'

server "54.218.28.224", :app, :primary => true

ssh_options[:forward_agent] = true
ssh_options[:auth_methods] = ["publickey"]
ssh_options[:keys] = ["~/.ssh/igdaloff-server.pem"]

# default_run_options[:pty] = true

