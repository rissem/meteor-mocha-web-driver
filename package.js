Package.describe({
  name: "practicalmeteor:mocha-web-driver",
  summary: "A meteor test-packages driver-package to run mocha.js tests using practicalmeteor:mocha",
  git: "https://github.com/practicalmeteor/meteor-mocha-web-driver.git",
  version: '0.9.0-rc0'
});


Package.onUse(function (api) {
  // XXX this should go away, and there should be a clean interface
  // that tinytest and the driver both implement?
  api.use('coffeescript');
  api.use('underscore');
  api.use('session');
  api.use('reload');

  api.use(['blaze', 'templating', 'spacebars', 'ddp', 'tracker'], 'client');

  api.use(['spacejamio:loglevel@1.1.0_2', 'spacejamio:chai']);

  api.addFiles('src/lib/log.js');

  api.addFiles([
    'src/client/mocha.css',
    'src/client/mocha.html'
  ], "client");

  // Only client side, for now, until we wrap all mocha code in fibers server side
  api.addFiles('src/MochaWebRunner.coffee', 'client');

  api.use('autoupdate', 'server');
  api.use('random', 'server');

  api.addFiles('src/server/autoupdate.js', 'server');
});
