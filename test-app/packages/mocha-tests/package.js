Package.describe({
  name: 'mocha-tests',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
});

Package.onTest(function(api) {
  api.use('practicalmeteor:mocha');
  api.use('mocha-tests');
  api.addFiles('mocha-tests.js', 'client');
});
