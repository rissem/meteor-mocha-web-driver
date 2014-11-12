@practical ?= {}

class practical.MochaWebRunner

  instance = null

  @get: ->
    instance ?= new practical.MochaWebRunner()

  run: ->
    mocha.run()

Meteor.startup ->
  practical.MochaWebRunner.get().run()
