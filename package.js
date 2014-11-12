Package.describe({
  name: "practicalmeteor:mocha-web-driver",
  summary: "Work in progress. A meteor test-packages driver-package to run practicalmeteor:mocha package tests",
  git: "https://github.com/practicalmeteor/meteor-mocha-web-driver.git",
  version: '0.9.0-rc0'
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use('coffeescript');
  api.use('underscore');
  api.use('session');
  api.use('reload');

  // If we use a reactive reporter such as meteor's test-in-browser one,
  // we'll need all of this.
  api.use(['blaze', 'templating', 'spacebars', 'ddp', 'tracker'], 'client');

  api.use(['spacejamio:loglevel@1.1.0_1', 'spacejamio:chai@1.9.2_2']);

  // Uncomment once we upgrade to loglevel v2, with package specific loggers
  // api.addFiles('src/lib/log.js');

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
