<div id="dotCounter">0</div>

<?php
	global $basic_vampire;
	$nav = new navbar($basic_vampire['fluff']['game']);
?>
<div id='phases'>
	<div id="phasesName">Phases / Instructions</div>
	<div id="phasesBody">
		<p>The highlighted phase is the one you are currently on. Follow the instructions within that group.</p>
		
		<div id="Step01" class="current"><!-- Clan Select /-->
			Step 1
			<div>
				Fill in the text boxes, then select your Clan<br />
				<?php echo $nav->showClan(); ?>
			</div>
		</div>
		<div id="Step02" class="next"><!-- PSM 1 /-->
			Step 2
			<div>
				Choose an attribute group to be PRIMARY (gets 7 dots added):
				<div>
					<div class="phy" id="phy1"><ul><li>Physical</li></ul></div>
					<div class="soc" id="soc1"><ul><li>Social</li></ul></div>
					<div class="men" id="men1"><ul><li>Mental</li></ul></div>
				</div><br />
				... then fill in that many dots.
			</div>
		</div>
		<div id="Step03" class="next"><!-- PSM 2 /-->
			Step 3
			<div>
				Choose an attribute group to be SECONDARY (gets 5 dots added):
				<div>
					<div class="phy" id="phy2"><ul><li>Physical</li></ul></div>
					<div class="soc" id="soc2"><ul><li>Social</li></ul></div>
					<div class="men" id="men2"><ul><li>Mental</li></ul></div>
				</div><br />
				... then fill in that many dots.
			</div>
		</div>
		<div id="Step04" class="next"><!-- PSM 3 /-->
			Step 4
			<div>
				Choose an attribute group to be TERTIARY (gets 3 dots added):
				<div>
					<div class="phy" id="phy3"><ul><li>Physical</li></ul></div>
					<div class="soc" id="soc3"><ul><li>Social</li></ul></div>
					<div class="men" id="men3"><ul><li>Mental</li></ul></div>
				</div><br />
				... then fill in that many dots.
			</div>
		</div>
		<div id="Step05" class="next"><!-- TSK 1 /-->
			Step 5
			<div>
				Choose an ability group to be PRIMARY (gets 7 dots added):
				<div>
					<div class="tal" id="tal1"><ul><li>Talents</li></ul></div>
					<div class="ski" id="ski1"><ul><li>Skills</li></ul></div>
					<div class="kno" id="kno1"><ul><li>Knowledges</li></ul></div>
				</div><br />
				... then fill in that many dots.
			</div>
		</div>
		<div id="Step06" class="next"><!-- TSK 2 /-->
			Step 6
			<div>
				Choose an ability group to be PRIMARY (gets 7 dots added):
				<div>
					<div class="tal" id="tal2"><ul><li>Talents</li></ul></div>
					<div class="ski" id="ski2"><ul><li>Skills</li></ul></div>
					<div class="kno" id="kno2"><ul><li>Knowledges</li></ul></div>
				</div><br />
				... then fill in that many dots.
			</div>
		</div>
		<div id="Step07" class="next"><!-- TSK 3 /-->
			Step 7
			<div>
				Choose an ability group to be PRIMARY (gets 7 dots added):
				<div>
					<div class="tal" id="tal3"><ul><li>Talents</li></ul></div>
					<div class="ski" id="ski3"><ul><li>Skills</li></ul></div>
					<div class="kno" id="kno3"><ul><li>Knowledges</li></ul></div>
				</div><br />
				... then fill in that many dots.
			</div>
		</div>
		<div id="Step08" class="next"><!-- In-Clan Disciplines /-->
			Step 8
			<div>
				Place dots in in-clan disciplines (total of 3 dots at this stage).
			</div>
		</div>
		<div id="Step09" class="next"><!-- Backgrounds /-->
			Step 9
			<div>
				Place dots in Backgrounds (total of 5 dots at this stage).
				<?php echo $nav->showBackgrounds(); ?>
				
			</div>
		</div>
		<div id="Step10" class="next"><!-- Virtues /-->
			Step 10
			<div>
				Place dots in Virtues (total of 7 dots at this stage).
			</div>
		</div>
		<div id="Step11" class="next"><!-- Freebies /-->
			Step 11
			<div>
				Spend Freebie Points (15 available).<br />
				To override the freebies you have, change this value:
				<input type="text" id="freebiePoints" value="15"><input type="submit" id="freebieUpdate" value="update">
			</div>
		</div>
		<div id="Step12" class="next"><!-- XP /-->
			Step 12
			<div>
				Spend XP (0 available).<br />
				To override the XP you have, change this value:
				<input type="text" id="xp" value="15"><input type="submit" id="xpUpdate" value="update">
			</div>
		</div>
	</div>
</div>

Please input your character below. The flyout on the side will tell you what step you're on.