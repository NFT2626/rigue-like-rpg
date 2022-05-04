var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: 'rgba(0,0,0,0)',
	physics: {
		default: arcade,
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload ()
{
	this.load.image('dirt', 'img/dirt.png');
}

function create ()
{
	//this.add.image(0, 0, 'dirt');
	this.add.image(400, 300, 'dirt');
}
function update ()
{

}
