// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "XY Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "OU (suspect test)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Genesect', 'Deoxys-Speed']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: []
	},
	{
		name: "UU (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Heracronite', 'OU', 'BL', 'Drizzle', 'Drought']
	},
	{
		name: "LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel', 'Yanma', 'Tangela']
	},
	{
		name: "LC UU",
		section: "XY Singles",

		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel',
			'Abra',
			'Aipom',
			'Bronzor',
			'Bunnelby',
			'Carvanha',
			'Chinchou',
			'Clamperl',
			'Croagunk',
			'Drilbur',
			'Dwebble',
			'Elekid',
			'Ferroseed',
			'Fletchling',
			'Froakie',
			'Gastly',
			'Gligar',
			'Growlithe',
			'Honedge',
			'Inkay',
			'Larvesta',
			'Magnemite',
			'Meditite',
			'Mienfoo',
			'Misdreavus',
			'Munchlax',
			'Murkrow',
			'Pawniard',
			'Ponyta',
			'Porygon',
			'Scraggy',
			'Shellder',
			'Slowpoke',
			'Sneasel',
			'Snover',
			'Spritzee',
			'Staryu',
			'Surskit',
			'Swirlix',
			'Tangela',
			'Timburr',
			'Tirtouga',
			'Torchic',
			'Tyrunt',
			'Vullaby',
			'Vulpix',
			'Yanma']
	},
	{
		name: "XY Battle Spot Singles",
		section: "XY Singles",

		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
		}
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	
	{
		name: "Random Doubles Battle",
		section: "XY Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: ['Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal',
			'Aegislash',
			'Alakazam',
			'Amoonguss',
			'Azumarill',
			'Breloom',
			'Chandelure',
			'Charizard',
			'Clefable',
			'Cloyster',
			'Conkeldurr',
			'Cresselia',
			'Dragonite',
			'Excadrill',
			'Ferrothorn',
			'Garchomp',
			'Gardevoir',
			'Gastrodon',
			'Genesect',
			'Gengar',
			'Gliscor',
			'Goodra',
			'Greninja',
			'Gyarados',
			'Heatran',
			'Hitmontop',
			'Infernape',
			'Jolteon',
			'Kangaskhan',
			'Klefki',
			'Landorus-Therian',
			'Lucario',
			'Mamoswine',
			'Manectric',
			'Mawile',
			'Meowstic',
			'Metagross',
			'Ninetales',
			'Politoed',
			'Reuniclus',
			'Rotom-Wash',
			'Rhyperior',
			'Sableye',
			'Scizor',
			'Scrafty',
			'Sylveon',
			'Talonflame',
			'Terrakion',
			'Thundurus',
			'Togekiss',
			'Trevenant',
			'Tyranitar',
			'Venusaur',
			'Volcarona',
			'Whimsicott']
	},
	{
		name: "XY Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		ruleset: ['Team Preview']
	},

	// Seasonals
	///////////////////////////////////////////////////////////////////

	// Seasoning Greetings, November 2012
	{
		name: "[Seasonal] Seasoning's Greetings",
		team: 'randomSeasonal',
		section: 'Seasonal',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause']
	},
	// Winter Wonderland, December 2012 and January 2013
	{
		name: "[Seasonal] Winter Wonderland",
		team: 'randomSeasonalWW',
		section: 'Seasonal',
		onBegin: function() {
			this.setWeather('Hail');
			delete this.weatherData.duration;
		},
		onModifyMove: function(move) {
			if (move.id === 'present') {
				move.category = 'Status';
				move.basePower = 0;
				delete move.heal;
				move.accuracy = 100;
				switch (this.random(20)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
					move.onTryHit = function() {
						this.add('-message', "The present was a bomb!");
					};
					move.category = 'Physical';
					move.basePower = 200;
					break;
				case 5:
					move.onTryHit = function() {
						this.add('-message', "The present was confusion!");
					};
					move.volatileStatus = 'confusion';
					break;
				case 6:
					move.onTryHit = function() {
						this.add('-message', "The present was Disable!");
					};
					move.volatileStatus = 'disable';
					break;
				case 7:
					move.onTryHit = function() {
						this.add('-message', "The present was a taunt!");
					};
					move.volatileStatus = 'taunt';
					break;
				case 8:
					move.onTryHit = function() {
						this.add('-message', "The present was some seeds!");
					};
					move.volatileStatus = 'leechseed';
					break;
				case 9:
					move.onTryHit = function() {
						this.add('-message', "The present was an embargo!");
					};
					move.volatileStatus = 'embargo';
					break;
				case 10:
					move.onTryHit = function() {
						this.add('-message', "The present was a music box!");
					};
					move.volatileStatus = 'perishsong';
					break;
				case 11:
					move.onTryHit = function() {
						this.add('-message', "The present was a curse!");
					};
					move.volatileStatus = 'curse';
					break;
				case 12:
					move.onTryHit = function() {
						this.add('-message', "The present was Torment!");
					};
					move.volatileStatus = 'torment';
					break;
				case 13:
					move.onTryHit = function() {
						this.add('-message', "The present was a trap!");
					};
					move.volatileStatus = 'partiallytrapped';
					break;
				case 14:
					move.onTryHit = function() {
						this.add('-message', "The present was a root!");
					};
					move.volatileStatus = 'ingrain';
					break;
				case 15:
				case 16:
				case 17:
					move.onTryHit = function() {
						this.add('-message', "The present was a makeover!");
					};
					var boosts = {};
					var possibleBoosts = ['atk','def','spa','spd','spe','accuracy'].randomize();
					boosts[possibleBoosts[0]] = 1;
					boosts[possibleBoosts[1]] = -1;
					boosts[possibleBoosts[2]] = -1;
					move.boosts = boosts;
					break;
				case 18:
					move.onTryHit = function() {
						this.add('-message', "The present was psychic powers!");
					};
					move.volatileStatus = 'telekinesis';
					break;
				case 19:
					move.onTryHit = function() {
						this.add('-message', "The present was fatigue!");
					};
					move.volatileStatus = 'mustrecharge';
					break;
				}
			}
		},
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause']
	},
	// Valentine Venture, February 2013
	{
		name: "[Seasonal] Valentine Venture",
		team: 'randomSeasonalVV',
		section: 'Seasonal',
		gameType: 'doubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause']
	},
	// Spring Forward, March 2013
	{
		name: "[Seasonal] Spring Forward",
		team: 'randomSeasonalSF',
		section: 'Seasonal',
		onBegin: function() {
			if (this.random(100) < 75) {
				this.add('-message', "March and April showers bring May flowers...");
				this.setWeather('Rain Dance');
				delete this.weatherData.duration;
			}
			this.debug('Cutting teams down to three.');
    		this.p1.pokemon = this.p1.pokemon.slice(0,3);
	        this.p1.pokemonLeft = this.p1.pokemon.length;
	        this.p2.pokemon = this.p2.pokemon.slice(0,3);
	        this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		onSwitchIn: function(pokemon) {
			var greenPokemon = {
				bulbasaur:1, ivysaur:1, venusaur:1, caterpie:1, metapod:1, bellsprout:1, weepinbell:1, victreebel:1, scyther:1,
				chikorita:1, bayleef:1, meganium:1, spinarak:1, natu:1, xatu:1, bellossom:1, politoed:1, skiploom:1, lavitar:1, 
				tyranitar:1, celebi:1, treecko:1, grovyle:1, sceptile:1, dustox:1, lotad:1, lombre:1, ludicolo:1, breloom:1, 
				electrike:1, roselia:1, gulpin:1, vibrava:1, flygon:1, cacnea:1, cacturne:1, cradily:1, keckleon:1, tropius:1, 
				rayquaza:1, turtwig:1, grotle:1, torterra:1, budew:1, roserade:1, carnivine:1, yanmega:1, leafeon:1, shaymin:1, 
				shayminsky:1, snivy:1, servine:1, serperior:1, pansage:1, simisage:1, swadloon:1, cottonee:1, whimsicott:1, 
				petilil:1, lilligant:1, basculin:1, maractus:1, trubbish:1, garbodor:1, solosis:1, duosion:1, reuniclus:1, 
				axew:1, fraxure:1, golett:1, golurk:1, virizion:1, tornadus:1, tornadustherian:1, burmy:1, 
				kakuna:1, beedrill:1, sandshrew:1, nidoqueen:1, zubat:1, golbat:1, oddish:1, gloom:1, mankey:1, poliwrath:1, 
				machoke:1, machamp:1, doduo:1, dodrio:1, grimer:1, muk:1, kingler:1, cubone:1, marowak:1, hitmonlee:1, tangela:1, 
				mrmime:1, tauros:1, kabuto:1, dragonite:1, mewtwo:1, marill:1, hoppip:1, espeon:1, teddiursa:1, ursaring:1, 
				cascoon:1, taillow:1, swellow:1, pelipper:1, masquerain:1, azurill:1, minun:1, carvanha:1, huntail:1, bagon:1, 
				shelgon:1, salamence:1, latios:1, tangrowth:1, seismitoad:1, jellicent:1, elektross:1, druddigon:1, 
				bronzor:1, bronzong:1, gallade:1
			};
			if (pokemon.template.id in greenPokemon) {
				this.add('-message', pokemon.name + " drank way too much!");
				pokemon.addVolatile('confusion');
				pokemon.statusData.time = 0;
			}
		},
		onModifyMove: function(move) {
			if (move.id === 'barrage') {
				move.category = 'Special';
				move.type = 'Grass';
				move.basePower = 35;
				move.critRatio = 2;
				move.accuracy = 100;
				move.multihit = [3,5],
				move.onBeforeMove = function() {
					this.add('-message', "You found a little chocolate egg!");
				};
				move.onHit = function (target, source) {
					this.heal(Math.ceil(source.maxhp / 40), source);
				};
			} else if (move.id === 'eggbomb') {
				move.category = 'Special';
				move.type = 'Grass';
				move.basePower = 100;
				move.willCrit = true;
				move.accuracy = 100;
				move.onHit = function (target, source) {
					this.add('-message', source.name + " ate a big chocolate egg!");
					this.heal(source.maxhp / 8, source);
				};
				// Too much chocolate, you get fat. Also with STAB it's too OP
				move.self = {boosts: {spe: -2, spa: -1}};
			} else if (move.id === 'softboiled') {
				move.heal = [3,4];
				move.onHit = function(target) {
					this.add('-message', target.name + " ate a delicious chocolate egg!");
				};
			} else {
				// As luck is everywhere...
				move.critRatio = 2;
			}
		},
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause']
	},
	// Fools Festival, April 2013
	{
		name: "[Seasonal] Fools Festival",
		section: 'Seasonal',
		team: 'randomSeasonalFF',
		onBegin: function() {
			var dice = this.random(100);
			if (dice < 65) {
				this.add('-message', "April showers bring May flowers...");
				this.setWeather('Rain Dance');
			} else if (dice < 95) {
				this.add('-message', "What a wonderful spring day! Let's go picnic!");
				this.setWeather('Sunny Day');
			} else {
				this.add('-message', "Bollocks, it's hailing?! In april?! Curse you, spring!!");
				this.setWeather('Hail');
			}
			delete this.weatherData.duration;
		},
		onSwitchIn: function(pokemon) {
			var name = (pokemon.ability === 'illusion' && pokemon.illusion)? pokemon.illusion.toString().substr(4, pokemon.illusion.toString().length) : pokemon.name;
			var stonedPokemon = {Koffing:1, Weezing:1, Slowpoke:1, Slowbro:1, Slowking:1, Psyduck:1, Spinda:1};
			var stonerQuotes = ['your face is green!', 'I just realised that Arceus fainted for our sins', 'I can, you know, feel the colors', 
			"you're my bro", "I'm imaginining a new color!", "I'm smelling the things I see!", 'hehe, hehe, funny', "I'm hungry!" , 'we are pokemanz',        
			'Did you know that Eevee backwards is eevee?! AMAZING', 'aaaam gonna be the verrrry best like no one evar wasss', 
			"I feel like someone is watching us through a screen!", "come at me bro"];
			if (name in stonedPokemon) {
				var random = this.random(stonerQuotes.length);
				this.add('-message', name + ": Duuuuuude, " + stonerQuotes[random]);
				this.boost({spe:-1, def:1, spd:1}, pokemon, pokemon, {fullname:'high'});
			}
			// Pokemon switch in messages
			var msg = '';
			switch (name) {
			case 'Ludicolo':
				msg = "¡Ay, ay, ay! ¡Vámonos de fiesta, ya llegó Ludicolo!";
				break;
			case 'Missingno':
				msg = "Hide yo items, hide yo data, missingno is here!";
				break;
			case 'Slowpoke': case 'Slowbro':
				var didYouHear = ['Black & White are coming out soon!', 'Genesect has been banned to Ubers!',
				'Smogon is moving to Pokemon Showdown!', "We're having a new thing called Seasonal Ladder!", 'Deoxys is getting Nasty Plot!'];
				didYouHear = didYouHear.randomize();
				msg = 'Did you hear? ' + didYouHear[0];
				break;
			case 'Spinda':
				msg = "LOOK AT ME I'M USING SPINDA";
				break;
			case 'Whimsicott':
				msg = 'Oh dear lord, not SubSeed again!';
				break;
			case 'Liepard':
				msg = '#yoloswag';
				break;
			case 'Tornadus':
				msg = "It's HURRICANE time!";
				break;
			case 'Riolu':
				msg = 'Have you ever raged so hard that you smashed your keyboard? Let me show you.';
				break;
			case 'Gastly': case 'Haunter': case 'Gengar':
				msg = 'Welcome to Trolledville, population: you';
				break;
			case 'Amoonguss':
				msg = 'How do you feel about three sleep turns?';
				break;
			case 'Shaymin-Sky':
				msg = 'Do you know what paraflinch is? huehue';
				break;
			case 'Ferrothorn':
				msg = 'inb4 Stealth Rock';
				break;
			}
			if (msg !== '') {
				this.add('-message', msg);
			}
		},
		onModifyMove: function(move) {
			var dice = this.random(100);
			if (dice < 40) {
				var type = '';
				switch (move.type.toLowerCase()){
				case 'rock':
				case 'ground':
					type = 'Grass';
					break;
				case 'fire':
				case 'bug':
					type = 'Water';
					break;
				case 'water':
				case 'grass':
					type = 'Fire';
					break;
				case 'flying':
					type = 'Fighting';
					break;
				case 'fighting':
					type = 'Flying';
					break;
				case 'dark':
					type = 'Bug';
					break;
				case 'dragon':
				case 'electric':
					type = 'Ice';
					break;
				case 'ghost':
					type = 'Normal';
					break;
				case 'ice':
					type = 'Electric';
					break;
				case 'normal':
				case 'poison':
					type = 'Ghost';
					break;
				case 'psychic':
					type = 'Dark';
					break;
				case 'steel':
					type = 'Poison';
					break;
				}
				
				move.type = type;
				this.add('-message', 'lol trolled, I changed yo move type');
			}
			
			// Additional changes
			if (move.id === 'bulkup') {
				move.onHit = function (target, source, move) {
					var name = (target.ability === 'illusion' && target.illusion)? target.illusion.toString().substr(4, target.illusion.toString().length) : target.name;
					this.add('-message', name + ': Do you even lift, bro?!');
				};
			} else if (move.id === 'charm' || move.id === 'sweetkiss' || move.id === 'attract') {
				var malePickUpLines = ['have you been to Fukushima recently? Because you are glowing tonight!', 
				'did it hurt when you fell to the earth? Because you must be an angel!', 'can I buy you a drink?',
				'roses are red / lemons are sour / spread your legs / and give me an hour', 
				"roses are red / violets are red / I'm not good with colors", "Let's go watch cherry bossoms together (´･ω･`)",
				"Will you be my Denko? (´･ω･`)"];
				malePickUpLines = malePickUpLines.randomize();
				var femalePickUpLines = ['Do you go to the gym? You are buff!', "Guy, you make me hotter than July.",
				"While I stare at you I feel like I just peed myself", "Let's go to my apartment to have midnight coffee", 
				"Marry me, I wanna have 10 kids of you!", "Go out with me or I'll twist your neck!", "Man, you have some nice abs, can I touch them?"];
				femalePickUpLines = femalePickUpLines.randomize();
				move.onTryHit = function (target, source, move) {
					var pickUpLine = '';
					if (source.gender === 'M') {
						pickUpLine = malePickUpLines[0];
					} else if (source.gender === 'F') {
						pickUpLine = femalePickUpLines[0];
					} else {
						return;
					}
					var name = (source.ability === 'illusion' && source.illusion)? source.illusion.toString().substr(4, source.illusion.toString().length) : source.name;
					var targetName = (target.ability === 'illusion' && target.illusion)? target.illusion.toString().substr(4, target.illusion.toString().length) : target.name;
					this.add('-message', name + ': Hey, ' + targetName + ', ' + pickUpLine);
				};
				move.onMoveFail = function(target, source, move) {
                    // Returns false so move calls onHit and onMoveFail
					var femaleRejectLines = ['Uuuh... how about no', "gtfo I'm taken", 'I have to water the plants. On Easter Island. For a year. Bye',
					'GO AWAY CREEP', 'Do you smell like rotten eggs?', "I wouldn't date you even if you were the last Pokemon on earth."];
					femaleRejectLines = femaleRejectLines.randomize();
					var maleRejectLines = ["I'd rather get it on with a dirty daycare Ditto", "I'm not realy sure you're clean", 
					"Ew, you're disgusting!", "It's not me, it's you. Go away, ugly duckling.", "Not really interested *cough*weirdo*cough*"];
					maleRejectLines = maleRejectLines.randomize();
					var answer = '';
					if (target.gender === 'M') {
						answer = maleRejectLines[0];
					} else if (target.gender === 'F') {
						answer = femaleRejectLines[0];
					} else {
						return;
					}
					var targetName = (target.ability === 'illusion' && target.illusion)? target.illusion.toString().substr(4, target.illusion.toString().length) : target.name;
                    if (!target.volatiles['attract']) {
                        this.add('-message', targetName + ': ' + answer);
                    }
                };
			} else if (move.id === 'taunt') {
				var quotes = [
					"Yo mama so fat, she 4x resists Ice- and Fire-type attacks!",
					"Yo mama so ugly, Captivate raises her opponent's Special Attack!",
					"Yo mama so dumb, she lowers her Special Attack when she uses Nasty Plot!",
					"Yo mama so fat, Smogon switched to Pokemon Showdown because PO had an integer overflow bug when you used Grass Knot against her!",
					"Yo mama so dumb, she thought Sylveon would be Light Type!"
				];
				move.onHit = function (target, source) {
					var sourceName = (source.ability === 'illusion' && source.illusion) ? source.illusion.toString().substr(4, source.illusion.toString().length) : source.name;
					this.add('-message', sourceName + ' said, "' + quotes.sample() + '"');
				};
			}
		},
		onFaint: function (pokemon) {
			// A poem every time a Pokemon faints
			var haikus = ["You suck a lot / You are a bad trainer / let a mon faint", "they see me driving / round town with the girl i love / and I'm like, haikou",
			"Ain't no Pokemon tough enough / ain't no bulk decent enough / ain't no recovery good enough / to keep me from fainting you, babe",
			"Roses are red / violets are blue / you must be on some med / 'coz as a trainer you suck",
			"You're gonna be the very worst / like no one ever was / to lose all the battles is your test / to faint them all is your cause",
			'Twinkle twinkle little star / fuck you that was my best sweeper', "I'm wheezy and I'm sleezy / but as a trainer you're measly", 
			"You're sharp as a rock / you're bright as a hole / you're one to mock / you could be beaten by a maimed mole",
			"Alas, poor trainer! I knew him, your Pokémon, a fellow of infinite jest, of most excellent fancy."];
			haikus = haikus.randomize();
			this.add('-message', haikus[0]);
		},
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause']
	},
	{
		name: "[Seasonal] May Mayhem",
		section: "Seasonal",
		team: 'randomSeasonalMM',
		onBegin: function() {
			// Shameless plug
			var date = Date();
			date = date.split(' ');
			if (parseInt(date[2]) === 12) {
				this.add('-message', 'Wish a HAPPY BIRTHDAY to Treecko32!!');
			}
			if (parseInt(date[2]) === 16) {
				this.add('-message', 'Wish a HAPPY BIRTHDAY to Joim!!');
			}
		},
		onSwitchIn: function(pokemon) {
			var dice = this.random(100);
			if (dice < 25) {
				this.add('-message', 'Never gonna give you up, never gonna let you down');
			}
		}
	},
	// June Jubilee, June 2013
	{
		name: "[Seasonal] June Jubilee",
		section: "Seasonal",
		team: 'randomSeasonalJJ',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			this.add('-message', "Greetings, trainer! Delibird needs your help! It's lost in the US and it needs to find its way back to the arctic before summer starts! Help your Delibird while travelling north, but you must defeat the opponent before he reaches there first!");
			this.setWeather('Sunny Day');
			delete this.weatherData.duration;
		},
		onBeforeMove: function(pokemon, target, move) {
			// Reshiram changes weather with its tail until you reach the arctic
			if (pokemon.template.speciesid === 'reshiram' && pokemon.side.battle.turn < 15) {
				var weatherMsg = '';
				var dice = this.random(100);
				if (dice < 25) {
					this.setWeather('Rain Dance');
					weatherMsg = 'a Drizzle';
				} else if (dice < 50) {
					this.setWeather('Sunny Day');
					weatherMsg = 'a Sunny Day';
				} else if (dice < 75) {
					this.setWeather('Hail');
					weatherMsg = 'Hail';
				} else {
					this.setWeather('Sandstorm');
					weatherMsg = 'a Sandstorm';
				}
				this.add('-message', "Reshiram caused " + weatherMsg + " with its tail!");
				delete this.weatherData.duration;
			}
		},
		onBeforeMove: function(pokemon) {
			if (!pokemon.side.battle.seasonal) pokemon.side.battle.seasonal = {'none':false, 'drizzle':false, 'hail':false};
			if (pokemon.side.battle.turn >= 4 && pokemon.side.battle.seasonal.none === false) {
				this.add('-message', "You are travelling north and you have arrived to North Dakota! There's a clear sky and the temperature is lower here.");
				this.clearWeather();
				pokemon.side.battle.seasonal.none = true;
			}
			if (pokemon.side.battle.turn >= 8 && pokemon.side.battle.seasonal.drizzle === false) {
				this.add('-message', "You are travelling further north and you have arrived to Edmonton! It started raining a lot... and it's effing cold.");
				this.setWeather('Rain Dance');
				delete this.weatherData.duration;
				pokemon.side.battle.seasonal.drizzle = true;
			}
			if (pokemon.side.battle.turn >= 12 && pokemon.side.battle.seasonal.hail === false) {
				this.add('-message', "You have arrived to the arctic! Defeat the other trainer so Delibird can be free!");
				this.setWeather('Hail');
				delete this.weatherData.duration;
				pokemon.side.battle.seasonal.hail = true;
			}
		},
		onFaint: function(pokemon) {
			if (pokemon.template.id === 'delibird') {
				var name = pokemon.side.name;
				var winner = '';
				if (pokemon.side.id === 'p1') {
					winner = 'p2';
				} else {
					winner = 'p1';
				}
				this.add('-message', "No!! You let Delibird down. He trusted you. You lost the battle, " + name + ". But you lost something else: your Pokémon's trust.");
				pokemon.battle.win(winner);
			}
		}
	},
	// Jolly July, July 2013
	{
		name: "[Seasonal] Jolly July",
		section: 'Seasonal',
		team: 'randomSeasonalJuly',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			this.add('-message', "You and your faithful favourite Pokémon are travelling around the world, and you will fight this trainer in many places until either win or finish the travel!");
			// ~learn international independence days with PS~
			var date = Date();
			date = date.split(' ');
			switch (parseInt(date[2])) {
			case 4:
				// 4th of July for the US
				this.add('-message', "FUCK YEAH 'MURICA!");
				break;
			case 5:
				// 5th independence day of Algeria and Venezuela
				this.add('-message', "¡Libertad para Venezuela o muerte!");
				break;
			case 9:
				// 9th independence day of Argentina and South Sudan
				this.add('-message', "¡Che, viteh que somos libres!");
				break;
			case 10:
				// Bahamas lol
				this.add('-message', "Free the beaches!");
				break;
			case 20:
				// Colombia
				this.add('-message', "¡Independencia para Colombia!");
				break;
			case 28:
				// Perú
				this.add('-message', "¡Perú libre!");
				break;
			}
		},
		onBeforeMove: function(pokemon) {
			// Set all the stuff
			var dice = this.random(100);
			if (!pokemon.side.battle.cities) {
				// Set up the cities you visit around the world
				pokemon.side.battle.cities = {
					'N': [
						'Madrid', 'Paris', 'London', 'Ghent', 'Amsterdam', 'Gdansk',
						'Munich', 'Rome', 'Rabat', 'Stockholm', 'Moscow', 'Beijing',
						'Tokyo', 'Dubai', 'New York', 'Vancouver', 'Los Angeles',
						'Edmonton', 'Houston', 'Mexico DF', 'Barcelona', 'Blanes'
					],
					'S': [
						'Buenos Aires', 'Lima', 'Johanesburg', 'Sydney', 'Melbourne',
						'Santiago de Chile', 'Bogota', 'Lima', 'Montevideo',
						'Wellington', 'Canberra', 'Jakarta', 'Kampala', 'Mumbai',
						'Auckland', 'Pretoria', 'Cape Town'
					]
				};
				pokemon.side.battle.currentPlace = {'hemisphere':'N', 'city':'Townsville'};
				pokemon.side.battle.cities.N = pokemon.side.battle.cities.N.randomize();
				pokemon.side.battle.cities.S = pokemon.side.battle.cities.S.randomize();
				pokemon.side.battle.indexes = {'N':0, 'S':0};
				// We choose a hemisphere and city to be in at the beginning
				if (dice < 50) pokemon.side.battle.currentPlace.hemisphere = 'S';
				pokemon.side.battle.currentPlace.city = pokemon.side.battle.cities[pokemon.side.battle.currentPlace.hemisphere][0];
				pokemon.side.battle.indexes[pokemon.side.battle.currentPlace.hemisphere]++;
			}

			// Snarky comments from one trainer to another
			var diceTwo = this.random(100);
			if (diceTwo > 75) {
				var comments = [
					"I've heard your mom is also travelling around the world catchin' em all, if you get what I mean, %s.",
					"You fight like a Miltank!", "I'm your Stealth Rock to your Charizard, %s!", 
					"I bet I could beat you with a Spinda. Or an Unown.", "I'm rubber, you're glue!", 
					"I've seen Slowpokes with more training prowess, %s.", "You are no match for me, %s!",
					"%s, have you learned how to battle from Bianca?"
				];
				comments = comments.randomize();
				var otherTrainer = (pokemon.side.id === 'p1')? 'p2' : 'p1';
				this.add('-message', pokemon.side.name + ': ' + comments[0].replace('%s', pokemon.side.battle[otherTrainer].name));
			}
			delete diceTwo;

			// This is the stuff that is calculated every turn once
			if (!pokemon.side.battle.lastMoveTurn) pokemon.side.battle.lastMoveTurn = 0;
			if (pokemon.side.battle.lastMoveTurn !== pokemon.side.battle.turn) {
				var nextChange = this.random(2, 4);
				if (pokemon.side.battle.lastMoveTurn === 0 || pokemon.side.battle.lastMoveTurn + nextChange <= pokemon.side.battle.turn) {
					pokemon.side.battle.lastMoveTurn = pokemon.side.battle.turn;
					if (dice < 50) {
						if (pokemon.side.battle.currentPlace.hemisphere === 'N') {
							pokemon.side.battle.currentPlace.hemisphere = 'S';
							this.add('-fieldstart', 'move: Wonder Room', '[of] Seasonal');
						} else {
							pokemon.side.battle.currentPlace.hemisphere = 'N';
							this.add('-fieldend', 'move: Wonder Room', '[of] Seasonal');
						}
					}

					// Let's check if there's cities to visit left
					if (pokemon.side.battle.indexes.N === pokemon.side.battle.cities['N'].length - 1 
					&& pokemon.side.battle.indexes.S === pokemon.side.battle.cities['S'].length - 1) {
						this.add('-message', "You have travelled all around the world, " + pokemon.side.name + "! You won!");
						pokemon.battle.win(pokemon.side.id);
						return false;
					}
					// Otherwise, move to the next city
					pokemon.side.battle.currentPlace.city = pokemon.side.battle.cities[pokemon.side.battle.currentPlace.hemisphere][pokemon.side.battle.indexes[pokemon.side.battle.currentPlace.hemisphere]];
					pokemon.side.battle.indexes[pokemon.side.battle.currentPlace.hemisphere]++;
					var hemispheres = {'N':'northern', 'S':'southern'};
					pokemon.side.battle.add('-message', "Travelling around the world, you have arrived to a new city in the " + hemispheres[pokemon.side.battle.currentPlace.hemisphere] + " hemisphere, " + pokemon.side.battle.currentPlace.city + "!");
				}
			}
		},
		onModifyMove: function(move) {
			if (move.id === 'fireblast') move.name = 'July 4th Fireworks';
		}
	},
	// Average August, August 2013
	{
		name: "[Seasonal] Average August",
		section: 'Seasonal',
		team: 'randomSeasonalAA',
		gameType: 'doubles',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			// What does player 1 lead with?
			var p1Where = 'boat';
			var p2Where = 'boat';
			if (this.p1.pokemon[0].name === 'Kyogre') p1Where = 'pirates';
			if (this.p2.pokemon[0].name === 'Kyogre') p2Where = 'pirates';
			var shipNames = [
				'Zarelrules', 'Joimawesome', 'Treeckonoob', 'MJailBait', 'mikelpuns', 'TTTtttttt', 'Frazzle Dazzle',
				'TIbot', 'CDXCIV', 'Srs Bsns Trts', 'Leemz', 'Eggymad', 'Snoffles', 'bmelted', 'Poopes', 'Hugonedugen',
				'Il Haunter', 'chaospwns', 'WaterBro', 'niggie', 'DOOM', 'qhore', 'Jizzmine', 'Aldarown'
			].randomize();
			var whereAreThey = (p1Where === 'boat' && p2Where === 'boat')? 'You both were aboard the fantastic ship S. S. ' + shipNames[0] :
			((p1Where === 'pirates' && p2Where === 'pirates')? 'You are two pirate gangs on a summer sea storm about to raze the ship S. S. ' +  shipNames[0] :
			((p1Where === 'pirates')? this.p1.name : this.p2.name) + ' leads a pirate boat to raze the ship S. S. ' + shipNames[0]
			+ ' where ' + ((p1Where === 'pirates')? this.p2.name : this.p1.name)) + ' is enjoying a sea travel,';

			this.add('-message',
				'Alas, poor trainers! ' + whereAreThey + " when a sudden summer Hurricane made a Wailord hit your transport, and now it's sinking! "
				+ "There are not enough life boats for everyone nor trainers ain't sharing their Water-type friends, "
				+ "so you'll have to fight to access a life boat! Good luck! You have to be fast to not to be hit by the Hurricane!"
			);
		},
		onSwitchIn: function(pokemon) {
			if (pokemon.battle.turn > 0) {
				var result = true;
				for (var i=0; i<pokemon.battle.sides.length; i++) {
					for (var j=0; j<pokemon.battle.sides[i].active.length; j++) {
						if (pokemon.battle.sides[i].active[j] && !pokemon.battle.sides[i].active[j].volatiles['perishsong']) {
							result = false;
						}
						if (pokemon.battle.sides[i].active[j] && pokemon.battle.sides[i].active[j].ability !== 'soundproof') {
							pokemon.battle.sides[i].active[j].addVolatile('perishsong');
						} else {
							this.add('-immune', pokemon.battle.sides[i].active[j], '[msg]');
							this.add('-end', pokemon.battle.sides[i].active[j], 'Perish Song');
						}
					}
				}
				if (result) return false;
				this.add('-fieldactivate', 'move: Perish Song');
			}
		}
	},
	// School Schemes, September 2013
	{
		name: "[Seasonal] School Schemes",
		section: 'Seasonal',
		team: 'randomSeasonalSS',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod']
	},
	// Octoberfest, October 2013
	{
		name: "[Seasonal] Octoberfest",
		section: 'Seasonal',
		mod: 'gen5',
		team: 'randomSeasonalOF',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onModifyMove: function(move) {
			if (move.id === 'trick') {
				delete move.onHit;
				switch (this.random(17)) {
				case 0:
					move.onTryHit = function() {
						this.add('-message', 'Trick: Kick on the nuts!');
					};
					move.category = 'Physical';
					move.type = 'Normal';
					move.basePower = 200;
					break;
				case 1:
					move.onTryHit = function() {
						this.add('-message', 'Trick: Fireworks at your feet!');
					};
					move.category = 'Special';
					move.type = 'Fire';
					move.basePower = 200;
					break;
				case 2:
					move.onTryHit = function() {
						this.add('-message', 'Trick: Doused with water!');
					};
					move.category = 'Special';
					move.type = 'Water';
					move.basePower = 200;
					break;
				case 3:
					move.onTryHit = function() {
						this.add('-message', 'Trick: Bombed with rotten eggs!');
					};
					move.category = 'Special';
					move.type = 'Poison';
					move.basePower = 200;
					break;
				case 4:
					move.onTryHit = function() {
						this.add('-message', 'Trick: You got scared by a real-looking costume!');
					};
					move.category = 'Special';
					move.type = 'Dark';
					move.basePower = 200;
					break;
				case 5:
					move.onTryHit = function() {
						this.add('-message', 'Trick: You got hit in the head!');
					};
					move.volatileStatus = 'confusion';
					break;
				case 6:
					move.onTryHit = function() {
						this.add('-message', 'Trick: Your arms were maimed!');
					};
					move.volatileStatus = 'disable';
					break;
				case 7:
					move.onTryHit = function() {
						this.add('-message', "Trick: You've been taunted by those meddling kids!");
					};
					move.volatileStatus = 'taunt';
					break;
				case 8:
					move.onTryHit = function() {
						this.add('-message', 'Treat: You got some yummy seeds!');
					};
					move.volatileStatus = 'leechseed';
					break;
				case 9:
					move.onTryHit = function() {
						this.add('-message', 'Trick: Your car was stolen!');
					};
					move.volatileStatus = 'embargo';
					break;
				case 10:
					move.onTryHit = function() {
						this.add('-message', "Trick: You're haunted and you're going to die!");
					};
					move.volatileStatus = 'perishsong';
					break;
				case 11:
					move.onTryHit = function() {
						this.add('-message', 'Trick: A ghost cursed you!');
					};
					move.volatileStatus = 'curse';
					break;
				case 12:
					move.onTryHit = function() {
						this.add('-message', "Trick: You're tormented by the constant tricking!");
					};
					move.volatileStatus = 'torment';
					break;
				case 13:
					move.onTryHit = function() {
						this.add('-message', 'Treat: Om nom nom roots!');
					};
					move.volatileStatus = 'ingrain';
					break;
				case 14:
					move.onTryHit = function() {
						this.add('-message', 'Treat: Uhm, these candy taste weird...');
					};
					var boosts = {};
					var possibleBoosts = ['atk','def','spa','spd','spe','accuracy','evasion'].randomize();
					boosts[possibleBoosts[0]] = 2;
					boosts[possibleBoosts[1]] = -1;
					boosts[possibleBoosts[2]] = -1;
					move.boosts = boosts;
					break;
				case 15:
					move.onTryHit = function() {
						this.add('-message', "Trick: You're tired of running after teenagers with your baseball bat.");
					};
					move.volatileStatus = 'mustrecharge';
					break;
				case 16:
					move.onTryHit = function() {
						this.add('-message', "Treat: You got candy!");
					};
					move.heal = [1,2];
					break;
				}
			} else if (move.id === 'present') {
				move.accuracy = 100;
				move.basePower = 0;
				move.category = 'Status';
				move.volatileStatus = 'confusion';
				move.pp = 10;
				move.priority = 0;
				move.name = 'Offer Beer';
				move.boosts = {'atk':-1, 'spa':-1, 'def':1, 'spd':1, 'spe':-1, 'accuracy':-1, 'evasion':1};
				move.onTryHit = function() {
					this.add('-message', "Oh, why, thank you! This beer is delicious!");
				};
				move.effect = {
					onBeforeMove: function(pokemon, target, move) {
						if (this.random(10) < 3) {
							this.useMove('Sing', target);
							return;
						}
					}
				};
			}
		}
	},
	// Thankless Thanksgiving, November 2013
	{
		name: "[Seasonal] Thankless Thanksgiving",
		section: 'Seasonal',
		team: 'randomSeasonalTT',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod']
	},
	// Christmas Charade, December 2013
	{
		name: "[Seasonal] Christmas Charade",
		section: 'Seasonal',
		team: 'randomSeasonalCC',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			this.setWeather('Hail');
			delete this.weatherData.duration;
		},
		onModifyMove: function(move) {
			if (move.id === 'present') {
				move.category = 'Status';
				move.basePower = 0;
				delete move.heal;
				move.accuracy = 100;
				switch (this.random(19)) {
				case 0:
					move.onTryHit = function() {
						this.add('-message', "The present was a bomb!");
					};
					move.category = 'Physical';
					move.basePower = 250;
					break;
				case 1:
					move.onTryHit = function() {
						this.add('-message', "The present was confusion!");
					};
					move.volatileStatus = 'confusion';
						break;
				case 2:
					move.onTryHit = function() {
						this.add('-message', "The present was Disable!");
					};
					move.volatileStatus = 'disable';
					break;
				case 3:
					move.onTryHit = function() {
						this.add('-message', "The present was a taunt!");
					};
					move.volatileStatus = 'taunt';
					break;
				case 4:
					move.onTryHit = function() {
						this.add('-message', "The present was some seeds!");
					};
					move.volatileStatus = 'leechseed';
					break;
				case 5:
					move.onTryHit = function() {
						this.add('-message', "The present was an embargo!");
					};
					move.volatileStatus = 'embargo';
					break;
				case 6:
					move.onTryHit = function() {
						this.add('-message', "The present was a music box!");
					};
					move.volatileStatus = 'perishsong';
					break;
				case 7:
					move.onTryHit = function() {
						this.add('-message', "The present was a curse!");
					};
					move.volatileStatus = 'curse';
					break;
				case 8:
					move.onTryHit = function() {
						this.add('-message', "The present was Torment!");
					};
					move.volatileStatus = 'torment';
					break;
				case 9:
					move.onTryHit = function() {
						this.add('-message', "The present was a trap!");
					};
					move.volatileStatus = 'partiallytrapped';
					break;
				case 10:
					move.onTryHit = function() {
						this.add('-message', "The present was a root!");
					};
					move.volatileStatus = 'ingrain';
					break;
				case 11:
					move.onTryHit = function() {
						this.add('-message', "The present was a makeover!");
					};
					var boosts = {};
					var possibleBoosts = ['atk','def','spa','spd','spe','accuracy','evasion'].randomize();
					boosts[possibleBoosts[0]] = 1;
					boosts[possibleBoosts[1]] = -1;
					boosts[possibleBoosts[2]] = -1;
					move.boosts = boosts;
					break;
				case 12:
					move.onTryHit = function() {
						this.add('-message', "The present was psychic powers!");
					};
					move.volatileStatus = 'telekinesis';
					break;
				case 13:
					move.onTryHit = function() {
						this.add('-message', "The present was fatigue!");
					};
					move.volatileStatus = 'mustrecharge';
					break;
				case 14:
				case 15:
					move.onTryHit = function() {
						this.add('-message', "The present was a snowball hit!");
					};
					move.category = 'Ice';
					move.basePower = 250;
					break;
				case 16:
					move.onTryHit = function() {
						this.add('-message', "The present was a crafty shield!");
					};
					move.volatileStatus = 'craftyshield';
					break;
				case 17:
					move.onTryHit = function() {
						this.add('-message', "The present was an electrification!");
					};
					move.volatileStatus = 'electrify';
					break;
				case 18:
					move.onTryHit = function() {
						this.add('-message', "The present was an ion deluge!");
					};
					move.volatileStatus = 'iondeluge';
					break;
				}
			}
		}
	},
	// Winter's Wont, January 2014
	{
		name: "[Seasonal] Winter's Wont",
		section: 'Seasonal',
		mod: 'inverse',
		gameType: 'doubles',
		team: 'randomSeasonalFF',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			this.add('-message', "新年快乐");
		},
		onModifyMove: function(move) {
			if (move.id === 'explosion') move.name = 'Firecrackers';
			else if (move.type === 'Fire') move.name = 'Fireworks';
		}
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Middle Cup",
		section: "OM of the Month",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Illegal', 'Eviolite'],
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		}
	},
	{
		name: "CAP",
		section: "Other Metagames",

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "Alphabet Cup",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Swoobat'],
		validateTeam: function(team, format) {
			var letters = {};
			var letter = '';
			for (var i = 0; i < team.length; i++) {
				letter = Tools.getTemplate(team[i]).species.slice(0,1).toUpperCase();
				if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
				letters[letter] = 1;
			}
		}
	},
	{
		name: "(Almost) Any Ability XY",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Slaking', 'Regigigas', 'Archeops', 'Prankster + Smeargle', 'Sturdy + Shedinja', 'ignoreillegalabilities'],
		validateSet: function(set) {
			var bannedAbilities = {
				'Simple': 1,
				'Contrary': 1,
				'Fur Coat': 1,
				'Huge Power': 1,
				'Pure Power': 1,
				'Speed Boost': 1,
				'Shadow Tag': 1,
				'Arena Trap': 1,
				'Parental Bond': 1,
				'Wonder Guard': 1
			};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability "' + set.ability + '" is banned on Pokémon that do not naturally have it.'];
			}
		}
	},
	{
		name: "Swapmons",
		section: "Other Metagames",
		
		mod: 'swapmons',
		ruleset: ['Pokemon', 'Team Preview', 'Standard']
	},
	{
		name: "Offstat XY",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Stealth Rock', 'Spikes', 'Toxic Spikes'],
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			var statDiff = template.baseStats['atk'] - template.baseStats['spa'];
			if (Math.abs(statDiff) < 50) return [set.species + ' does not have a difference between attacking stats of 50 or greater.'];
			var attackerType = statDiff > 0 ? 'Special':'Physical';
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.category !== attackerType && move.category !== 'Status') return [set.species + ' can only use ' + attackerType + ' attacks.'];
			}
		}
	},
	{
		name: "TechniciMons XY",
		section: "Other Metagames",

		mod: 'technicimonsxy',
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Heat Crash', 'Heavy Slam', 'Ignore Illegal Abilities',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Deoxys', 'Deoxys-Attack',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Darkrai',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'],
		validateSet: function(set) {
			if (set.species === 'Regigigas') set.ability = 'Slow Start';
			else if (set.species === 'Slaking') set.ability = 'Truant';
			else if (set.species === 'Ditto') set.ability = 'Imposter';
			else set.ability = 'Technician';
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.basePower && move.basePower >= 100) return ['The move ' + move.name + ' is banned because it has 100+ Base Power.'];
			}
		}
	},
	{
		name: "Sketchmons XY",
		section: "Other Metagames",

		mod: 'sketchmonsxy',
		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "MegaMons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Gengar-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Mewtwonite-Y', 'Mewtwonite-X', 'Gengarite']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "Sky Battles",
		section: "Other Metagames",

		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			// Banned items
			'Soul Dew', 'Iron Ball', 'Pinsirite', 'Gengarite',
			// Banned moves
			'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure',
			'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heavy Slam',
			'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller',
			'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
			// Banned Pokémon
			// Illegal Flying-types
			'Pidgey', 'Spearow', "Farfetch'd", 'Doduo', 'Dodrio', 'Hoothoot', 'Natu', 'Murkrow', 'Delibird', 'Taillow', 'Starly', 'Chatot',
			'Shaymin-Sky', 'Pidove', 'Archen', 'Ducklett', 'Rufflet', 'Vullaby', 'Fletchling', 'Hawlucha',
			// Illegal Levitators
			'Gastly', 'Gengar',
			// Illegal Megas
			'Pinsir-Mega', 'Gengar-Mega',
			// Illegal Ubers
			'Arceus-Flying', 'Giratina', 'Giratina-Origin', 'Ho-Oh', 'Lugia', 'Rayquaza', 'Yveltal'
		]
	},
	{
		name: "Inverse Battle",
		section: "Other Metagames",

		mod: 'inverse',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: [
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Darkrai',
			'Deoxys-Attack',
			'Gengarite',
			'Giratina', 'Giratina-Origin',
			'Ho-Oh',
			'Kangaskhanite',
			'Kyogre',
			'Kyurem-Black',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Palkia',
			'Rayquaza',
			'Shaymin-Sky',
			'Soul Dew',
			'Xerneas',
			'Yveltal',
			'Zekrom'
		]
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
			'Destiny Bond', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Memento', 'Perish Song', 'Selfdestruct',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		]
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['OU', 'Same Type Clause']
	},
	{
		name: "STABmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Slaking', 'Regigigas']
	},
	{
		name: "Averagemons",
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Soul Dew', 'Thick Club', 'Deepseatooth', 'Deepseascale', 'Light Ball', 'Mawilite', 'Medichamite', 'Eviolite', 'Shedinja', 'Smeargle', 'Huge Power', 'Pure Power']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 5] Glitchmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased'],
		mimicGlitch: true
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	// {
	// 	name: "[Gen 5] CAP Cawmodore Playtest",
	// 	section: "BW2 Singles",

	// 	mod: 'gen5',
	// 	ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
	// 	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', "Tomohawk", "Necturna", "Mollux", "Aurumoth", "Malaconda", "Syclant", "Revenankh", "Pyroak", "Fidgit", "Stratagem", "Arghonaut", "Kitsunoh", "Cyclohm", "Colossoil", "Krilowatt", "Voodoom"]
	// },
	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",
		column: 2,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU','BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function(set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],

		column: 2
	},
	{
		name: "[Gen 4] UU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] Hackmons",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 3] Hackmons",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 2] OU (beta)",
		section: "Past Generations",

		mod: 'gen2',
		debug: true,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon']
	},
	{
		name: "[Gen 1] OU (beta)",
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon']
	}

];
