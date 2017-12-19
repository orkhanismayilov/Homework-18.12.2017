var n = parseInt(Number(prompt("Please, enter the amount of cells")));
console.log("Amount of cells: " + n);
var m = parseInt(Number(prompt("Please, enter the amount of rabbits")));
console.log("Amount of rabbits: " + m);
var count = 1;

if (m > n && m > 0 && n > 0) {
    while (m > n) {
        m -= n;
        count++;
    }
    console.log("Maximum number of rabbits in the same cell: "+(count+0));
} else {
    console.warn("Wrong inputs!");
}