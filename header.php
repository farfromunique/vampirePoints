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