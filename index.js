var level = 1;
var s=[];
var t=[];
$("body").on("click",function(){
      $("h1").text("level " + level );
      $("body").removeClass("game-over");
      if(s.length > 0){
      check();
      }else{
        setTimeout( gamestart, 1000);
      }
});

// if(t.length < s.length){
//     check();
// }

function check(){
    var abs=0;
    for(var i=0;i<t.length;i++){
        console.log(s[i] + t[i]);
        if(s[i]===t[i]){
            continue;
        }else{
            $("body").addClass("game-over");
            s=[];
            t=[];
            $("h1").text("Game Over Press a key to continue");
            abs=1;
            level = 1;
            break;
        }
    }
    if(abs==0){
    if(t.length == s.length){
        setTimeout( gamestart, 1000);
        level++;
        $("h1").text("level " + level );
        t=[];
     }
    }

}



$("body").on("keypress",function(){
    $("h1").text("level " + level );
    $("body").removeClass("game-over");
    setTimeout( gamestart, 1000);
});


$(".btn").on("click", function(event){
    var ev=event.target.id;
    $("#"+ev).addClass("pressed");

    setTimeout(function(){
        $("#"+ev).removeClass("pressed");
    },200);
    t.push(ev);
});

function gamestart(){
    var x=Math.floor(Math.random()*4+1);
    if(x==1){
        s.push("green");
        $("#green").addClass("pressed");
        setTimeout(function(){
            $("#green").removeClass("pressed");
        },200);
    }
    if(x==2){
        s.push("red");
        $("#red").addClass("pressed");
        setTimeout(function(){
            $("#red").removeClass("pressed");
        },200);
    }
    if(x==3){
        s.push("yellow");
        $("#yellow").addClass("pressed");
        setTimeout(function(){
            $("#yellow").removeClass("pressed");
        },200);
    }
    if(x==4){
        s.push("blue");
        $("#blue").addClass("pressed");
        setTimeout(function(){
            $("#blue").removeClass("pressed");
        },200);

    }
}

$("#green").on("click", function(){
    var green1= new Audio("sounds/green.mp3");
    green1.play();
});

$("#red").on("click", function(){
    // $("#red").addClass("pressed");

    // setTimeout(function(){
    //     $("#red").removeClass("pressed");
    // },100);
    
    var red1= new Audio("sounds/red.mp3");
    red1.play();
});

$("#yellow").on("click", function(){
    // $("#yellow").addClass("pressed");

    // setTimeout(function(){
    //     $("#yellow").removeClass("pressed");
    // },100);

    var yellow1= new Audio("sounds/yellow.mp3");
    yellow1.play();
});

$("#blue").on("click", function(){
    // $("#blue").addClass("pressed");

    // setTimeout(function(){
    //     $("#blue").removeClass("pressed");
    // },100);

    var blue1= new Audio("sounds/blue.mp3");
    blue1.play();
});

