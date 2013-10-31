NodeExpressAngularSeed
npm install
node app.js

The client add is in client and uses yeoman
we are using a proxy.

Inspired by: http://www.emmanueloga.com/2013/07/23/Using-AngularJS-with-a-Rails-backend.html

With the exception I'm using Node Express instead of Rails

I left out compass/sass/less option in first go
I've added socket.io on the server (see sample)
I've added the client socket bower package (see default controller)

Additional Notes:
To add a node module and have it included in the package.json:
npm install <name> --save-dev

for bower:
bower install --save jquery

angular-generator docs:
https://github.com/yeoman/generator-angular


