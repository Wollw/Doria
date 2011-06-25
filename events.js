function writeLog(str)
{
	if (cmap == undefined)
        	$("#gameLog").prepend('>\t '+str);
	else
        	$("#gameLog").prepend(cmap.name+'>\t '+str);
}

function gameEvent(text)
{
	this.text = text;
	this.triggered = null;
	this.exec = function(f)
	{
		if(!this.triggered)
		{
			writeLog(this.text+'\n');
			this.triggered = f;
		}
	}
}
