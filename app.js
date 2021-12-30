// Here's my Array of friends
let myFriends = ["Brian", "Robert", "Paul", "Grant", "Alex"]

// Printing the names of friends

for(let x = 0; x < myFriends.length; x++) {
    let myFriend = myFriends[x];
    console.log(myFriend);

    for(let y = 99; y > 0; y--) {
        if(y > 2) {
            console.log(y + "lines of code in the file, " + y + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (y - 1) + " lines of code in the file.");
        } else if(y == 2) {
            console.log(y + "lines of code in the file, " + y + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (y - 1) + " lines of code in the file.");
        } else if (y == 1) {
            console.log(y + " line of code in the file, " + y + " line of code; " + myFriend + " strikes one out, clears it all out, no more lines of code in the file!");
        }
    }
}
