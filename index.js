const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "k!";
let idowner = "902278011691368458";// ID DISCORD OWNER BOT
let idpremium = "948430341088100362"; // ID DISCORD ROLE ADD
let nbr1 = 30;

// OWNER PROJECT: realKazehaya
//UPDATE AND UPGRADE BY OLDMODZ95

client.on('ready', () => {
 console.log("Made by OldModz95. Proposed By ProtonDev");

});

client.on("guildMemberAdd", member => {
  try {

    function makeid(length) 
		{
			var result           = [];
			var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for ( var i = 0; i < length; i++ ) {
			  result.push(characters.charAt(Math.floor(Math.random() * 
		 charactersLength)));
		   }
		   return result.join('');
		}

		const passwordsuper = (makeid(nbr1)) // Stockage du mdp dans une variable


    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
      if(db.tiene(`${passwordsuper}`)) return member.send("**ERROR KEY:** La key existe déjà.")
    db.establecer(`${passwordsuper}.${member.id}`, {keys: passwordsuper}, {iddiscord: member.id})

          const embedguildMemberAdd = new Discord.RichEmbed()
          .setTitle("Bienvenue » ProtonDev!")
          .setColor(0x00AE86)
          .setImage('https://c.tenor.com/LDuF2jVabwoAAAAC/banner-welcome.gif')
          .setDescription(`• Entré le code pour être vérifié\n\n**Votre code d'accès:** ||\`${passwordsuper}\`||`)
          .setFooter(`Developped By OldModz95`);

      member.send(embedguildMemberAdd);
  } catch (error){
      console.log(`Il a une erreur : ${error}`)
  }
});

client.on('message', async message => {

  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const memberaction = message.author.id;


  //====================================

        if(command === 'random-key'){
    
      if(message.channel.type === 'dm') return;

      if (message.author.id !== idowner)
      return message.channel.send("La commande peux seulement être utilisé par OldModz95.")
      message.delete()
      //Add
      function makeid(length) 
		{
			var result           = [];
			var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for ( var i = 0; i < length; i++ ) {
			  result.push(characters.charAt(Math.floor(Math.random() * 
		 charactersLength)));
		   }
		   return result.join('');
		}

		const passwordsuper = (makeid(nbr1)) // Stockage du mdp dans une variable


    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
      if(db.tiene(`${passwordsuper}`)) return message.author.send("**ERROR KEY:** La license existe déjà.")
    db.establecer(`${passwordsuper}.${message.author.id}`, {keys: passwordsuper, membre: memberaction})

          const GenLicense = new Discord.RichEmbed()
          .setTitle("License Généré » ProtonDev!")
          .setColor(0x00AE86)
          //.setImage('https://c.tenor.com/LDuF2jVabwoAAAAC/banner-welcome.gif')
          .setDescription(`• **Code d'accès:** ||\`${passwordsuper}\`||`)
          .setFooter(`Developped By OldModz95`);

          message.author.send(GenLicense);
  }
  //====================================


  
      if(command === 'add-key'){
    
      if(message.channel.type === 'dm') return;

      if (message.author.id !== idowner)
      return message.channel.send("La commande peux seulement être utilisé par OldModz95.")
      message.delete()
      //Add
    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene("keys")){
      db.establecer("keys", {})
    }
    if(!args[0]) return message.channel.send("Merci d'ajouté une key.")
      if(db.tiene(`${args[0]}`)) return message.channel.send("**ERROR KEY:** La license existe déjà.")
      
    db.establecer(`${args[0]}.${message.author.id}`, {keys: args[0], membre: memberaction})
    message.channel.send(`**Key crée: **||${args[0]}||`)
  }

  //*****************************************************************************************/
    if(command === 'delete-key'){

      if(message.channel.type === 'dm') return;
        if (message.author.id !== idowner)
          return message.channel.send("La commande peux seulement être utilisé par OldModz95")
           message.delete()
  //delete
    const megadb = require("megadb")
    const db = new megadb.crearDB("keys")
    if(!db.tiene(`${args[0]}`)) return message.channel.send("Merci d'ajouté une license.")
    if(db.tiene(`${args[0]}`)){
      db.eliminar(`${args[0]}`) 
    message.channel.send(`**Key Supprimé:** ||${args[0]}||`)

  }
  
}

   if(command === 'redeem'){

    if(message.channel.type === 'dm') return;
    
  const Discord = require("discord.js")
  const megadb = require("megadb")
  const db = new megadb.crearDB("keys")
  let member = message.member;
  if(!db.tiene(`${args[0]}`)) return message.channel.send("Ajouter une key")
  
  const embed = new Discord.RichEmbed() 
    .setTitle("Redeem » Succès!")
    .setColor(0x00AE86)
    .setDescription(`• ${message.author}, Vous venez d'être vérifié.`)
    .setThumbnail("https://i.imgur.com/4EHz1as.gif")
    .setFooter(`Redeem utilisé par ${message.author.tag}`);
    member.addRole(idpremium)
        
    message.channel.send(embed)
      if(db.tiene(`${args[0]}`)){
    db.eliminar(`${args[0]}`)
  
    }
  }



});

client.login("TOKEN")
// OWNER PROJECT: realKazehaya
//UPDATE AND UPGRADE BY OLDMODZ95