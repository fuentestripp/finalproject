var x = 300;
var y = 300;
let circlewidth = 50;
let circleheight = 50;


var colorx = 125;
var colory = 125;
var colorz = 125;

var songnumber = 12;
let bg;

var song = []
var video = []
var lyrics = []

function preload(){
  font = loadFont('Montserrat-Italic.ttf');

  lisa = loadImage("lisa.gif")

  song[0] = loadSound("music/feelingsarefatal.mp3")
  song[1] = loadSound("music/slowdancing.mp3")
  song[2] = loadSound("music/promdress.mp3")
  song[3] = loadSound("music/swinglynn.mp3")
  song[4] = loadSound("music/dreamgirl.mp3")
  
  song[5] = loadSound("music/likeafool.mp3")
  song[6] = loadSound("music/onlyyou.mp3")
  song[7] = loadSound("music/letithappen.mp3")
  song[8] = loadSound("music/applause.mp3")
  song[9] = loadSound("music/callmemaybe.mp3")
  
  song[10] = loadSound("music/imlikeabird.mp3")
  song[11] = loadSound("music/whereisthelove.mp3")
  song[12] = loadSound("music/mrbrightside.mp3")
  song[13] = loadSound("music/theremedy.mp3")
  song[14] = loadSound("music/themiddle.mp3")
  
  song[15] = loadSound("music/creep.mp3")
  song[16] = loadSound("music/byebyebye.mp3")
  song[17] = loadSound("music/heartshapedbox.mp3")
  song[18] = loadSound("music/iwantitthatway.mp3")
  song[19] = loadSound("music/mynameis.mp3")
  
  song[20] = loadSound("music/whathaveidone.mp3")
  song[21] = loadSound("music/madworld.mp3")
  song[22] = loadSound("music/tellittomyheart.mp3")
  song[23] = loadSound("music/imeltwithyou.mp3")
  song[24] = loadSound("music/whipit.mp3")


  
  
}

function setup() { 
  canvas = createCanvas(600, 600);
  bg = loadImage("hot.png")
  slider = createSlider(0, 1, 0.5, 0.01)
  song[songnumber].loop();


  textFont(font);
  textSize(15);
  strokeWeight(5)
  stroke(random(255),random(255),random(255));
  noFill();
  rect(10, 10, 590, 590)
} 

