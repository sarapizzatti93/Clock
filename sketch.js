var state=true

function setup() {
  createCanvas(800,600);
  angleMode(DEGREES); 
  colorMode(RGB)
}

function clockHand(timeValue,x,y,y1,col,t,colt){

stroke(col)
strokeWeight(20)
line(x,height/2,x,timeValue)
strokeWeight(3)
stroke(colt)
line(x-10,timeValue-y,x+50,timeValue-y)

noStroke();
fill(colt)
textFont('Righteous');
textSize(20)
textAlign(RIGHT)
text(t,x+50,timeValue-y1);

}

function draw() {
if(state==true){    
background(240,247,218)
var s=map(second(),0,60,height/2,height/4)
var m=map(minute(),0,60,height/2,height/4)
var h=map(hour(),0,24,height/2,height/4)


clockHand(s,width/4,12,15,color(35,77,32),second(),color(54,128,45));
    
clockHand(m,width/2,12,15,color(54,128,45),minute(),color(119,171,89));
    
clockHand(h,3*width/4,12,15,color(119,171,89),hour(),color(201,223,138));

fill(35,77,32)
textFont('Righteous');
textSize(20)
textAlign(CENTER)
text("Day or night? click here!",width/2,3*height/4);
    
fill(54,128,45)    
text("S",width/4,height/2+30)        
fill(119,171,89)    
text("M",width/2,height/2+30)       
fill(201,223,138)    
text("H",3*width/4,height/2+30) 

}else{
background(3,22,52)    
var s1=map(second(),0,60,height/2,3*height/4)
var m1=map(minute(),0,60,height/2,3*height/4)
var h1=map(hour(),0,24,height/2,3*height/4)


clockHand(s1,width/4,-12,-10,color(48,24,96),second(),color(72,48,120));
    
clockHand(m1,width/2,-12,-10,color(96,72,120),minute(),color(144,96,144));
    
clockHand(h1,3*width/4,-12,-10,color(163,145,209),hour(),color(174,169,211));   

fill(174,169,211)
textFont('Righteous');
textSize(20)
textAlign(CENTER)
text("Return in the daytime! click here!",width/2,height/4); 
    
fill(72,48,120)    
text("S",width/4,height/2-20)        
fill(144,96,144)    
text("M",width/2,height/2-20)       
fill(174,169,211)    
text("H",3*width/4,height/2-20) 

}
}

function mousePressed(){
    if(state==true){
          state=false;
    }else{
        state=true;
    }
}