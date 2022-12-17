function setup(){
    cells = [[document.getElementById("cell00"),
        document.getElementById("cell01"),
        document.getElementById("cell02"),
        document.getElementById("cell03"),
        document.getElementById("cell04")],

        [document.getElementById("cell10"),
            document.getElementById("cell11"),
            document.getElementById("cell12"),
            document.getElementById("cell13"),
            document.getElementById("cell14")],

        [document.getElementById("cell20"),
            document.getElementById("cell21"),
            document.getElementById("cell22"),
            document.getElementById("cell23"),
            document.getElementById("cell24")],

        [document.getElementById("cell30"),
            document.getElementById("cell31"),
            document.getElementById("cell32"),
            document.getElementById("cell33"),
            document.getElementById("cell34")],

        [document.getElementById("cell40"),
            document.getElementById("cell41"),
            document.getElementById("cell42"),
            document.getElementById("cell43"),
            document.getElementById("cell44")]]
    ;
    placeNumbers();
}
function placeNumbers(){
    var number=[];
    var randomLoc;
    var temp;
    for (var i=0;i<25; i++)
        number[i]=i;

    for (i=0;i<25;i++){
        randomLoc = Math.floor(Math.random()*15+1);
        temp = number[i];
        number[i] = number[randomLoc];
        number[randomLoc] = temp;
    }

    i = 0;

    for (var row=0;row<cells.length;row++) {
        for (var col = 0; col < cells[row].length; col++) {
            if (number[i] == 0)
                cells[row][col].innerHTML = "";
            else
                cells[row][col].innerHTML = number[i];
            i++
        }
    }
}

function doClick(row,col){
    var top=row-1;
    var bottom=row+1;
    var left=col-1;
    var right=col+1;

    if (top != -1 && cells[top][col].innerHTML =="")
        swap(cells[row][col],cells[top][col]);
    else if(right != 5 && cells[row][right].innerHTML =="")
        swap(cells[row][col],cells[row][right]);
    else if(bottom != 5 && cells[bottom][col].innerHTML =="")
        swap(cells[row][col],cells[bottom][col]);
    else if(left != -1 && cells[row][left].innerHTML =="")
        swap(cells[row][col],cells[row][left]);
    else
        alert("illegal move");
    checkWin();
}

function swap(firstCell, secondCell){

    secondCell.innerHTML = firstCell.innerHTML;
    firstCell.innerHTML ="";
}

function checkWin() {
    var win = true;
    for (var i=0; i<5; i++ )
        for (var j=0; j<5; j++)
            if (!(i ==4 && j ==4) && !(cells[i][j].innerHTML == i*5+j+1))
                win=false;
    if (win) {
        alert("congrats")
        placeNumbers();
    }
}

window.addEventListener("load",setup,false);
