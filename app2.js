let friends = ["Robert", "Jake", "Joey", "Sasha", "Jordan"];

for (let i = 0; i < friends.length; i++) {
    let lines = 99;
    for (let j = 0; j < 99; j++) {
        console.log(`${lines} lines of code in the file, ${lines} lines of code; 
        ${friends[i]} strikes one out, clears it all out, ${lines - 1} lines of code in the file`);
    }
}