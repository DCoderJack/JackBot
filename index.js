require('dotenv').config();
 
const axios = require('axios');
const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_APP_BOT_TOKEN,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,signingSecret: process.env.SLACK_APP_SIGNING_SECRET
  });

app.message('hello', async ({message, say})=>{
  await say(`Hey , <@${message.user}>`);
  await say(`Enter ' joke / quote / weather ' to get results...`)
});

app.message('quote', async ({ message, say }) => {
    let quoteURL = `https://api.quotable.io/random`;
    let response = await axios.get(quoteURL);
    const quote = response.data.content;
    await say(`Hello, <@${message.user}>, ${quote}`);
});

app.message('joke', async ({ message, say }) => {
  let jokeURL = 'https://api.chucknorris.io/jokes/random';
  let response = await axios.get(jokeURL);
  
  const joke = response.data.value;

  await say(`Hello, <@${message.user}>`);
  await say(`${joke}`);
});



app.message('weather', async({ message, say }) => {

  const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: {city: 'Seattle'},
    headers: {
      'X-RapidAPI-Key': 'd1085bd089msh3b332757ace770bp1f4d05jsne57a0f2b45ac',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
   
    say(`Temperature : ${response.data.temp}°C`); 
    say(`Feels Like : ${response.data.feels_like}°C`)
    say(`Humidity : ${response.data.humidity}%`)
    say(`Wind Speed : ${response.data.wind_speed}km/hr`)
    say(`Min Temp : ${response.data.min_temp}°C`)
    say(`Max Temp : ${response.data.max_temp}°C`)
    say(`Wind Degrees : ${response.data.wind_degrees}°`)

  }).catch(function (error) {
    console.error(error, "Try Again in Sometime");
  });

});
 
(async () => {
    await app.start(process.env.PORT || 3000);
    console.log(`⚡️ Bolt app is running!`);
})();