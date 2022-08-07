var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,6,2,1,2,2,2,2,8,1],
    [1,2,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,1,5,1,1,2,2,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,2,2,1,2,2,1,2,2,1],
    [1,2,9,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
]
 
var seconds = 0;
        var el = document.getElementById('seconds-counter');

        function incrementSeconds() {
            seconds += 1;
            el.innerText = "Time :  " + seconds + " seconds.";
            if(seconds === 120 ){
                alert('your lost baby')
                window.location.reload()
            }
        }

var cancel = setInterval(incrementSeconds, 1000);





var pacman = {
    x: 6,
    y: 4
}

var score = 0;

var ghost1 = {
    x: 4,
    y: 1 

}
var ghost2 = {
    x:11,
    y: 1 

}
var ghost3 = {
    x:2,
    y:7

}


    function drawWorld() {
        
        document.getElementById('world').innerHTML="";
        for(var y = 0; y < map.length; y++){
            console.log(map[y])
            for(var x = 0; x < map[y].length; x++){
               console.log(map[y][x])
               if(map[y][x] === 1){
                document.getElementById('world').innerHTML += "<div class='wall'></div>"
               }else if(map[y][x] === 2){
                document.getElementById('world').innerHTML += "<div class='coin'></div>"
               }else if(map[y][x] === 3){
                document.getElementById('world').innerHTML += "<div class='ground'></div>"
               }else if(map[y][x] === 5){
                document.getElementById('world').innerHTML += "<div class='pacman'></div>"
               }
               else if(map[y][x] === 6){
                document.getElementById('world').innerHTML += "<div class='ghost'></div>"
               }
               else if(map[y][x] === 7){
                document.getElementById('world').innerHTML += "<div class='ghost'></div>"
               }
               else if(map[y][x] === 8){
                document.getElementById('world').innerHTML += "<div class='ghost'></div>"
               }
               else if(map[y][x] === 9){
                document.getElementById('world').innerHTML += "<div class='ghost'></div>"
               }

            
          }
          document.getElementById('world').innerHTML += "<br>"
          
          
        }

        document.getElementById('world').innerHTML += '<p class="score"> Game Score =  <h1>  '+ score + ' </h1></p>'

    
    
       
    
       

    }

  

        
      document.onkeydown = function(e){
        if(e.keyCode === 37){
            if( map[pacman.y][pacman.x-1] !== 1){
                if(map[pacman.y][pacman.x-1] === 2){
                    score = score + 10
                    if(score >= 200){
                        drawWorld();
                        alert('your win baby')
                        window.location.reload()
                    }
                }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x -1 
            map[pacman.y][pacman.x] = 5;
            drawWorld();
            if(map[pacman.y][pacman.x] == map[ghost1.y][ghost1.x] || map[pacman.y][pacman.x] == map[ghost2.y][ghost2.x]|| map[pacman.y][pacman.x] == map[ghost3.y][ghost3.x]){
                alert('your lost baby')
                window.location.reload()
            }
            }
        }else if(e.keyCode === 38){
            if( map[pacman.y-1][pacman.x] !== 1){
                if(map[pacman.y-1][pacman.x] === 2){
                    score = score + 10
                    if(score >= 200){
                        drawWorld();
                        alert('your win baby')
                        window.location.reload()
                    }
                }
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1 
            map[pacman.y][pacman.x] = 5;
            drawWorld();
            if(map[pacman.y][pacman.x] == map[ghost1.y][ghost1.x] || map[pacman.y][pacman.x] == map[ghost2.y][ghost2.x]|| map[pacman.y][pacman.x] == map[ghost3.y][ghost3.x]){
                alert('your lost baby')
                window.location.reload()
            }
            }
        }
        else if(e.keyCode === 39){
            if( map[pacman.y][pacman.x+1] !== 1){
                if(map[pacman.y][pacman.x+1] === 2){
                    score = score + 10
                    if(score >= 200){
                        drawWorld();
                        alert('your win baby')
                        window.location.reload()
                    }
                }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x +1 
            map[pacman.y][pacman.x] = 5;
            drawWorld();
            if(map[pacman.y][pacman.x] == map[ghost1.y][ghost1.x] || map[pacman.y][pacman.x] == map[ghost2.y][ghost2.x]|| map[pacman.y][pacman.x] == map[ghost3.y][ghost3.x]){
                alert('your lost baby')
                window.location.reload()
            }
            }
        }
        else if(e.keyCode === 40){
            if( map[pacman.y+1][pacman.x] !== 1){
                if(map[pacman.y+1][pacman.x] === 2){
                    score = score + 10
                    if(score >= 200){
                        drawWorld();
                        alert('your win baby')
                        window.location.reload()
                    }
                }
            
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1 
            map[pacman.y][pacman.x] = 5;
            drawWorld();
            if(map[pacman.y][pacman.x] == map[ghost1.y][ghost1.x] || map[pacman.y][pacman.x] == map[ghost2.y][ghost2.x]|| map[pacman.y][pacman.x] == map[ghost3.y][ghost3.x]){
                alert('your lost baby')
                window.location.reload()
            }
            }
        }
      }
     
 
    drawWorld()

    function moveMob(){
        if( map[ghost1.y][ghost1.x+1] !== 1  ){
        map[ghost1.y][ghost1.x] = 3;
        ghost1.x = ghost1.x + 1
        map[ghost1.y][ghost1.x] = 6;
        drawWorld();
        }
        else
            if(map[ghost1.y][ghost1.x+1] == 1  &&  map[ghost1.y+1][ghost1.x] !== 1  ) {
                map[ghost1.y][ghost1.x] = 3;
                ghost1.y = ghost1.y + 1
                map[ghost1.y][ghost1.x] = 6;
                drawWorld();
            }
            else if(map[ghost1.y][ghost1.x+1] == 1   &&  map[ghost1.y+1][ghost1.x] == 1  ){
                map[ghost1.y][ghost1.x] = 3;
                ghost1.x = ghost1.x - 1
                map[ghost1.y][ghost1.x] = 6;
                drawWorld();
            }
            if(map[ghost1.y][ghost1.x] === map[pacman.y][pacman.x]) {
                drawWorld();
                alert('your lost baby')
                window.location.reload()
            }
            
        
        drawWorld();
        if(map[ghost2.y][ghost2.x] === map[pacman.y][pacman.x]) {
            drawWorld();
            alert('your lost baby')
            window.location.reload()
        }
        
        if( map[ghost2.y+1][ghost2.x] !== 1  ){
            map[ghost2.y][ghost2.x] = 3;
            ghost2.y = ghost2.y + 1
            map[ghost2.y][ghost2.x] = 8;
            drawWorld();
            }
            else
                if(map[ghost2.y+1][ghost2.x] == 1  &&  map[ghost2.y][ghost2.x+1] == 1  ) {
                    map[ghost2.y][ghost2.x] = 3;
                    ghost2.x = ghost2.x - 1
                    map[ghost2.y][ghost2.x] = 8;
                    drawWorld();
                }
                else if(map[ghost2.y][ghost2.x-1] !== 1  ){
                    map[ghost2.y][ghost2.x] = 3;
                    ghost2.x = ghost2.x - 1
                    map[ghost2.y][ghost2.x] = 8;
                    drawWorld();
                }
                else if(map[ghost2.y-1][ghost2.x] !== 1  ){
                    map[ghost2.y][ghost2.x] = 3;
                    ghost2.y = ghost2.y - 1
                    map[ghost2.y][ghost2.x] = 8;
                    drawWorld();
                }
            drawWorld();

           
            if( map[ghost3.y-1][ghost3.x] !== 1  ){
                map[ghost3.y][ghost3.x] = 3;
                ghost3.y = ghost3.y - 1
                map[ghost3.y][ghost3.x] = 9;
                drawWorld();
                }
                else
                    if(map[ghost3.y+1][ghost3.x] == 1  &&  map[ghost3.y][ghost3.x+1] == 1  ) {
                        map[ghost3.y][ghost3.x] = 3;
                        ghost3.x = ghost3.x - 1
                        map[ghost3.y][ghost3.x] = 9;
                        drawWorld();
                    }
                    else if(map[ghost2.y][ghost2.x-1] !== 1  ){
                        map[ghost3.y][ghost3.x] = 3;
                        ghost3.x = ghost3.x - 1
                        map[ghost3.y][ghost3.x] = 9;
                        drawWorld();
                    }
                    else if(map[ghost3.y-1][ghost3.x] !== 1  ){
                        map[ghost3.y][ghost3.x] = 3;
                        ghost3.y = ghost3.y - 1
                        map[ghost3.y][ghost3.x] = 9;
                        drawWorld();
                    }else if(map[ghost3.y][ghost3.x+1] !== 1  ){
                        map[ghost3.y][ghost3.x] = 3;
                        ghost3.x = ghost3.x + 1
                        map[ghost3.y][ghost3.x] = 9;
                        drawWorld();
                    }
                
                    if(map[ghost3.y][ghost3.x] === map[pacman.y][pacman.x]) {
                        drawWorld();
                        alert('your lost baby')
                        window.location.reload()
                    }
                    drawWorld();

            

       
        
        }   
        
    
        

    setInterval(moveMob, 850);

     function adicionarMusica(){
        document.getElementById('music').innerHTML +=`<div id="musicopt"><audio id="audio" class="audio" preload="metadata" autoplay loop  >
        <source src="componentes/y2meta.com - Pacman Remix (320 kbps).mp3" type="audio/mpeg">
        <p>seu site nao é compativel com a tecnologia de audio</p>
    </audio></div>`

     }


     function RemoverMusica(){
        document.getElementById('musicopt').remove()
     }

     
   
    

    
   
     

     
   
 
