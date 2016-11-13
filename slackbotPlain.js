var SlackBot = require('slackbots');
var botkit = require("botkit")
var Forecast = require('forecast.io');
var options = {APIKey:'4b7d1738c6ffc0f5121dd56ce3981c39'};
var forecast = new Forecast(options);
var childProcess = require("child_process");

// create a bot 
var bot = new SlackBot({
    // Add a bot https://my.slack.com/services/new/bot and put the token  
    token: 'xoxb-101499277473-zwmiBF1e1azyeXflzrOzbvpF', 
    name: 'Test'
});
 
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        username: 'Buttons',
        icon_emoji: ':unicorn_face:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services  
    // define existing username instead of 'user_name' 
    //bot.postMessageToUser('cjparnin', 'meow!', params); 
        // bot.postMessageToChannel('general', 'meow!', params);

});

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm 
    console.log("====starting====");
    if( data.type == 'message' && getUser(data.user).name != bot.name )
    {    
        console.log("====INSIDE THE IF====");
        console.log(data);

        if( data.text )
        {
            reply(data, "The weather is <none>")
        }
    }
    console.log( data );


});