function draw() { 
  background(colorx, colory, colorz, [255]);

  
  noStroke();
  
    song[songnumber].setVolume(slider.value())
  

  //image(dancing, 10, 10); // draw the video frame to canvas
  image(lisa,x-25,y-25,circlewidth,circleheight);

  
  //x = x + 1;
 
  if (x >= 600){
   x = 0; 
  }
  
  if (songnumber === 0){
    songname = "Feelings are Fatal by mxmtoon"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("Fun fact: I could have gone to high school with mxmtoon!", width/2, 33);
    text("Her high school was 5 minutes away from my house in San Francisco.", width/2, 50);
    text("We have mutual friends!", width/2, 75);

    textLeading(15);
    text("I'm always sad \nAnd I'm always lonely\nBut I can't tell you\nThat I'm breaking slowly", width/2, 200)




  } else if (songnumber === 1){
    songname = "Slow Dancing in the Dark by Joji"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("Have I cried to this song? I guess we'll never know!", width/2, 33);

    textLeading(15);
    text("Give me reasons we should be complete\nYou should be with him, I can't compete\nYou looked at me like I was someone else, oh well\nCan't you see? (Can't you see?)\nI don't wanna slow dance (I don't want to slow dance)\nIn the dark\nDark", width/2, 200)

  }else if (songnumber === 2){
    songname = "Prom Dress by mxmtoon"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("My most played song of 2020, with 352 plays!", width/2, 33);

    textLeading(15);
    text("I'm sitting here, crying in my prom dress\nI'd be the prom queen if crying was a contest\nMakeup is running down, feelings are all around\nHow did I get here? I need to know", width/2, 200)
    

  }else if (songnumber === 3){
    songname = "Swing Lynn by Twin Cabins"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("I've been caught with my camera on dancing to this song.", width/2, 33);
    text("I hope you dance too!", width/2, 50);

    text("Hey there little honey won't you groove\nI've been trying all night to dance with you\nHey there little lonely won't you stay\nI said 'I would rather die than feel this pain'\nYou said 'I know I feel very much the same\nBut I am afraid that I don't know, knowing is not my thing'", width/2, 200);


  }else if (songnumber === 4){
    songname = "Dræm Girl by No Vacation"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("This song SCREAMS California to me. I don't know what it is!", width/2, 33);

    text("I know I said some things\nI know it'll never work\nBut when I close my eyes\nYou know it doesn't hurt", width/2, 200);


  }else if (songnumber === 5){
    songname = "Like a Fool by Keira Knightley"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("My celebrity crush is Keira Knightley. I hope my mom doesn't see this.", width/2, 33);

    text("And you have broken every single fuckin' rule\nAnd I have loved you like a fool", width/2, 300)

  }else if (songnumber === 6){
    songname = "Only You by Ceelo Green"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("I'm waiting to do Karaoke to this song with someone", width/2, 33);

    text("Only you could stop the bleeding, give me what I'm needing\nTell me so my heart can heal, only you", width/2, 300)


  }else if (songnumber === 7){
    songname = "Let it Happen by Tame Impala"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("Wait. Just wait. Like 3 minutes in. Then put this song on MAX and JUST DANCE!!", width/2, 33);

    text("Baby, now I'm ready, moving on\nOh, but maybe I was ready all along\nOh, I'm ready for the moment and the sound\nOh, but maybe I was ready all along", width/2, 300)


  }else if (songnumber === 8){
    songname = "Applause by Lady Gaga"
    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("Remember when Lady Gaga was THE scene of the music industry?", width/2, 33);

    text("Put your hands up, make 'em touch, touch", width/2, 300)



  }else if (songnumber === 9){
    songname = "Call Me Maybe"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("You're lying if you don't know the words to the chorus.", width/2, 33);

    text("You know the words to this song. Don't even try it.", width/2, 300)



  }else if (songnumber === 10){
    songname = "I'm Like A Bird by Nelly Furtado"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("This one holds dear to my heart. I miss the early 2000s.", width/2, 33);

    text("I'm like a bird, I'll only fly away\nI don't know where my soul is\nI don't know where my home is", width/2, 400)


  }else if (songnumber === 11){
    songname = "Where is the Love? by the coolest band of the 2000s"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("I can't wait for these guys to come back from their 'brief hiatus' in 2010", width/2, 33);

    text("People killing, people dying\nchildren hurt and you get em crying", width/2, 400);



  }else if (songnumber === 12){
    songname = "Mr. Brightside by The Killers"
    
    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("Welcome to DJ Tripp!", width/2, 33);


  }else if (songnumber === 13){
    songname = "The Remedy by Jason Mraz"

    text("The remedy is the experience.\nThis is a dangerous liaison", width/2, 400);



  }else if (songnumber === 14){
    songname = "The Middle by Jimmy Eat World"

    text("It just takes some time\nLittle girl, you're in the middle of the ride\nEverything, everything will be just fine\nEverything, everything will be all right, all right", width/2, 400);



  }else if (songnumber === 15){
    songname = "Creep by Radiohead"

    text("I'M A CREEP\nI'M A WEIRDO\nWHAT THE HELL AM I DOING HERE", width/2, 200);


  }else if (songnumber === 16){
    songname = "JT TAKE IT AWAY"

    text("I just want to tell you that I've had enough\nIt might sound crazy but it ain't no lie\nBaby bye bye bye", width/2, 200);

    


  }else if (songnumber === 17){
    songname = "Heart Shaped Box by Nirvana"

    text("HEY\nWAIT\nI got a new complaint", width/2, 200);


  }else if (songnumber === 18){
    songname = "If you haven't heard this song before..."

    text("AIN'T NOTHING BUT A HEARTACHE\nAIN'T NOTHING BUT A MISTAKE", width/2, 200);


  }else if (songnumber === 19){
    songname = "My Name Is by B-Rabbit"

    text("What?\nWho?\nChicka Chicka", width/2, 200);


  }else if (songnumber === 20){
    songname = "What Have I Done to Deserve This? by Petshop Boys"

    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    text("There were too many 80s songs to fit in this section.", width/2, 33);
    text("We live in heartbreak.", width/2, 50);

    text("I bought you drinks, I brought you flowers\nI read you books and talked for hours\nEvery day, so many drinks\nSuch pretty flowers, so tell me\nWhat have I, what have I, what have I done to deserve this?\nWhat have I, what have I, what have I done to deserve this?\nWhat have I, what have I, what have I", width/2, 200);



  }else if (songnumber === 21){
    songname = "Mad World by Tears for Fears"

    text("All around me are familiar faces\nWorn out places\nWorn out faces", width/2, 200);



  }else if (songnumber === 22){
    songname = "TELL IT TO MY HEART"

    text("TELL ME I'M THE ONLY ONE\nIS THIS REALLY LOVE OR IS JUST A GAME????", width/2, 200);


  }else if (songnumber === 23){
    songname = "Do I secretly wish I lived in an 80s movie? I'll never tell. But yes."

    text("I'll stop the world and melt with you\nYou've seen the difference and it's getting better all the time\nThere's nothing you and I won't do\nI'll stop the world and melt with you\n", width/2, 200);


  }else if (songnumber === 24){
    songname = "Whip It by DEVO"

    text("    Now whip it\nInto shape\nShape it up\nGet straight\nGo forward\nMove ahead\nTry to detect it\nIt's not too late\nTo whip it\nWhip it good\n", width/2, 200);


  }


  fill(random(255),random(255),random(255));
  textAlign(CENTER);
  text(songname, width/2, 15);


  text("Press Control to Pause and Option to Play!", width/2, 585);

  //  
}


function keyPressed() {
  if (y >= 0 && keyCode === UP_ARROW) {
    y = y - 100;
    colory = colory + 80;
    song[songnumber].stop();
    songnumber = songnumber - 5;
    song[songnumber].loop();
    
    
    
  } else if (y <= 600 && keyCode === DOWN_ARROW) {
   y = y + 100;
   colory = colory - 80;
   song[songnumber].stop();
   songnumber = songnumber + 5;
   song[songnumber].loop();
    
    
  }
  if (x >= 0 && keyCode === LEFT_ARROW) {
    x = x - 90;
    colorx = colorx + 80;
    colorz = colorz - 80;
    song[songnumber].stop();
    songnumber = songnumber - 1;
    song[songnumber].loop();
    
  } else if (x <= 600 && keyCode === RIGHT_ARROW) {
    x = x + 90;
    colorx = colorx - 80;
    colorz = colorz + 80;
    song[songnumber].stop();
    songnumber = songnumber + 1;
    song[songnumber].loop();
    
  } else if(keyCode === CONTROL){
    song[songnumber].pause();
  } else if (keyCode === OPTION) {
    song[songnumber].play();

  } else if(songnumber < 0){
    songnumber == 0
    song[songnumber].loop();

  } else if (songnumber > 24){
    songnumber == 24
    song[songnumber].loop();

  }
  console.log(x, y)

}


  