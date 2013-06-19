set :branch, "master"
set(:deploy_to) { '/home/ubuntu/' }

#set :user, "ec2-user"
#server 'ec2-54-218-35-67.us-west-2.compute.amazonaws.com', :app, :web, :db, :primary => true
#ssh_options[:keys] = [File.join(ENV["HOME"], ".ssh", "igdaloff-server.pem")]
