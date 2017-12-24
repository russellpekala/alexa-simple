"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "CheckLevelIntent": function () {
    this.response.speak("Sara's Love Level is Low"); 
    this.emit(':responseReady');
  },
  "LoveSaraIntent": function () {
    this.response.speak("Sara's Love Level is completely full."); 
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("We need to keep Sara's love level high!"); 
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};