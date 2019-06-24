/* eslint-disable no-inline-comments */
const Discord = require('discord.js');
const client = new Discord.Client();
const perm = new Discord.Permissions();
const config = require('./config.json');
const { Client, Attachment } = require('discord.js');
client.login(config.token);

// Miscallaneous variables
let playerCount = 0;
let c0 = {
	tier : 'Max', // template with max stat for debugging purposes
	name : 'template',
	hp : 5000,
	atk : 500,
	def : 200,
	spd : 10,
	agi : 10,
	acr : 10,
	int : 200,
	mag : 2000,
	cd : 20,
	rgn : 100,
};
let c1 = {
	tier : 'S',
	name : 'Seize',
	hp : 3000,
	atk : 360,
	def : 70,
	spd : 9,
	agi : 9,
	acr : 8,
	int: 179,
	mag : 1500,
	cd : 5,
	rgn : 90,
};
let c2 = {
	tier : 'S',
	name : 'Fusoku',
	hp : 4000,
	atk : 470,
	def : 130,
	spd : 5,
	agi : 4,
	acr : 4,
	int : 85,
	mag : 0,
	cd : 0,
	rgn : 50,
};
let c3 = {
	tier : 'S',
	name : 'Leoppscaay',
	hp : 2500,
	atk : 310,
	def : 80,
	spd : 6,
	agi : 5,
	acr : 4,
	int : 100,
	mag : 500,
	cd : 2,
	rgn : 70,
};
let c4 = {
	tier : 'S',
	name : 'Gold',
	hp : 3500,
	atk : 350,
	def : 110,
	spd : 6,
	agi : 3,
	acr : 5,
	int : 120,
	mag : 1900,
	cd : 10,
	rgn : 50,
};
let c5 = {
	tier : 'A',
	name : 'Yellow Strike',
	hp : 1500,
	atk : 320,
	def : 60,
	spd : 10,
	agi : 8,
	acr : 6,
	int : 130,
	mag : 800,
	cd : 5,
	rgn : 10,
};
let c6 = {
	tier : 'A',
	name : 'Pinky',
	hp : 1000,
	atk : 330,
	def : 40,
	spd : 7,
	agi : 3,
	acr : 5,
	int : 120,
	mag : 600,
	cd : 3,
	rgn : 0,
};
let c7 = {
	tier : 'A',
	name : 'Red Queen',
	hp : 2000,
	atk : 260,
	def : 190,
	spd : 4,
	agi : 2,
	acr : 4,
	int : 120,
	mag : 300,
	cd : 3,
	rgn : 10,
};
let c8 = {
	tier : 'A',
	name : 'Kairo',
	hp : 2000,
	atk : 400,
	def : 110,
	spd : 5,
	agi : 4,
	acr : 3,
	int : 75,
	mag : 0,
	cd : 0,
	rgn : 20,
};
let c9 = {
	tier : 'A',
	name : 'Lyzan',
	hp : 1500,
	atk : 270,
	def : 70,
	spd : 7,
	agi : 7,
	acr : 6,
	int : 140,
	mag : 1800,
	cd : 15,
	rgn : 100,
};
let ca = {
	tier : 'B',
	name : 'USaBi',
	hp : 900,
	atk : 260,
	def : 70,
	spd : 6,
	agi : 6,
	acr : 5,
	int : 90,
	mag : 400,
	cd : 5,
	rgn : 0,
};
let cb = {
	tier : 'B',
	name : 'Ell\'Fayrh',
	hp : 1000,
	atk : 250,
	def : 200,
	spd : 3,
	agi : 2,
	acr : 9,
	int : 190,
	mag : 1400,
	cd : 10,
	rgn : 0,
};
let cc = {
	tier : 'B',
	name : 'May',
	hp : 700,
	atk : 260,
	def : 40,
	spd : 7,
	agi : 6,
	acr : 6,
	int : 120,
	mag : 150,
	cd : 3,
	rgn : 5,
};

// Defining bot activity
client.on('ready', () => {
	client.user.setActivity('the game', { type: 'Playing' });
	console.log('Ready!');
});

// Admin commands
client.on('message', msg => {
	if (msg.content === '!admin' && msg.author.perm(0x00000008)) {
		msg.reply('placeholder text');
	}
});
// User commands
client.on('message', msg => { // Getting user input on game start
	if (msg.content === '!startgame') {
		if (playerCount === 0) {
			msg.reply(' is registered as player 1! Waiting for another player...');
			playerCount = 1;
		}
		else if (playerCount === 1) {
			msg.reply(' is registered as player 2! Starting the game...');
			playerCount = 2;
		}
		else{
			msg.reply('There is already two registered players.');
			// failsafe in case someone tries to register when a game is in session
		}
	}
});
