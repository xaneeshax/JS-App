
var form_div = document.getElementById("user-input");
var answer_input = document.getElementById("user-guess");
var submit_button = document.getElementById("workit");
var remark_h2 = document.getElementById("remark");
var incorrect_ul = document.getElementById("incorrect");

var right = 0;
var wrong = 0;

function Flag(name, continent, top30, x=360, y=240) {
    this.name = name;
    this.continent = continent;
    this.top30 = top30;
    this.x = x;
    this.y = y;

}

flag1 = new Flag('Finland', 'Europe', false); 
flag2 = new Flag('France', 'Europe', true); 
flag3 = new Flag('Greece', 'Europe', false); 
flag4 = new Flag('India', 'Asia', true); 
flag5 = new Flag('Russia', 'Europe', true); 
flag6 = new Flag('Canada', 'North America', true, "480"); 
flag7 = new Flag('America', 'North America', true, "480");
flag8 = new Flag('Mexico', 'North America', false); 
flag9 = new Flag('Brazil', 'South America', false); 
flag10 = new Flag('Argentina', 'South America', false); 
flag11 = new Flag('Chile', 'South America', false); 
flag12 = new Flag('South Africa', 'Africa', false); 
flag13 = new Flag('Egypt', 'Africa', false);
flag14 = new Flag('Germany', 'Europe', false, "400"); 
flag15 = new Flag('Italy', 'Europe', false, "480"); 
flag16 = new Flag('Portugal', 'Europe', false, "318"); 
flag17 = new Flag('Belarus', 'Europe', false, "480"); 
flag18 = new Flag('Poland', 'Europe', false, "376");
flag19 = new Flag('Iceland', 'Europe', false, "400"); 
flag20 = new Flag('Switzerland', 'Europe', false, "240");
flag21 = new Flag('China', 'Asia', true, "381"); 
flag22 = new Flag('Australia', 'Australia', true, "480");    

flags = [flag1, flag2, flag3, flag4, flag5, flag6, flag7,flag8, flag9, flag10, 
    flag11, flag12, flag13, flag14, flag15, flag16, flag17, flag18, flag19, flag20,
    flag21, flag22];


var country_counts = {
    'Europe': [0,0],
    'North America': [0,0],
    'South America': [0,0],
    'Asia': [0,0],
    'Australia': [0,0],
    'Africa': [0,0]
};

let incorrect = [];

function report_incorrect(incorrect) {
    if (incorrect.length > 0) {
        document.getElementById("incorrect").innerHTML = "Incorrectly Labeled Countries:";
        incorrect.forEach(element => {
            var label_name = document.createElement("li");
            label_name.innerHTML = element;
            incorrect_ul.appendChild(label_name);
            
        });
    }
}



let index = Math.floor(flags.length * Math.random())
let country_name = flags[index].name.toLowerCase()
document.getElementById("pic-name").src = "images/" + country_name + ".png";
document.getElementById("pic-name").width = flags[index].x;
document.getElementById("pic-name").height = flags[index].y;

answer_input.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        var guess = answer_input.value;
        if (guess.toLowerCase() === country_name) {
            remark_h2.classList.add('green-glow');
            setTimeout(() => { remark_h2.classList.remove('green-glow'); }, 200);
            right += 1;
            document.getElementById("score-correct").innerHTML = right;
        } else {
            var current_country = country_name.charAt(0).toUpperCase() + country_name.slice(1);
            remark_h2.classList.add('red-glow');
            setTimeout(() => { remark_h2.classList.remove('red-glow'); }, 200);
            wrong += 1;
            document.getElementById("score-incorrect").innerHTML = wrong;
            incorrect.push(current_country);
        }
        answer_input.value="";

        flags.splice(index, 1);

        if (flags.length == 0) {
            remark_h2.innerHTML = "You Completed the Game! Score: " + right + "/" + (right + wrong);
            report_incorrect(incorrect);
        } else {
            index = Math.floor(flags.length * Math.random())
            country_name = flags[index].name.toLowerCase()
            document.getElementById("pic-name").src = "images/" + country_name + ".png";
            document.getElementById("pic-name").width = flags[index].x;
            document.getElementById("pic-name").height = flags[index].y;
        }
    }
});

