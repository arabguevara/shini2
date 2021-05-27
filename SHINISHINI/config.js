module.exports = {
  Admins: ["833871191851925535", "685072025231949894"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/473Q3YHdJZ", //Support Server Link
  Token: process.env.Token || "ODQxMDc3NjAwNDMyNjg1MDg3.YJhgjg.82vAgB766IHR6RMDipbDZfImHM4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "841077600432685087", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "85DGNgJKRMoK_JETxcewUnQU9KKR9mwH", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://i.imgur.com/zylDZWk.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link", 
    port: 80,
    pass: "youshallnotpass", 
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "3cac0a63b87e470aa741e28d03a6464d", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "083ac887aa0d4a5da1ebf0bd70c3e033", //Spotify Client Secret
  },
};
