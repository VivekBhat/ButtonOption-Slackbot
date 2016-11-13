
var Botkit = require('botkit');
var Forecast = require('forecast.io');
var options = {APIKey:process.env.FORECAST};
var forecast = new Forecast(options);

//var childProcess = require("child_process");

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACKBOT_TEST,
}).startRTM()

// give the bot something to listen for.
//controller.hears('string or regex',['direct_message','direct_mention','mention'],function(bot,message) {

controller.hears('weather',['mention', 'direct_mention'], function(bot,message) {
	bot.reply(message,'The weather is great.');
});


controller.hears('delete',['mention', 'direct_mention'], function(bot,message) {
	bot.reply(message,msg);
});

var msg = 
	{
    "text": "Would you like to integrate or delete the feature?",
    "icon_emoji": ":unicorn_face:",
            
    "attachments": [
        {  
            "text": "Choose an option: ",
            "fallback": "You are unable to choose a game",
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "chess",
                    "text": "Integrate Feature",
                    "type": "button",
                    "value": "chess"
                },
                {
                    "name": "war",
                    "text": "Discard feature",
                    "style": "danger",
                    "type": "button",
                    "value": "war",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Wouldn't you prefer something else?",  //extra messages
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
}