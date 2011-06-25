var cmap;

function World(worldName,lx,ly,buildNum)
{
	
	this.name = worldName;;
	this.lx = lx;
	this.ly = ly;
	this.sx = null;
	this.sy = null;
	this.map = new Array(ly);
		for (i = 0; i < lx; ++i) { this.map[i] = new Array(lx); }
	this.map[-1] = new Array(buildNum);
		for (i = 0; i < lx; ++i) { this.map[-1][i] = new Map(); }
}

function Map()
{
        this.tile = null;
	this.pass = null;
	this.x = null;
	this.y = null;
	this.trg = new Array(10);
		for (i = 0; i < 10; ++i) { this.trg[i] = new Array(10); }
	this.name = null;
	this.desc = null;
	this.event = null;
}

function initWorld(w)
{
	world = w;
	for (y = 0; y < world.ly; y++)
	{
		for (x = 0; x < world.lx; x++)
		{
			world.map[x][y] = new Map();
		}	
	}
	$('title').text(w.name);
	$("#banner").text(w.name);
}
