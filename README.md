



client
	/collections - Local, unsynced collection
	/compatibility - 3rd party lib which export a global symbol
	/conf - Configuration
	/lib - Library code - client only
	/routes - 
	/startup - Code to run on doc ready
	/stylesheets - 
	/subscriptions - subscription to publications
	/views - A nested directory for each submodule
collections [ client and server] coll and method which act on collection
lib - 
packages - Meteor, Meteorite and local packages
private - server only private data files
public
server
  /pubs - Publish Mongo collections
  /startup - code to run when server starts


Modules
----------
Authentication: 
	[alanning:roles](https://github.com/alanning/meteor-roles)
