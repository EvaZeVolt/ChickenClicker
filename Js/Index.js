var eggs = 1;
var ChickenSqueaser = 0;
var ChickenPuncher = 0;
var ChickenStabber = 0;
var ChickenSwinger = 1;
var Fork = 1;
var Quack = new Audio("Quack.mp3");

function EggClicker() {
  eggs = eggs + 1 * Fork;
  document.getElementById("AmountEgg").value = eggs;
  Quack.play();
}
//Update
function update() {
  document.getElementById("AmountEgg").value = eggs;
  document.getElementById("ForkCost").value = Fork * 5;
  document.getElementById("PuncherCost").value = ChickenPuncher * 200;
  document.getElementById("SqueaserCost").value = ChickenSqueaser * 24;
  document.getElementById("StabberCost").value = ChickenStabber * 2000;
  document.getElementById("SwingerCost").value = ChickenSwinger * 20000;
  document.getElementById("Eps").value =
    ChickenSqueaser +
    ChickenPuncher * 10 +
    ChickenStabber * 100 +
    ChickenSwinger * 1000 +
    "  Eggs Per Second";
  if (eggs == 1) {
    document.getElementById("PuncherCost").value = 100;
    document.getElementById("SqueaserCost").value = 12;
    document.getElementById("StabberCost").value = 1000;
    document.getElementById("ForkCost").value = 5;
    document.getElementById("ForkCost").value = 5;
  }
  if (eggs == 100) {
    Quack.loop = false;
    Quack.play();
    eggs = 101;
  }

  if (eggs == 101) {
    Quack.loop = false;
    Quack.play();
    eggs = 102;
  }
  if (eggs == 102) {
    Quack.loop = false;
    Quack.play();
    eggs = 103;
  }
  if (eggs == 103) {
    Quack.loop = false;
    Quack.play();
    eggs = 104;
  }
}
function timer() {
  eggs =
    eggs +
    ChickenSqueaser +
    ChickenSqueaser +
    ChickenPuncher * 10 +
    ChickenStabber * 100 +
    ChickenSwinger * 1000;

  update();
}
setInterval(timer, 1000);

function buyChickenSqueaser() {
  if (eggs >= (ChickenSqueaser + 1) * 12) {
    eggs = eggs - (ChickenSqueaser + 1) * 12;
    ChickenSqueaser = ChickenSqueaser + 1;

    update();
  }
}
function buyChickenPuncher() {
  if (eggs >= (ChickenPuncher + 1) * 100) {
    eggs = eggs - (ChickenPuncher + 1) * 100;
    ChickenPuncher = ChickenPuncher + 1;

    update();
  }
}
function buyChickenStabber() {
  if (eggs >= (ChickenStabber + 1) * 1000) {
    eggs = eggs - (ChickenStabber + 1) * 1000;
    ChickenStabber = ChickenStabber + 1;

    update();
  }
}
function buyChickenSwinger() {
  if (eggs >= (ChickenSwinger + 1) * 10000) {
    eggs = eggs - (ChickenStabber + 1) * 10000;
    ChickenSwinger = ChickenSwinger + 1;

    update();
  }
}
function buyFork() {
  if (eggs >= (Fork + 1) * 5) {
    eggs = eggs - (Fork + 1) * 5;
    Fork = Fork + 1;

    update();
  }
}
function Save() {
  localStorage.setItem("eggs", eggs);
  localStorage.setItem("Sqeaser", ChickenSqueaser);
  localStorage.setItem("Puncher", ChickenPuncher);
  localStorage.setItem("Stabber", ChickenStabber);
    localStorage.setItem("Swinger", ChickenSwinger);
  localStorage.setItem("Fork", Fork);
  
}
function Load() {
  eggs = localStorage.getItem("eggs");
  eggs = parseInt(eggs);
 
  
  Fork = localStorage.getItem("Fork");
  Fork = parseInt(Fork);
  ChickenStabber = localStorage.getItem("Stabber");
  ChickenStabber = parseInt(ChickenStabber);
  ChickenSqueaser = localStorage.getItem("Sqeaser");
  ChickenSqueaser = parseInt(ChickenSqueaser);
  ChickenPuncher = localStorage.getItem("Puncher");
  ChickenPuncher = parseInt(ChickenPuncher);

    
  ChickenSwinger = localStorage.getItem("Swinger");
  ChickenSwinger = parseInt(ChickenSwinger);
  
  document.getElementById("AmountEgg").value = eggs;
}
