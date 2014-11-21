//for now this package doesn't do anything
//it probably makes seense for stuff like the velocity html reporter
//to live here?

Package.describe({
  name: "mike:pkgtest",
  summary: "noop for now, eventually should probably handle reporting",
  git: "https://github.com/rissem/meteor-mocha-web-driver.git",
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
});
