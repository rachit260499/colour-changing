var numsquares = 6;
var colors=generaterandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
   easybtn.classList.add("selected");
   hardbtn.classList.remove("selected");
   numsquares = 3;
   colors=generaterandomcolor(numsquares);
   pickedcolor = pickcolor();
   colordisplay.textContent = pickedcolor;
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
        squares[i].style.backgroundColor=colors[i];
       }
       else{
           squares[i].style.display="none";
       }
    
   }

});
hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares = 6
    colors=generaterandomcolor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor=colors[i];
       
        
            squares[i].style.display="block";
        
        
    }
    

});

resetbutton.addEventListener("click", function(){
    colors = generaterandomcolor(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    this.textContent = "new colors";
    messagedisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor = "steelblue";

});
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click", function(){

        var clickedcolor= this.style.backgroundColor.replace(/\s/g, '');
        
        if(clickedcolor == pickedcolor){
             messagedisplay.textContent = 'CORRECT!';
             resetbutton.textContent = "Play Again?"
             changecolors(clickedcolor);
             h1.style.backgroundColor = clickedcolor;
            
        }
        else{
            this.style.backgroundColor="#232323";
            messagedisplay.textContent = 'TRY AGAIN!';
        }

    });
}
function changecolors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

} 
function pickcolor(){
    var random =Math.floor(Math.random() * colors.length);
    return colors[random];
}function generaterandomcolor(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomcolor());

    }
    return arr;
}
function randomcolor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
