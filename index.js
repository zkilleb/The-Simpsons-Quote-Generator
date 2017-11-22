"use strict";

var Alexa = require("alexa-sdk");
var SKILL_NAME = "The Simpsons Quote Generator";
var APP_ID = "";

//List of Quotes
var QUOTE_LIST = [
  "There's only one thing to do at a moment like this: strut!",
  "Your ideas are intriguing to me, and I wish to subscribe to your newsletter.",
  "Everything’s coming up Milhouse.",
  "I used to be with it, but then they changed what ‘it’ was, and now what I’m with isn’t it. And what’s ‘it’ seems weird and scary to me.",
  "You don’t win friends with salad.",
  "I, for one, welcome our new insect overlords.",
  "It takes two to lie: one to lie and one to listen.",
  "I would kill everyone in this room for a drop of sweet beer.",
  "They taste like burning.",
  "Marriage is like a coffin and each kid is another nail.",
  "I’ve said it before and I’ll say it again: democracy simply doesn’t work.",
  "What’s the point of going out? We’re just gonna wind up back here anyway.",
  "I didn't think it was physically possible, but this both sucks and blows.",
  "Loneliness and cheeseburgers are a dangerous mix.",
  "You tried your best and you failed miserably. The lesson is: Never try.",
  "There’s a 4:30 in the morning now?",
  "Don’t blame me, I voted for Kodos.",
  "I can’t promise I’ll try, but I’ll try to try.",
  "My cat’s breath smells like cat food.",
  "Don’t make me run. I’m full of chocolate.",
  "D'oh!",
  "Monorail!",
  "Eat my shorts!",
  "Dr. Zaius, Dr. Zaius",
  "I hate every ape I see, from chimpan-A to chipman-Z.",
  "Stupid TV! Be more funny!"
]

//Setup
export.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}

var handlers = {
  'LaunchRequest': function(){
    this.emit('GetQuote');
  },
  'GetQuoteIntent': function(){
    this.emit('GetQuote');
  },
  'GetQuote': function(){
    var quoteIndex = Math.floor(Math.random() * QUOTE_LIST.length);
    var randomQuote = QUOTE_LIST[quoteIndex];

    //Output
    var speechOutput = "Your quote" + randomQuote;

    this.emit(":tellWithCard", speechOutput, SKILL_NAME, randomQuote);
  },
  'AMAZON.HelpIntent': function(){
    var speechOutput = "You can say give me a simpsons quote or say , or you can say exit. What can I help you with?"
    var reprompt = "What can I help you with?"
    this.emit(":ask", speechOutput, reprompt);
  },
  'AMAZON.StopIntent': function(){
    this.emit(":tell", "Goodbye!");
  },
  'AMAZON.CancelIntent': function(){
    this.emit(":tell", "Goodbye!");
  }
}
