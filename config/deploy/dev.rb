set :branch, "develop"
server 'ec2-54-218-36-67.us-west-2.compute.amazonaws.com', :app, :web, :db, :primary => true
set(:deploy_to) { '/develop' }

set :user, "ec2-user"
ssh_options[:keys] = %w(~/.ssh/igdaloff-server.pem)