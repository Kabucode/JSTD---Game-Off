var g_resources = [];
var towerTypes =  {
	"fire": 1,
	"ice":2,
	"cannon":3,
	"spike":4	
}
var mapArray = new Array();
var gameApp = {
	
	onload: function() 
	{
		if(!me.video.init('gameapp', 640, 480, false, 1.0))
		{
			alert("No HTML5 Canvas Support");
			return;
		}
		
		me.audio.init("mp3,off");
		me.loader.onload = this.loaded.bind(this);
		me.loader.preload(g_resources);
		me.state.change(me.state.LOADING);
		
	},
	
	loaded: function() 
	{
		me.state.set(me.state.PLAY, new PlayScreen());
		me.state.change(me.state.PLAY);
	}
	
}

var PlayScreen = me.ScreenObject.extend({
	
	onResetEvent: function() 
	{
		
	},
	
	onDestroyEvent: function() 
	{
		
	}
	
});

$(document).ready(function()
{
	gameInit();
});



function gameInit()
{
	gameApp.onload();
	
	// Going to have to set up some kind of menu here

}

function mapInit(mapSelection)
{
	// Probably have a map array with info elsewhere
	// Here we'll have logic for obtaining the necessary information about the map
	
	// Initiate a 200x200 (this may change) grid of map squares
	for (var i = 0; i<200; i++)
	{
		// Lots of map creation logic is going to go here
	}
}


// I'm thinking this can be set up as a base class for towers and other types of towers
// can be prototyped from this class
function Tower(damage, speed, range, image)
{
	this.Damage = 0;
	this.Speed = 0;
	this.Range = 0;
	this.Image = new Image();
	
	this.attack = function()
	{
		
	}
	
}

// This can be a base class for enemies, and other types of enemies can be prototyped
// from this class, or it may be possible to have all enemies work using just this class
function Enemy()
{
	this.Damage = 0;
	this.Speed = 0;
	this.Image = new Image();
}

// Placeholder for game code that I know is going to need to be in the main game loop.
// I may not actually even use a separate function that's called during the game loop
// It just depends on how much code is located in the game loop
function gameLoop()
{
	
}

// I want to make several distinctive steps in the game loop:
// 1. Fire turrets
// 2. Move enemies
// 3. Environmental stuff (like animated objects in the environment)
// 4. Anything else
// These steps can be abstracted out into different functions, so there's not a clusterfuck 
// of code all in one place.

// This is where all of the code for moving enemies (and doing damage to the player when
// an enemy reaches a certain point) will be.
function moveEnemies()
{
	/*
	for(number of enemies on screen)
	{
		// Gonna need some tricky, weird pathing shit here
	}*/
}


function placeTower(coordX, coordY, tower)
{
	
}

function cloneTower(tower)
{
	
}

