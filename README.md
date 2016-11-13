# Slack bot

In this Slack Bot I have written a simple slack bot that connects to a Slack Team using token and then provides options to either delete the feature or integrate it.
These features are part of a bigger project where LaunchDarkly API is used to keep track of Feature Flags

I have usef [botkit](https://github.com/howdyai/botkit) for helping connect with slack, and [forecast.io](https://developer.forecast.io/) for weather info.

### Prereq

Install code.

```bash
git clone https://github.com/VivekBhat/WeatherForecast-Slackbot.git
cd SlackBot
npm install
```

1. Create a new slack team.

2. Create a bot team member. Click [/services/new/bot](https://my.slack.com/services/new/bot). For more information about bot-users, see [documentation](https://api.slack.com/bot-users).

3. Copy slack bot token.

4. Update your environment variables.
   
### Running the bot

Goal is to be able to run the bot and get the current weather:

![image](https://github.com/VivekBhat/ButtonOption-Slackbot/blob/master/Resources/Screen%20Shot.png)

* If you can run `node bot.js` and it outputs something and waits, that's good.
