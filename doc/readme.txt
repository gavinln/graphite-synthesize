To install and run Graphite

1. Go to the project root directory
cd graphite-synthesize

2. Clone the repository
git clone https://github.com/obfuscurity/synthesize.git

3. Start the VM
vagrant up

4. From the root directory connect to the VM
vagrant ssh

5. Change the graphite files directory
cd /opt/graphite/webapp/graphite

6. Set the username and password
sudo python manage.py createsuperuser

7. Open a web browser to https://192.168.33.10:443

8. Use the username & password in step 6 to login

To install and run Diamond
1. Go to the home directory in the VM
cd ~

2. Clone the Diamond repository
git clone https://github.com/BrightcoveOS/Diamond.git

3. Install pre-requisites
sudo apt-get install -y make pbuilder
sudo apt-get install -y python-support python-mock cdbs

4. Change to dirctory
cd ~/Diamond

5. Build package
make builddeb

6. Install package
sudo dpkg -i build/diamond_4.0.57_all.deb  # check version

Configure Diamond
1. Change to the diamond configuration directory
cd /etc/diamond

2. Create a configuration file
sudo cp diamond.conf.example diamond.conf

3. Restart diamond
sudo service diamond restart

To change the Graphite Django application time zone
1. Change to the settings directory
cd /opt/graphite/webapp/graphite

2. Edit the settings file
sudo vim local_settings.py

3. Add the line to the settings file
TIME_ZONE = 'America/Los_Angeles'

4. Restart the Graphite web site
sudo service apache2 restart


To add the Mongodb collector add the following lines to diamond.conf
[[MongoDBCollector]]
enabled = True
hosts = localhost:27017

