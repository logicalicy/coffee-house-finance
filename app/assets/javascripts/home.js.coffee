# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# Create our Application
App = new Backbone.Marionette.Application

# Start history when our application is ready
App.on 'start', ->
    Backbone.history.start