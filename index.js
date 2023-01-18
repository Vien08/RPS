pc = Math.floor(Math.random()*3);
    // console.log(pc);
    switch (pc) {
        case 0:
            pc = "rock";
        break;
    
        case 1:
            pc = "paper";
        break;
    
        case 2:
            pc = "scissors";
        break;
    
        default:
            break;
    }

function rock (){
    pc = Math.floor(Math.random()*3);
    console.log(pc);
    switch (pc) {
        case 0:
            pc = "rock";
        break;
    
        case 1:
            pc = "paper";
        break;
    
        case 2:
            pc = "scissors";
        break;
    
        default:
            break;
    }

    document.getElementById("plyrresult").innerHTML = "Rock";

    if (pc == "rock"){
        document.getElementById("pcresult").innerHTML = "Rock";
        document.getElementById("resultposted").innerHTML = "It's a draw";
        history();
        
    }

    else if (pc == "paper"){
        document.getElementById("pcresult").innerHTML = "paper";
        document.getElementById("resultposted").innerHTML = "You lose !";
        scores();
        setTimeout(fiveonly,1000);
        history();
    }
    
    else if (pc == "scissors"){
        document.getElementById("pcresult").innerHTML = "Scissors";
        document.getElementById("resultposted").innerHTML = "You Win !";
        scores();
        setTimeout(fiveonly,1000);
        history();
    }
    
    
}

function paper (){
    pc = Math.floor(Math.random()*3);
    console.log(pc);
    switch (pc) {
        case 0:
            pc = "rock";
        break;
    
        case 1:
            pc = "paper";
        break;
    
        case 2:
            pc = "scissors";
        break;
    
        default:
            break;
    }

    document.getElementById("plyrresult").innerHTML = "Paper";

    if (pc == "rock"){
        document.getElementById("pcresult").innerHTML = "Rock";
        document.getElementById("resultposted").innerHTML = "You Win !";
        scores();
        setTimeout(fiveonly,1000);
        history();
        
    }

    else if (pc == "paper"){
        document.getElementById("pcresult").innerHTML = "paper";
        document.getElementById("resultposted").innerHTML = "It's a draw";
        history();
       
    }
    
    else if (pc == "scissors"){
        document.getElementById("pcresult").innerHTML = "scissors";
        document.getElementById("resultposted").innerHTML = "You lose !";
        scores();
        setTimeout(fiveonly,1000);
        history();
       
    }
    
    
}

function scissors (){
    pc = Math.floor(Math.random()*3);
    console.log(pc);
    switch (pc) {
        case 0:
            pc = "rock";
        break;
    
        case 1:
            pc = "paper";
        break;
    
        case 2:
            pc = "scissors";
        break;
    
        default:
            break;
    }

    document.getElementById("plyrresult").innerHTML = "Scissors";

    if (pc == "rock"){
        document.getElementById("pcresult").innerHTML = "Rock";
        document.getElementById("resultposted").innerHTML = "You lose !";
        scores();
        setTimeout(fiveonly,1000);
        history();
        
    }

    else if (pc == "paper"){
        document.getElementById("pcresult").innerHTML = "paper";
        document.getElementById("resultposted").innerHTML = "You Win !";
        scores();
        setTimeout(fiveonly,1000);
        history();
       
    }
    
    else if (pc == "scissors"){
        document.getElementById("pcresult").innerHTML = "scissors";
        document.getElementById("resultposted").innerHTML = "It's a draw";
        history();
       
    }
    
    
}

function scores(){
    let x = document.getElementById("resultposted").innerHTML;

    if(x == "You Win !"){
        document.getElementById("plyrscore").innerHTML += "I"; 
    }
    else if(x == "You lose !"){
        document.getElementById("pcscore").innerHTML += "I"; 
    }

}

function fiveonly(){
    let y = document.getElementById("plyrscore").innerHTML;
    let z = document.getElementById("pcscore").innerHTML;

    if (y == "IIIII"){
        alert("You Win !");
        location.reload();
    }else if(z == "IIIII"){
        alert("You Lose !");
        location.reload();
    }
}

function history(){
    let r = document.getElementById("plyrresult").innerHTML;
    let s = document.getElementById("pcresult").innerHTML;
    document.getElementById("history").innerHTML += r + " " + "VS" + " " + s + "<br>";


}


