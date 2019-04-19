
// required javascript code

function getValue(e)
{
	
	var prev = document.getElementById('viewer').value; // fetching prev value

	if(e=='clear')
	{
		document.getElementById('viewer').value = 0;
		return ;
	}
	if(e=='x')
	{
		prev = prev.slice(0,prev.length-1);
		if(prev.length == 0)
		{
			prev = 0;
		}
		document.getElementById('viewer').value = prev;
		return ;
	}
	if(e=='=')
	{
		var res = eval(prev);
		document.getElementById('viewer').value = res;
		return ;
	}

	if(prev==0)
	{
		document.getElementById('viewer').value = e;
	}
	else
	{
		document.getElementById('viewer').value = prev + e;
	}
}

