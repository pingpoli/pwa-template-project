// increase the version when uploading to create a new service worker cache name
var serviceWorkerCacheVersion = 1;

/*
define the environment where the app is running
local -> the app is running locally
server -> the app is running on the server
*/
var environment = "local";

var appURL = "";
var backendURL = "";
if ( environment == "local" )
{
	appURL = "http://localhost/tc/XXXXX/";
	backendURL = "http://localhost/tc/XXXXX/";
}
else if ( environment == "server" )
{
	appURL = "https://pingpoli.de/XXXXX/";
	backendURL = "https://pingpoli.de/XXXXX/";
}