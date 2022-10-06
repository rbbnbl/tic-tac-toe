var count = 0;
var where;
var blueLog = [];
var redLog = [];

//winning combinations
const all = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const combo1 = ['one', 'two', 'three'];
const combo2 = ['four', 'five', 'six'];
const combo3 = ['seven', 'eight', 'nine'];
const combo4 = ['one', 'four', 'seven'];
const combo5 = ['two', 'five', 'eight'];
const combo6 = ['three', 'six', 'nine'];
const combo7 = ['one', 'five', 'nine'];
const combo8 = ['three', 'five', 'seven'];

function over() {
    if (count%2 === 0){
        document.getElementById(where).innerHTML = '<p id="crossopacity"></p>';
    } else {
        document.getElementById(where).innerHTML = '<p id="noughtsopacity"></p>';
    }
}

function out() {
    if (count%2 === 0){
        document.getElementById(where).innerHTML = '<p id="crossopacityfadeaway"></p>';
    } else {
        document.getElementById(where).innerHTML = '<p id="noughtsopacityfadeaway"></p>';
    }
}

function counter() {
    document.getElementById(where).disabled = true;
    count++;
    return colorButton(count);
}

function colorButton(num) {
    if (num%2 === 0){
    document.getElementById(where).innerHTML = '<p id="noughts"></p>';
    blueLog.push(where);
    blueLog.sort();
    } else {
    document.getElementById(where).innerHTML = '<p id="cross"></p>';
    redLog.push(where);
    redLog.sort();
    };

    gameOver();
};

function backgroundReset() {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i <9; i++) {
        var button = buttons[i];
        button.innerHTML = '<p id=""></p>';
    }
}

function enableButtons() {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i <9; i++) {
        var button = buttons[i];
        button.disabled = false; 
    }
}

// winning sequence

function winningCombo(combo, player){
    //winners

    for (i= 0; i<3; i++) {
        var winningHTML = document.getElementById(combo.at(i)).innerHTML;
        
        if (winningHTML === '<p id="cross"></p>') {
            document.getElementById(combo.at(i)).innerHTML = '<p id="winningcross"></p>'
        } else if (winningHTML === '<p id="noughts"></p>') {
            document.getElementById(combo.at(i)).innerHTML = '<p id="winningnought"></p>';
        }
    }

    //losers

    var allstring = all.toString();

    for(i=0; i<3; i++) {
        var checker = combo.at(i);
        var allstring = allstring.replace(`${checker},`, "");
    }

    allstringarray = allstring.split(",");

    for (i= 0; i<6; i++) {
        var currentHTML = document.getElementById(allstringarray.at(i)).innerHTML;
        
        if (currentHTML === '<p id="cross"></p>') {
            document.getElementById(allstringarray.at(i)).innerHTML = '<p id="losingcross"></p>'
        } else if (currentHTML === '<p id="noughts"></p>') {
            document.getElementById(allstringarray.at(i)).innerHTML = '<p id="losingnought"></p>';
        }
    }
}
var crossScore = 0;
var noughtScore = 0;
function score() {
    crossScore++;
    noughtScore++;
    console.log(crossScore)
    document.getElementById("crossScore").textContent = `${crossScore}`;
    document.getElementById("noughtScore").textContent = `${noughtScore}`;
}

function reset() {
    redLog = [];
    blueLog = [];
    count = 0;
    backgroundReset();
    enableButtons();
}

//winning checker

function gameOver() {
        if (combo1.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo1, "cross");
        } else if (combo2.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo2, "cross");
        } else if (combo3.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo3, "cross");
        } else if (combo4.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo4, "cross");
        } else if (combo5.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo5, "cross");
        } else if (combo6.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo6, "cross");
        } else if (combo7.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo7, "cross");
        } else if (combo8.every(value => { 
            return redLog.includes(value)})) {
            winningCombo(combo8, "cross");
        } else if (combo1.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo1, "nought");
        } else if (combo2.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo2, "nought");
        } else if (combo3.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo3, "nought");
        } else if (combo4.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo4, "nought");
        } else if (combo5.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo5, "nought");
        } else if (combo6.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo6, "nought");
        } else if (combo7.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo7, "nought");
        } else if (combo8.every(value => { 
            return blueLog.includes(value)})) {
            winningCombo(combo8, "nought");
        }  
        //alert("noughts wins");
        //redLog = [];
        //blueLog = [];
        //backgroundReset();
        //enableButtons();
        //count = 0;
          else if (count===9) {
        alert("nobody wins");
        backgroundReset();
        enableButtons();
        redLog = [];
        blueLog = [];
        count = 0;
    }
}

//event listeners
document.getElementById("one").addEventListener("click", function(){ where = "one"; counter()});
document.getElementById("one").addEventListener("mouseover", function(){ where = "one"; over()});
document.getElementById("one").addEventListener("mouseout", function(){ where = "one"; out()});
document.getElementById("two").addEventListener("click", function(){ where = "two"; counter()});
document.getElementById("two").addEventListener("mouseover", function(){ where = "two"; over()});
document.getElementById("two").addEventListener("mouseout", function(){ where = "two"; out()});
document.getElementById("three").addEventListener("click", function(){ where = "three"; counter()});
document.getElementById("three").addEventListener("mouseover", function(){ where = "three"; over()});
document.getElementById("three").addEventListener("mouseout", function(){ where = "three"; out()});
document.getElementById("four").addEventListener("click", function(){ where = "four"; counter()});
document.getElementById("four").addEventListener("mouseover", function(){ where = "four"; over()});
document.getElementById("four").addEventListener("mouseout", function(){ where = "four"; out()});
document.getElementById("five").addEventListener("click", function(){ where = "five"; counter()});
document.getElementById("five").addEventListener("mouseover", function(){ where = "five"; over()});
document.getElementById("five").addEventListener("mouseout", function(){ where = "five"; out()});
document.getElementById("six").addEventListener("click", function(){ where = "six"; counter()});
document.getElementById("six").addEventListener("mouseover", function(){ where = "six"; over()});
document.getElementById("six").addEventListener("mouseout", function(){ where = "six"; out()});
document.getElementById("seven").addEventListener("click", function(){ where = "seven"; counter()});
document.getElementById("seven").addEventListener("mouseover", function(){ where = "seven"; over()});
document.getElementById("seven").addEventListener("mouseout", function(){ where = "seven"; out()});
document.getElementById("eight").addEventListener("click", function(){ where = "eight"; counter()});
document.getElementById("eight").addEventListener("mouseover", function(){ where = "eight"; over()});
document.getElementById("eight").addEventListener("mouseout", function(){ where = "eight"; out()});
document.getElementById("nine").addEventListener("click", function(){ where = "nine"; counter()});
document.getElementById("nine").addEventListener("mouseover", function(){ where = "nine"; over()});
document.getElementById("nine").addEventListener("mouseout", function(){ where = "nine"; out()});

//reset button
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("reset").addEventListener("click", score);
