var MAX_TILES = 42;
var canvas;
var ctx;
var gfx = new Array(MAX_TILES);
var player;

function character(wx,wy,x,y,gfx)
{
        this.wx=wx;
        this.wy=wy;
        this.x=x;
        this.y=y;
        this.tile=gfx;
	this.inv = new Array(4);
}

function initGfx()
{
        for (i=0;i<=MAX_TILES;i++)
        {
                gfx[i]= new Image();   // Create new Image
                gfx[i].src= 'gfx/'+i+'.png';
        }
}

function procKey(evt)
{
	var moved = null;
        switch (evt.keyCode)
        {
		// cases 37-40 are for movement
                case 37:
                        if (player.x-1 < 0 && world.map[cmap.x-1][cmap.y].name)
                        {
                                cmap = world.map[cmap.x-1][cmap.y];
                                player.x = cmap.pass[0].length;
				moved = true;
                        }
                        if (cmap.pass[player.y][player.x-1] == true )
			{
                                player.x--;
				moved = true;
			}
			// Check for special game events
        		if (cmap.trg[player.x][player.y] && moved)
               			 cmap.trg[player.x][player.y]();
                        break;
                case 38:
                        if (player.y-1 < 0 && world.map[cmap.x][cmap.y-1].name)
                        {
                                cmap = world.map[cmap.x][cmap.y-1];
                                player.y = cmap.pass.length-1;
				moved = true;
                        }
                        else if (cmap.pass[player.y-1][player.x] == true )
			{
                                player.y--;
				moved = true;
			}
			// Check for special game events
        		if (cmap.trg[player.x][player.y] && moved)
               			 cmap.trg[player.x][player.y]();
                        break;
                case 39:
                        if (player.x+1 > cmap.pass[0].length-1 && world.map[cmap.x+1][cmap.y].name)
                        {
                                cmap = world.map[cmap.x+1][cmap.y];
                                player.x = 0;
				moved = true;
                        }
                        else if (cmap.pass[player.y][player.x+1] == true )
			{
                                player.x++;
				moved = true;
			}
			// Check for special game events
        		if (cmap.trg[player.x][player.y] && moved)
               			 cmap.trg[player.x][player.y]();
                        break;
                case 40:
                        if (player.y+1 > cmap.pass.length-1 && world.map[cmap.x][cmap.y+1].name)
                        {
                                cmap = world.map[cmap.x][cmap.y+1];
                                player.y = 0;
				moved = true;
                        }
                        else if (cmap.pass[player.y+1][player.x] == true )
			{
                                player.y++;
				moved = true;
			}
			// Check for special game events
        		if (cmap.trg[player.x][player.y] && moved)
               			 cmap.trg[player.x][player.y]();
                        break;
        }
}

function init()
{
        canvas = document.getElementById("canvas");
        if (canvas.getContext)
        {
                ctx = canvas.getContext("2d");
        }

	// Setup the world
		var scale = 2.0;
		canvas.width *= scale;
		canvas.height *= scale;
		ctx.scale(scale,scale);
        initGfx();
        initDoria();
        cmap = world.map[player.wx][player.wy];

        window.addEventListener('keydown',procKey,true);

        return setInterval(main, 10);
}

function draw()
{
	// Draw the tiles of the current map
        for (y=0;y<cmap.tile.length;y++)
        {
                for (x=0;x<cmap.tile[0].length;x++)
                {
                        ctx.drawImage(gfx[cmap.tile[y][x]],x*16,y*16);
                }
        }

	// Draw Player
	ctx.drawImage(gfx[player.tile],player.x*16,player.y*16);

	// Update game text
	$("#mapZone").html(cmap.zone);
	$("#mapName").html(cmap.name);
}

function main()
{
	player.wx = cmap.x;
	player.wy = cmap.y;

	$("#debug").text("player:"+player.wx+","+player.wy+" map:"+cmap.x+","+cmap.y);
	draw();
}
