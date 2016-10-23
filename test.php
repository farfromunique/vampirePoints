<?php
require_once 'classes/DotRating.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="/css/sheet.css">
	<link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<title>Freebies / XP checker for V:tM characters</title>
</head>
<body>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="page-header">
				<h1>
					Freebies / XP checker for V:tM characters
				</h1>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-3">
			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingOne">
						<h4 class="panel-title">
							<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
							   aria-controls="collapseOne">
								Step 1: Basic Information
							</a>
						</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
						<div class="panel-body">
							Fill in the "Basic Information" text boxes.
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingTwo">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
							   aria-expanded="false" aria-controls="collapseTwo">
								Step 2: Clan
							</a>
						</h4>
					</div>
					<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
						<div class="panel-body">
							Select your Clan from this list:<br/>
							<select name="clan" id="clanSelect">
								<option>Select your Clan</option>
								<option>- Camarilla -</option>
								<option>Brujah</option>
								<option>Gangrel</option>
								<option>Malkavian</option>
								<option>Nosferatu</option>
								<option>Toreador</option>
								<option>Tremere</option>
								<option>Ventrue</option>
								<option>- Sabbat -</option>
								<option>Lasombra</option>
								<option>Tzimisce</option>
								<option>- Independant -</option>
								<option>Assimite</option>
								<option>Giovanni</option>
								<option>Ravnos</option>
								<option>Setite</option>
								<option>- Extinct -</option>
								<option>Salubri</option>
							</select>
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingThree">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
							   aria-expanded="false" aria-controls="collapseThree">
								Step 3: Primary Attributes
							</a>
						</h4>
					</div>
					<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
						<div class="panel-body">
							Choose your Primary attribute group. This group gets 7 additional dots.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-9">
			<div class="row description">
				<div class="col-md-12">
					<div class="well well-sm text-center">Basic Information</div>
				</div>
				<div class="row information">
					<div class="col-md-4">
						<form class="" role="form">
							<input type="text" class="form-control" id="charName" placeholder="Character Name">
							<input type="text" class="form-control" id="player" placeholder="Player Name">
							<input type="text" class="form-control" id="chronicle" placeholder="Chronicle">
						</form>
					</div>
					<div class="col-md-4">
						<form class="" role="form">
							<input type="text" class="form-control" id="nature" placeholder="Nature">
							<input type="text" class="form-control" id="demeanor" placeholder="Demeanor">
							<input type="text" class="form-control" id="concept" placeholder="Concept">
						</form>
					</div>
					<div class="col-md-4">
						<form class="" role="form">
							<input type="text" class="form-control" id="generation" placeholder="Generation">
							<input type="text" class="form-control" id="sire" placeholder="Sire">
							<input type="text" class="form-control" id="Title" placeholder="Title">
						</form>
					</div>
				</div>
			</div>
			<div class="row description">
				<div class="col-md-12">
					<div class="well well-sm text-center">Attributes</div>
				</div>
			</div>
			<div class="row attributes">
				<div class="col-md-4 physical">
					<?php echo DotRating::Display('Strength', 5, ['checked', '', '', '', 'disabled']); ?>
					<?php echo DotRating::Display('Dexterity', 5, ['checked', '', '', '', 'disabled']); ?>
					<?php echo DotRating::Display('Stamina', 5, ['checked', '', '', '', 'disabled']); ?>
				</div>
				<div class="col-md-4 social">
					<?php echo DotRating::Display('Charisma', 5, ['checked', '', '', '', 'disabled']); ?>
					<?php echo DotRating::Display('Manipulation', 5, ['checked', '', '', '', 'disabled']); ?>
					<?php echo DotRating::Display('Appearance', 5, ['checked', '', '', '', 'disabled']); ?>
				</div>
				<div class="col-md-4 mental">
					<?php echo DotRating::Display('Perception', 5, ['checked', '', '', '', 'disabled']); ?>
					<?php echo DotRating::Display('Intelligence', 5, ['checked', '', '', '', 'disabled']); ?>
					<?php echo DotRating::Display('Wits', 5, ['checked', '', '', '', 'disabled']); ?>
				</div>
			</div>
			<div class="row description">
				<div class="col-md-12">
					<div class="well well-sm text-center">Abilities</div>
				</div>
			</div>
			<div class="row abilities">
				<div class="col-md-4">
					<?php echo DotRating::Display('Alertness', 5); ?>
					<?php echo DotRating::Display('Athletics', 5); ?>
					<?php echo DotRating::Display('Brawl', 5); ?>
					<?php echo DotRating::Display('Dodge', 5); ?>
					<?php echo DotRating::Display('Empathy', 5); ?>
					<?php echo DotRating::Display('Expression', 5); ?>
					<?php echo DotRating::Display('Intimidation', 5); ?>
					<?php echo DotRating::Display('Leadership', 5); ?>
					<?php echo DotRating::Display('Streetwise', 5); ?>
					<?php echo DotRating::Display('Subterfuge', 5); ?>
				</div>
				<div class="col-md-4">
					<?php echo DotRating::Display('Animal Ken', 5); ?>
					<?php echo DotRating::Display('Crafts', 5); ?>
					<?php echo DotRating::Display('Drive', 5); ?>
					<?php echo DotRating::Display('Etiquette', 5); ?>
					<?php echo DotRating::Display('Firearms', 5); ?>
					<?php echo DotRating::Display('Melee', 5); ?>
					<?php echo DotRating::Display('Performance', 5); ?>
					<?php echo DotRating::Display('Security', 5); ?>
					<?php echo DotRating::Display('Stealth', 5); ?>
					<?php echo DotRating::Display('Survival', 5); ?>
				</div>
				<div class="col-md-4">
					<?php echo DotRating::Display('Academics', 5); ?>
					<?php echo DotRating::Display('Computer', 5); ?>
					<?php echo DotRating::Display('Finance', 5); ?>
					<?php echo DotRating::Display('Investigation', 5); ?>
					<?php echo DotRating::Display('Law', 5); ?>
					<?php echo DotRating::Display('Linguistics', 5); ?>
					<?php echo DotRating::Display('Medicine', 5); ?>
					<?php echo DotRating::Display('Occult', 5); ?>
					<?php echo DotRating::Display('Politics', 5); ?>
					<?php echo DotRating::Display('Science', 5); ?>
				</div>
			</div>
			<div class="row description">
				<div class="col-md-12">
					<div class="well well-sm text-center">Advantages</div>
				</div>
			</div>
			<div class="row advantages">
				<div class="col-md-4">
					<?php echo DotRating::Display('InClan1', 5); ?>
					<?php echo DotRating::Display('InClan2', 5); ?>
					<?php echo DotRating::Display('InClan3', 5); ?>
					<?php echo DotRating::Display('OutClan1', 5); ?>
					<?php echo DotRating::Display('OutClan2', 5); ?>
					<?php echo DotRating::Display('OutClan3', 5); ?>
				</div>
				<div class="col-md-4">
					<?php echo DotRating::Display('Background1', 5); ?>
					<?php echo DotRating::Display('Background2', 5); ?>
					<?php echo DotRating::Display('Background3', 5); ?>
					<?php echo DotRating::Display('Background4', 5); ?>
					<?php echo DotRating::Display('Background5', 5); ?>
					<?php echo DotRating::Display('Background6', 5); ?>
				</div>
				<div class="col-md-4">
					<?php echo DotRating::Display('Conscience', 5); ?>
					<?php echo DotRating::Display('Self Control', 5); ?>
					<?php echo DotRating::Display('Courage', 5); ?>
				</div>
			</div>
			<div class="row">
				<div class="col-md-offset-1 col-md-8">
					<?php echo DotRating::Display('Humanity', 10, ['checked', '', '', '', '', '', '', '', '', '', '']); ?>
					<?php echo DotRating::Display('Willpower', 10, ['checked', '', '', '', '', '', '', '', '', '', '']); ?>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container-fluid">
	<div class="row attributes">
		
		<div class="mental col-sm-4">
			<div class="row">
			
			</div>
			<div class="row">
			
			</div>
			<div class="row">
			
			</div>
		</div>
	</div>
	<div class="row abilities">
		<div class="physical col-sm-4"></div>
		<div class="social col-sm-4"></div>
		<div class="mental col-sm-4"></div>
	</div>
	<div class="row">
		<div class="disciplines col-sm-4"></div>
		<div class="backgrounds col-sm-4"></div>
		<div class="virtues col-sm-4"></div>
	</div>
	<div class="row">
		<div class="humanity col-md-offset-3 col-md-6"></div>
	</div>
	<div class="row">
		<div class="willpower col-md-offset-3 col-md-6"></div>
	</div>
	<div class="row">
		<div class="bloodpool col-md-offset-3 col-md-6"></div>
	</div>
</div>
<div class="hidden">
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
	        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
	        crossorigin="anonymous"></script>
</div>
</body>
</html>