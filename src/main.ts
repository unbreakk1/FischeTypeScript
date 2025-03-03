// Step 1:
let age: number = 25

// Step 2:
for (let i = 1; i <= age; i++)
    console.log(i)

// Step 3:
if (age > 18)
    console.log('You are an adult.')
else
    console.log('You are not an adult.')

// Step 4:
let score: number = 0

// Step 5:
if (score !== 0)
    console.log('Score is available.')

// Step 6:
if (score)
    console.log('Score is evaluated as truthy.')
else
    console.log('Score is not evaluated as truthy.')

// Step 7:
let username: string = '';

// Step 8:
if (username)
    console.log('Username is available.')

// Step 9:
if (!username)
    console.log('Username is evaluated as falsy.')
else
    console.log('Username is not evaluated as falsy.')

// Step 10:
let isAdmin: boolean = false;

// Step 11:
if (isAdmin)
    console.log('isAdmin is evaluated as truthy.')
else
    console.log('isAdmin is not evaluated as truthy.')

// Step 12:
if (!isAdmin)
    console.log('isAdmin is false.')

// print a Christmas Tree in March??!
const n = 20;
printChristmasTree(n);

function printChristmasTree(n: number): void
{
    // upper part of tree
    for (let i = 1; i <= n; i++)
    {
        const spaces = ' '.repeat(n - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    // trunk
    for (let i = 1; i <= n; i++)
    {
        const spaces = ' '.repeat(n - 1);
        console.log(spaces + '*');
    }
}

//function printChristmasTree(n: number): void
{
    const SPACE_CHAR = ' '
    const STAR_CHAR = '*'

    const printTreeLayer = (spaces: number, stars: number): void =>
    {
        const spaceText = SPACE_CHAR.repeat(spaces)
        const starText = STAR_CHAR.repeat(stars)
        console.log(spaceText + starText)
    }

    const printTrunkLayer = (spaces: number): void =>
    {
        const spaceText = SPACE_CHAR.repeat(spaces)
        console.log(spaceText + STAR_CHAR)
    }

    // Print tree
    for (let i = 1; i <= n; i++)
        printTreeLayer(n - i, 2 * i - 1)

    // Print trunk
    for (let i = 1; i <= n; i++)
        printTrunkLayer(n - 1)

}





