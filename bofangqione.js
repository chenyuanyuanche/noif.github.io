function show(div)
{
    	 
    	 div.style.backgroundImage="url(bofangqi/images/beijing_03.png)";
    	
 }
 function hide(div)
 {
 	 	div.style.backgroundImage="";
 }
function toggleSound(){
	 var music=document.getElementById("bofang");
	  var toggle=document.getElementById("toggle");
	 if(bofang.paused)
	 {
		bofang.play();
		toggle.innerHTML="暂停";
	 }
	else{
		bofang.pause();
		toggle.innerHTML="播放";
	 }
    }
window.onload=function()
{

	var aDjust=document.getElementById('adjust');
	aDjust.style.display="block";
	var aDjusta=document.getElementById('adjusta');
	var aDjustb=document.getElementById('adjustb');
	var aDjustc=document.getElementById('adjustc');
	var aDjustoa=document.getElementById('adjustoa');
	var aDjustob=document.getElementById('adjustob');
	var aDjustoc=document.getElementById('adjustoc');
	var aDjustod=document.getElementById('adjustod');
	var boxMinWidth=610;
	var boxMinHeight=1000;
	aDjustoa.onmouseover=function()
	{
		aDjusta.style.display="none";
		aDjustb.style.display="none";
		aDjustc.style.display="none";
		aDjust.style.display="block";
	}
	
	aDjustob.onmouseover=function()
	{
		aDjusta.style.display="block";
		aDjustb.style.display="none";
		aDjustc.style.display="none";
		aDjust.style.display="none";
	}
    aDjustoc.onmouseover=function()
	{
		aDjusta.style.display="none";
		aDjustb.style.display="block";
		aDjustc.style.display="none";
		aDjust.style.display="none";
	}
	aDjustod.onmouseover=function()
	{
		aDjusta.style.display="none";
		aDjustb.style.display="none";
		aDjustc.style.display="block";
		aDjust.style.display="none";
	}
	//放大缩小
	var Min=document.getElementById('min');
	var Max=document.getElementById('max');
	var Box=document.getElementById('box');
	var Huanyuan=document.getElementById('huanyuan');
	var Close=document.getElementById('close');
	Max.onclick=function()
	{
       Box.style.top=Box.style.left=0;
       Box.style.width=document.documentElement.clientWidth-2+'px';
       Box.style.height=document.documentElement.clientHeight-2+'px';
       Max.style.display='none';
       Huanyuan.style.display='block';
	}
	Huanyuan.onclick=function()
	{
		Box.style.width=boxMinWidth+'px';
		Box.style.height=boxMinHeight+'px';
		Box.style.left=(document.documentElement.clientWidth-Box.offsetWidth)/2+'px';
		
		this.style.display='none';
		Max.style.display='block';
	}
	Min.onclick=Close.onclick=function()
	{
		Box.style.display='none';
		var oA = document.createElement("a");
		oA.class=oA.className = "open";
		oA.href = "javascript:;";
		oA.title = "还原";
		document.body.appendChild(oA);
		oA.onclick = function ()
		{
			Box.style.display = "block";
			document.body.removeChild(this);
			this.onclick = null;
		};
	}


}

