const TelegramBot = require('node-telegram-bot-api');             
const token = "6420759400:AAESD8K1CGMdPXuZYIsEMl6XQWUgxpb3Ff8";  
const bot = new TelegramBot(token, { polling: true });      
const fs = require('fs');
const figlet = require('figlet');
const colors = require('@colors/colors')

const start = () => {                                           
console.log(
        colors.white(
            figlet.textSync('Telegram BOT', {
                horizontalLayout: 'fitted'
            })
        )
    );
   console.log('        By AMFCODE\n\n')
   console.log(colors.yellow(`Server Running!`))
   bot.onText(/\echo (.+)/, (msg, macth) => {                   
      const chatId = msg.chat.id;                                 
      const resp = match[1];                                   
      
      bot.sendMessage(chatId, resp);                              
   });

   bot.on('message', async msg => {  
   let date_ob = new Date();
      let date = ("0" + date_ob.getDate()).slice(-2);
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let year = date_ob.getFullYear();
      let hours = date_ob.getHours();
      let minutes = date_ob.getMinutes();
      let seconds = date_ob.getSeconds();                            
      const text = msg.text;                                      
      const chatId = msg.chat.id;                                 
      const userName = msg.from.first_name;
      const usernnamenya = msg.from.username    
      const cmdnya = `[+] From : ${userName} | Pesan : ${text}`
      const axiosRequest = require('axios')                    
      console.log(colors.yellow(`${cmdnya} | Jam : ${hours}:${minutes} | Tanggal : ${date}-${month}-${year}`) ) 

      //data api
      const linkapi = 'https://xzn.wtf/'
      const apikey = 'amfcode'


    const command = '/instagram';     
    if (text.startsWith(command)) {
    const link = text.slice(command.length).trim();
    if (!link) {
      bot.sendMessage(chatId, 'Mohon maaf, Url nya mana ya?');
      return;
    }
    try {
    bot.sendMessage(chatId, `Bot Sedang Melakukan Download..`)
      const url = await axiosRequest.get(`${linkapi}api/igdl?url=${link}&apikey=${apikey}`)
      const respon = url.data
      if(respon.media) {
        const caption = respon.caption
        const urlnya = respon.media[0]
        bot.sendVideo(chatId, urlnya)
      }
    } catch (error) {
      console.log(error)
      bot.sendMessage(chatId, 'Terjadi Kesalahan Saat Melakukan Download.')
    }
    } else { 
      const command = '/tiktok'; 
      if (text.startsWith(command)) {
    const link = text.slice(command.length).trim();
    if (!link) {
      bot.sendMessage(chatId, 'Mohon maaf, Url nya mana ya?');
      return;
    }
    try {
    bot.sendMessage(chatId, `Bot Sedang Melakukan Download..`)
      const url = await axiosRequest.get(`${linkapi}api/tiktok?url=${link}&apikey=${apikey}`)
      const respon = url.data
      if(respon.msg === 'success') {
        const caption = respon.data.title
        const urlnya = respon.data.hdplay
        bot.sendVideo(chatId, urlnya)
      }
    } catch (error) {
      console.log(error)
      bot.sendMessage(chatId, 'Terjadi Kesalahan Saat Melakukan Download.')
    }
    } else { 
      const command = '/fototiktok'; 
      if (text.startsWith(command)) {
    const link = text.slice(command.length).trim();
    if (!link) {
      bot.sendMessage(chatId, 'Mohon maaf, Url nya mana ya?');
      return;
    }
    try {
    bot.sendMessage(chatId, `Bot Sedang Melakukan Download..`)
      const url = await axiosRequest.get(`${linkapi}api/tiktok?url=${link}&apikey=${apikey}`)
      const respon = url.data
      if(respon.msg === 'success') {
        const caption = respon.data.title
        const urlnya = respon.data.images
        urlnya.forEach(image => {
        bot.sendPhoto(chatId, image)
});
        
      }
    } catch (error) {
      console.log(error)
      bot.sendMessage(chatId, 'Terjadi Kesalahan Saat Melakukan Download.')
    }
    } else { 
      if (text === '/start') {                                 
         bot.sendMessage(chatId, "Hello " + userName + "!\nWelcome to AMFCODE BOT! \nBOT Sederhana\nFiture : \n• Instagram Downloader\n- Untuk Menggunakan Instagram Downloader Ketik /instagram url\n\n• Tiktok Downloader\n- Untuk Menggunakan Tiktok Downloader Ketik /tiktok url\n\n•Tiktok Image Downloader\n-Untuk Menggunakan Tiktok Image Downloader ketik /fototiktok url");
      }
    }
  }
}

   });
};

start();                                                      