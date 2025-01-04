window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  if(localStorage.getItem("noteApp")){

	GetPlayer().SetVar("noteApp",JSON.parse(localStorage.getItem("noteApp")));
	var noteStr = "";
	var notes = JSON.parse(localStorage.getItem("noteApp"));
	for(var i = 0 ; i < notes.length ; i++){
		noteStr += notes[i] + "\n";
	}
	GetPlayer().SetVar("notes",noteStr);
}else{
	var noteApp = [];
	localStorage.setItem("noteApp",JSON.stringify(noteApp));
}
}

window.Script2 = function()
{
  var noteApp = JSON.parse(localStorage.getItem("noteApp"));
//var notes = [];
//var noteStr = GetPlayer().GetVar("notes");

noteApp.push(GetPlayer().GetVar("note_data"));
localStorage.setItem("noteApp",JSON.stringify(noteApp));
var noteStr = "";
for(var i = 0 ; i < noteApp.length ; i++){
	noteStr += noteApp[i]+'\n';
}
GetPlayer().SetVar("notes",noteStr);
}

window.Script3 = function()
{
  var noteApp = JSON.parse(localStorage.getItem("noteApp"));
//var notes = [];
//var noteStr = GetPlayer().GetVar("notes");

noteApp.push(GetPlayer().GetVar("note_data"));
localStorage.setItem("noteApp",JSON.stringify(noteApp));
var noteStr = "";
for(var i = 0 ; i < noteApp.length ; i++){
	noteStr += noteApp[i]+'\n';
}
GetPlayer().SetVar("notes",noteStr);
}

window.Script4 = function()
{
  var noteStr = GetPlayer().GetVar("notes");
var notes = noteStr.split("\n");
var str = "";
for(var i = 0 ; i < notes.length ; i++){
	if(notes[i] == GetPlayer().GetVar("word")){
		str += (i+1) + " - " + notes[i] + "\n";
	}
}
GetPlayer().SetVar("writeHere",str);
}

};
