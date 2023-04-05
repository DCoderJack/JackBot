# JackBot
JackBot - It is a Slack Bot built using Slack API that responds to user messages in a Slack channel

# Install npm packages

# Bolt - A JavaScript framework to build Slack apps in a flash with the latest platform features. 

npm init
npm install @slack/bolt
npm i dotenv
npm i axios
npm i nodemon

# Steps :

# 1. Create New Workspace & Build Slack App on Slack Website

# Build Slack App on api.slack.com

![image](https://user-images.githubusercontent.com/112248339/230176774-aad9f2b1-262d-432a-9769-a225e285005a.png)

![image](https://user-images.githubusercontent.com/112248339/230177061-38bbdd15-1051-4c7b-9e6d-a22375b53d71.png)

# After Filling the details user will obtain -

Slack App Token
Signing Secret 
Slack Bot Token
User OAuth Token

# You will see such page after initial app creation

![image](https://user-images.githubusercontent.com/112248339/230177716-87caad53-36ae-465e-b2c1-22e6b23e4392.png)


# 2. Set Scopes in OAuth and Permissions

# Set tokens - connections:write

![image](https://user-images.githubusercontent.com/112248339/230178119-0791e933-5cc2-4e59-a156-2c9162378f41.png)

# Set User Scopes 

![image](https://user-images.githubusercontent.com/112248339/230178476-d8557578-2b3e-4989-ad97-9d09e12ab80b.png)

# Enable Event Subscriptions

![image](https://user-images.githubusercontent.com/112248339/230178823-f5ebd796-3022-44a3-b7a1-4e0a78907d46.png)

![image](https://user-images.githubusercontent.com/112248339/230178956-ff7b0771-eb65-4fa4-a03b-093d89eb8b3c.png)

# 3. Now Code Implementation in VSCode

# We use bolt to create slack app

# Initialize by Creating App

const app = new App({
 include token, signing secret, appToken})
 
# Use app.message fature

app.message('hello', async ({message, say})=>{
  await say(`Hey , <@${message.user}>`);
  await say(`Enter ' joke / quote / weather ' to get results...`)
});

  a. sent message - Hey, @username - When user sents hello @JackBot
  
  b. sent quotes - When user sents message as ' quote @JackBot '
  
    We use quotes api - 'https://api.quotable.io/random'
  
  c. sent random joke - When user sents message as ' joke @JokeBot '
     
     We use random joke api - 'https://api.chucknorris.io/jokes/random'
     
   d. sent weather details - When weather details when user sents message as - ' weather @JackBot'
   
      We use freee weather api - 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather'
      
    
# Start the app

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log(`⚡️ Bolt app is running!`);
})();

# How to Run the App -

# Terminal Commands

npx nodemon

# Slack App

![image](https://user-images.githubusercontent.com/112248339/230181734-b4b02c00-4367-4edb-a90f-caf3b09d7ba8.png)

![image](https://user-images.githubusercontent.com/112248339/230181823-032dc3bd-75a9-4b37-a902-eab451b880da.png)

# Thank You!
