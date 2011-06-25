function initDoriaEvents()
{
	// Your Cabin
	doria.map[-1][0].event = new Array(10);
	doria.map[-1][0].event[0] = new gameEvent("The word \"Elbereth\" is carved into the wooden floor.");

	// Home Meadow
	doria.map[0][1].event = new Array(10);
	doria.map[0][1].event[0] = new gameEvent("The sun brightly shines upon the earth.  It appears you have overslept.");

	// Forest Path
	doria.map[0][0].event = new Array(10);
	doria.map[0][0].event[0] = new gameEvent("Ahh... The great outdoors!");
	doria.map[0][0].event[1] = new gameEvent("The woods are as beautiful as ever.");

	// Bridge across the Stream	
	doria.map[2][0].event = new Array(1);
	doria.map[2][0].event[0] = new gameEvent("The sound of running water calms your mind.");

}
