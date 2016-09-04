<?php
	
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
	
	$parser = new Parser;
	
	$inDots = $_REQUEST['AllDots'];
	
	$AllDots = $parser->stringToArray($inDots);
	
	$customNames = $parser->stringToArray($_REQUEST['CustomNames']);
	
	$fluff = $parser->stringToArray($_REQUEST['fluff']);
	
	$store = [
		'fluff' => [
			'clan' => trim($_REQUEST['clan']),
			'character' => $fluff['character'],
			'player' => $fluff['player'],
			'chronicle' => $fluff['chronicle'],
			'nature' => $fluff['nature'],
			'demeanor' => $fluff['demeanor'],
			'concept' => $fluff['concept'],
			'generation' => $fluff['generation'],
			'sire' => $fluff['sire'],
			'title' => $fluff['title'],
			'game' => 'Vampire: the Masquerade'
		], //End of Fluff(T1)
		'attributes' => [
			'Physical', 
			'Physical' => [
				'Strength','Strength' => [
					'checked' => rtrim($AllDots['stren'])
				],
				'Dexterity','Dexterity' => [
					'checked' => rtrim($AllDots['dexte'])
				],
				'Stamina','Stamina' => [
					'checked' => rtrim($AllDots['stami'])
				]
			], //End of Physical(T2)
			'Social', 
			'Social' => [
				'Charisma','Charisma' => [
					'checked' => rtrim($AllDots['chari'])
				],
				'Manipulation','Manipulation' => [
					'checked' => rtrim($AllDots['manip'])
				],
				'Appearance','Appearance' => [
					'checked' => rtrim($AllDots['appea'])
				]
			],  //End of Social(T2)
			'Mental',
			'Mental' => [
				'Perception','Perception' => [
					'checked' => rtrim($AllDots['perce'])
				],
				'Intelligence','Intelligence' => [
					'checked' => rtrim($AllDots['intel'])
				],
				'Wits','Wits' => [
					'checked' => rtrim($AllDots['wits'])
				]
			] //End of Mental(T2)
		], //End of Attributes(T1)
		'abilities' => [
			'Talents', 'Talents' => [
				'Alertness','Alertness' => [
					'checked' => rtrim($AllDots['alert'])
				],
				'Athletics','Athletics' => [
					'checked' => rtrim($AllDots['athle'])
				],
				'Brawl','Brawl' => [
					'checked' => rtrim($AllDots['brawl'])
				],
				'Dodge','Dodge' => [
					'checked' => rtrim($AllDots['dodge'])
				],
				'Empathy','Empathy' => [
					'checked' => rtrim($AllDots['empat'])
				],
				'Expression','Expression' => [
					'checked' => rtrim($AllDots['expre'])
				],
				'Intimidation','Intimidation' => [
					'checked' => rtrim($AllDots['intim'])
				],
				'Leadership','Leadership' => [
					'checked' => rtrim($AllDots['leade'])
				],
				'Streetwise','Streetwise' => [
					'checked' => rtrim($AllDots['stree'])
				],
				'Subterfuge','Subterfuge' => [
					'checked' => rtrim($AllDots['subte'])
				]
			], //End of Talents(T2)
			'Skills', 'Skills' => [
				'Animal Ken','Animal Ken' => [
					'checked' => rtrim($AllDots['anima'])
				],
				'Crafts','Crafts' => [
					'checked' => rtrim($AllDots['craft'])
				],
				'Drive','Drive' => [
					'checked' => rtrim($AllDots['drive'])
				],
				'Etiquette','Etiquette' => [
					'checked' => rtrim($AllDots['etiqu'])
				],
				'Firearms','Firearms' => [
					'checked' => rtrim($AllDots['firea'])
				],
				'Melee','Melee' => [
					'checked' => rtrim($AllDots['melee'])
				],
				'Performance','Performance' => [
					'checked' => rtrim($AllDots['perfo'])
				],
				'Security','Security' => [
					'checked' => rtrim($AllDots['secur'])
				],
				'Stealth','Stealth' => [
					'checked' => rtrim($AllDots['steal'])
				],
				'Survival','Survival' => [
					'checked' => rtrim($AllDots['survi'])
				]
			], //End of Skills(T2)
			'Knowledges', 'Knowledges' => [
				'Academics','Academics' => [
					'checked' => rtrim($AllDots['acade'])
				],
				'Computer','Computer' => [
					'checked' => rtrim($AllDots['compu'])
				],
				'Finance','Finance' => [
					'checked' => rtrim($AllDots['finan'])
				],
				'Investigation','Investigation' => [
					'checked' => rtrim($AllDots['inves'])
				],
				'Law','Law' => [
					'checked' => rtrim($AllDots['law'])
				],
				'Linguistics','Linguistics' => [
					'checked' => rtrim($AllDots['lingu'])
				],
				'Medicine','Medicine' => [
					'checked' => rtrim($AllDots['medic'])
				],
				'Occult','Occult' => [
					'checked' => rtrim($AllDots['occul'])
				],
				'Politics','Politics' => [
					'checked' => rtrim($AllDots['polit'])
				],
				'Science','Science' => [
					'checked' => rtrim($AllDots['scien'])
				]
			] //End of Knowledges(T2)
		], //End of Abilities(T1)
		'advantages' => [
			'Disciplines','Disciplines' => [
				'in1','in1' => [
					'checked' => rtrim($AllDots['in1']),
					'name' => rtrim($customNames['in1'])
				],
				'in2','in2' => [
					'checked' => rtrim($AllDots['in2']),
					'name' => rtrim($customNames['in2'])
				],
				'in3','in3' => [
					'checked' => rtrim($AllDots['in3']),
					'name' => rtrim($customNames['in3'])
				],
				'ou1','ou1' => [
					'checked' => rtrim($AllDots['ou1']),
					'name' => rtrim($customNames['ou1'])
				],
				'ou2','ou2' => [
					'checked' => rtrim($AllDots['ou2']),
					'name' => rtrim($customNames['ou2'])
				],
				'ou3','ou3' => [
					'checked' => rtrim($AllDots['ou3']),
					'name' => rtrim($customNames['ou3'])
				]
			], //End of Disciplines(T2)
			'Backgrounds','Backgrounds' => [
				'bk1','bk1' => [
					'checked' => rtrim($AllDots['bk1']),
					'name' => rtrim($customNames['bk1'])
				],
				'bk2','bk2' => [
					'checked' => rtrim($AllDots['bk2']),
					'name' => rtrim($customNames['bk2'])
				],
				'bk3','bk3' => [
					'checked' => rtrim($AllDots['bk3']),
					'name' => rtrim($customNames['bk3'])
				],
				'bk4','bk4' => [
					'checked' => rtrim($AllDots['bk4']),
					'name' => rtrim($customNames['bk4'])
				],
				'bk5','bk5' => [
					'checked' => rtrim($AllDots['bk5']),
					'name' => rtrim($customNames['bk5'])
				],
				'bk6','bk6' => [
					'checked' => rtrim($AllDots['bk6']),
					'name' => rtrim($customNames['bk6'])
				]
			], //End of Backgrounds(T2)
			'Virtues','Virtues' => [
				'Conscience','Conscience' => [
					'checked' => rtrim($AllDots['virtu'])
				],
				'Self Control','Self Control' => [
					'checked' => rtrim($AllDots['self '])
				],
				'Courage','Courage' => [
					'checked' => rtrim($AllDots['coura'])
				]
			] //End of Virtues (T2)
		], //End of Advantages(T1)
		'humanity' => [
			'checked' => rtrim($AllDots['human'])
		],
		'willpower' => [
			'checked' => rtrim($AllDots['willp'])
		],
		'blood' =>  20 - $AllDots['blood']
	];
	
	$a = serialize($store);

	$ud = new PDO('mysql:host=localhost;dbname=vampires','prince','letmebeyourruler');
	
	$basicVamp = $ud->prepare('INSERT INTO  `vampires`.`vampireList` (`Name`,`Data`) VALUES (:name,:data)');
	if (!$basicVamp->bindparam(":name",$store['fluff']['character'])) {echo 'bind :name as `' . $store['fluff']['character'] . '` failed!'; };
	if (!$basicVamp->bindparam(":data",$a)) {echo 'bind :data as `' . $a . '` failed!'; };
	if (!$basicVamp->execute()) {echo 'Query failed';};
	
	$newest = $ud->prepare('SELECT Max(`UID`) FROM `vampireList`');
	$char = 1000;
	if ($newest->execute()) {$char = $newest->fetchColumn();}
	
	$host  = $_SERVER['HTTP_HOST'];
	$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
	$extra = 'show.php?character=' . $char;
	header("Location: http://$host$uri/$extra");
	exit;
?>