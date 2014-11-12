## Setting up a dev env

In a new folder:

```bash

git clone https://github.com/practicalmeteor/meteor-mocha.git mocha
git clone https://github.com/practicalmeteor/meteor-mocha-web-driver.git mocha-web-driver
# So meteor will use the local packages and not the published ones
export PACKAGE_DIRS="$PWD"
```

## Publishing release candidates

meteor allows you to publish release candidates by appending [semver](http://semver.org/) pre-release versions to the package version, i.e. 0.9.0-rc0. Those release candidates will not be picked up by meteor unless you explicitly specify you want to use them in meteor add or api.use:

```bash

meteor add myaccount:mypackage@0.9.0-rc0
```

```javascript

api.use('practicalmeteor:mocha@2.0.1-rc0');
```

Unfortunately, this does not apply to `meteor test-packages --driver-package`, since you cannot specify pre-release package versions. I'll open a bug about that. For now, let's use official release versions, bumping up patch versions every time, i.e. 0.9.1, 0.9.2.

## Using the test app and the test package

```bash

cd mocha-web-driver/test-app
meteor test-packages --driver-package practicalmeteor:mocha-web-driver mocha-tests

cd packages/mocha-tests
meteor test-packages --driver-package practicalmeteor:mocha-web-driver ./
```

## Github workflow

Standard:

main master branch.

Feature branches with pull requests into master.
