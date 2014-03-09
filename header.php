<?php
spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});
?>
<html>
	<head>
		<meta charset='UTF-8'>
		<link rel="stylesheet" type="text/css" href="sheet.css">
		<title>Freebies / XP checker for V:tM characters</title>
		<script type="text/javascript" src="ACWPD.js"></script>
		<script type="text/javascript" src="main.js"></script>
		<script type="text/javascript" src="sheet.js"></script>
	</head>
	<body>
		<div id="dotCounter">0</div>
<?php
	require_once("navbar.php");
?>
	
	Please input your character below. The flyout on the side will tell you what step you're on.