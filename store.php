<?php
	
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
	
	$inDots = $_REQUEST['AllDots'];
	
	$AllDots = explode(";",$inDots);
	for ($i = 0; $i<count($AllDots); $i++) {
		$AllDots[$i] = explode(":",$AllDots[$i]);
	}
	
	$customNames = explode("; ",$_REQUEST['CustomNames']);
	for ($i = 0; $i<count($customNames); $i++) {
		$customNames[$i] = explode(" => ",$customNames[$i]);
		if (array_key_exists(1,$customNames[$i])) {
			$customNames[$i][1] = rtrim($customNames[$i][1]);
		};
	}
	
	$parser = new Parser;
	
	$store = [
		'fluff' => [
			'clan' => rtrim($_REQUEST['clan']),
			'character' => '',
			'player' => '',
			'chronicle' => '',
			'nature' => '',
			'demeanor' => '',
			'concept' => '',
			'generation' => 13,
			'sire' => '',
			'title' => '',
			'game' => 'Vampire: the Masquerade'
		], //End of Fluff(T1)
		'attributes' => [
			'Physical', 
			'Physical' => [
				'Strength','Strength' => [ // 0
					'checked' => rtrim($AllDots[0][1])
				],
				'Dexterity','Dexterity' => [ // 1
					'checked' => rtrim($AllDots[1][1])
				],
				'Stamina','Stamina' => [ // 2
					'checked' => rtrim($AllDots[2][1])
				]
			], //End of Physical(T2)
			'Social', 
			'Social' => [
				'Charisma','Charisma' => [ // 3
					'checked' => rtrim($AllDots[3][1])
				],
				'Manipulation','Manipulation' => [ // 4
					'checked' => rtrim($AllDots[4][1])
				],
				'Appearance','Appearance' => [ // 5
					'checked' => rtrim($AllDots[5][1])
				]
			],  //End of Social(T2)
			'Mental',
			'Mental' => [
				'Perception','Perception' => [ // 6
					'checked' => rtrim($AllDots[6][1])
				],
				'Intelligence','Intelligence' => [ // 7
					'checked' => rtrim($AllDots[7][1])
				],
				'Wits','Wits' => [ // 8
					'checked' => rtrim($AllDots[8][1])
				]
			] //End of Mental(T2)
		], //End of Attributes(T1)
		'abilities' => [
			'Talents', 'Talents' => [
				'Alertness','Alertness' => [
					'checked' => rtrim($AllDots[9][1])
				],
				'Athletics','Athletics' => [
					'checked' => rtrim($AllDots[10][1])
				],
				'Brawl','Brawl' => [
					'checked' => rtrim($AllDots[11][1])
				],
				'Dodge','Dodge' => [
					'checked' => rtrim($AllDots[12][1])
				],
				'Empathy','Empathy' => [
					'checked' => rtrim($AllDots[13][1])
				],
				'Expression','Expression' => [
					'checked' => rtrim($AllDots[14][1])
				],
				'Intimidation','Intimidation' => [
					'checked' => rtrim($AllDots[15][1])
				],
				'Leadership','Leadership' => [
					'checked' => rtrim($AllDots[16][1])
				],
				'Streetwise','Streetwise' => [
					'checked' => rtrim($AllDots[17][1])
				],
				'Subterfuge','Subterfuge' => [
					'checked' => rtrim($AllDots[18][1])
				]
			], //End of Talents(T2)
			'Skills', 'Skills' => [
				'Animal Ken','Animal Ken' => [
					'checked' => rtrim($AllDots[19][1])
				],
				'Crafts','Crafts' => [
					'checked' => rtrim($AllDots[20][1])
				],
				'Drive','Drive' => [
					'checked' => rtrim($AllDots[21][1])
				],
				'Etiquette','Etiquette' => [
					'checked' => rtrim($AllDots[22][1])
				],
				'Firearms','Firearms' => [
					'checked' => rtrim($AllDots[23][1])
				],
				'Melee','Melee' => [
					'checked' => rtrim($AllDots[24][1])
				],
				'Performance','Performance' => [
					'checked' => rtrim($AllDots[25][1])
				],
				'Security','Security' => [
					'checked' => rtrim($AllDots[26][1])
				],
				'Stealth','Stealth' => [
					'checked' => rtrim($AllDots[27][1])
				],
				'Survival','Survival' => [
					'checked' => rtrim($AllDots[28][1])
				]
			], //End of Skills(T2)
			'Knowledges', 'Knowledges' => [
				'Academics','Academics' => [
					'checked' => rtrim($AllDots[29][1])
				],
				'Computer','Computer' => [
					'checked' => rtrim($AllDots[30][1])
				],
				'Finance','Finance' => [
					'checked' => rtrim($AllDots[31][1])
				],
				'Investigation','Investigation' => [
					'checked' => rtrim($AllDots[32][1])
				],
				'Law','Law' => [
					'checked' => rtrim($AllDots[33][1])
				],
				'Linguistics','Linguistics' => [
					'checked' => rtrim($AllDots[34][1])
				],
				'Medicine','Medicine' => [
					'checked' => rtrim($AllDots[35][1])
				],
				'Occult','Occult' => [
					'checked' => rtrim($AllDots[36][1])
				],
				'Politics','Politics' => [
					'checked' => rtrim($AllDots[37][1])
				],
				'Science','Science' => [
					'checked' => rtrim($AllDots[38][1])
				]
			] //End of Knowledges(T2)
		], //End of Abilities(T1)
		'advantages' => [
			'Disciplines','Disciplines' => [
				'in1','in1' => [
					'checked' => rtrim($AllDots[39][1]),
					'name' => rtrim($customNames[0][1])
				],
				'in2','in2' => [
					'checked' => rtrim($AllDots[40][1]),
					'name' => rtrim($customNames[1][1])
				],
				'in3','in3' => [
					'checked' => rtrim($AllDots[41][1]),
					'name' => rtrim($customNames[2][1])
				],
				'ou1','ou1' => [
					'checked' => rtrim($AllDots[42][1]),
					'name' => rtrim($customNames[3][1])
				],
				'ou2','ou2' => [
					'checked' => rtrim($AllDots[43][1]),
					'name' => rtrim($customNames[4][1])
				],
				'ou3','ou3' => [
					'checked' => rtrim($AllDots[44][1]),
					'name' => rtrim($customNames[5][1])
				]
			], //End of Disciplines(T2)
			'Backgrounds','Backgrounds' => [
				'bk1','bk1' => [
					'checked' => rtrim($AllDots[45][1]),
					'name' => rtrim($customNames[6][1])
				],
				'bk2','bk2' => [
					'checked' => rtrim($AllDots[46][1]),
					'name' => rtrim($customNames[7][1])
				],
				'bk3','bk3' => [
					'checked' => rtrim($AllDots[47][1]),
					'name' => rtrim($customNames[8][1])
				],
				'bk4','bk4' => [
					'checked' => rtrim($AllDots[48][1]),
					'name' => rtrim($customNames[9][1])
				],
				'bk5','bk5' => [
					'checked' => rtrim($AllDots[49][1]),
					'name' => rtrim($customNames[10][1])
				],
				'bk6','bk6' => [
					'checked' => rtrim($AllDots[50][1]),
					'name' => rtrim($customNames[11][1])
				]
			], //End of Backgrounds(T2)
			'Virtues','Virtues' => [
				'Conscience','Conscience' => [
					'checked' => rtrim($AllDots[51][1])
				],
				'Self Control','Self Control' => [
					'checked' => rtrim($AllDots[52][1])
				],
				'Courage','Courage' => [
					'checked' => rtrim($AllDots[53][1])
				]
			] //End of Virtues (T2)
		], //End of Advantages(T1)
		'humanity' => [
			'checked' => rtrim($AllDots[54][1])
		],
		'willpower' => [
			'checked' => rtrim($AllDots[55][1])
		],
		'blood' =>  20 - $AllDots[56][1]
	];
	
	$a = serialize($store);

	$ud = new PDO('mysql:host=localhost;dbname=vampires','prince','letmebeyourruler');
	//$sql = 'INSERT INTO  `vampires`.`vampireList` (`Name`,'Data') VALUES ($basic['fluff']['character'],serialize($basic));;
	
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