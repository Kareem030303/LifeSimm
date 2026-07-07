let player = {
    name:"",
    country:"",
    age:0,
    money:1000,
    personality:[],
    story:[]
};


let jobs=[
"Teacher",
"Doctor",
"Chef",
"Engineer",
"Business Owner",
"Athlete",
"Programmer",
"Construction Worker"
];


let traits=[
"Kind",
"Creative",
"Competitive",
"Funny",
"Brave",
"Hardworking"
];


function random(array){
return array[Math.floor(Math.random()*array.length)];
}


function startLife(){

player.name=document.getElementById("name").value;
player.country=document.getElementById("country").value;

player.personality=[
random(traits),
random(traits)
];


let mom=random(jobs);
let dad=random(jobs);

let siblings=Math.floor(Math.random()*4);


player.family={
mom:mom,
dad:dad,
siblings:siblings
};


player.story.push(
"Born in "+player.country+
" with parents who work as "+
mom+" and "+dad+"."
);


document.getElementById("life").style.display="block";


updateScreen();

}


function ageUp(){

player.age++;


let event="";


if(player.age==5){
event="Started elementary school.";
}

else if(player.age==13){
event="Entered middle school and made new friends.";
}

else if(player.age==18){
event="Graduated high school and chose a career path.";
}

else{
event="Had a normal year and learned new skills.";
}


player.story.push(
"Age "+player.age+": "+event
);


player.money+=Math.floor(Math.random()*500);


updateScreen();

}



function updateScreen(){

document.getElementById("profile").innerHTML=
player.name+
" | Age "+player.age+
" | "+player.country;


document.getElementById("family").innerHTML=
"👨 Dad Job: "+player.family.dad+
"<br>👩 Mom Job: "+player.family.mom+
"<br>👶 Siblings: "+player.family.siblings;


document.getElementById("stats").innerHTML=
"💰 Money: $"+player.money+
"<br>🧠 Personality: "+
player.personality.join(", ");



document.getElementById("story").innerHTML=
player.story.join("<br><br>");

}
