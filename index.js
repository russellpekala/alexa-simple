"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "CheckLevelIntent": function () {
    this.response.speak("Level is low."); 
    this.emit(':responseReady');
  },
  "ResetIntent": function () {
    this.response.speak("Reset to full."); 
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Welcome to my sample reset app."); 
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};