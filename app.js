console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) 
{
    for (let i = 1; i < count; i++)
    {
        if (i % 2 == 1) {
            console.log(i);
        } else {
            continue;
        }
    }

}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age);{
    let aboveSixteen = `"Congrats ${userName}, you can drive!"`;
    let belowSixteen = `"Sorry ${username}, but you need to wait until you are 16."`;
    if (age <=16) {
        console.log(belowSixteen);
    }
    else {
        console.log(aboveSixteen);
    }
    
}