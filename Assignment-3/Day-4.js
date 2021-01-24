// Question-1

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

    console.log("Already read " + "'" + library[0].author + "'" + " by " + library[0].title + ".");
    //     Already read 'Bill Gates' by The Road Ahead.
    
    console.log("Already read " + "'" + library[1].author + "'" + " by " + library[1].title + ".");
    //     Already read 'Steve Jobs' by Walter Isaacson.
    
    console.log("You still need to read " + "'" + library[2].title + "'" + " by " + library[2].author + ".");
    //     You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne
    //     Collins.


// Question-2

var age = 12;

if(age < 18) {
    alert("Not legal age to drive");
}
else {
    alert("Drive safe");
}