
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;

// Function to determine hours worked based on work type
function getWorkHours(workType) {
    switch (workType) {
        case 0:
            return 0;
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Function to calculate daily and monthly wages based on work type
function calculateMonthlyWages() {
    let totalWages = 0;
    let totalHours = 0;

    // Loop over each working day to calculate daily wages
    for (let day = 1; day <= WORKING_DAYS; day++) {
        const workType = Math.floor(Math.random() * 3); // Random work type (0 = no work, 1 = part-time, 2 = full-time)
        const dailyHours = getWorkHours(workType); // Get the hours worked based on work type
        const dailyWage = dailyHours * WAGE_PER_HOUR; // Calculate daily wage

        totalHours += dailyHours; // Add to total hours worked
        totalWages += dailyWage; // Add to total wages earned

        console.log(`Day ${day}: Worked ${dailyHours} hours, Earned ${dailyWage}`);
    }

    console.log(`\nTotal Hours Worked in the Month: ${totalHours}`);
    console.log(`Total Wages for the Month: ${totalWages}`);
}

// Call the function to calculate monthly wages
calculateMonthlyWages();

// Additional functionality to simulate a single day's attendance and wage
let work = Math.floor(Math.random() * 3); // Random work type for the day
let hoursWorked;

function workdone(work) {
    if (work === 0) {
        console.log("Employee did not work today.");
        hoursWorked = 0;
        return 0; // No time worked
    } 
    else if (work === 1) {
        console.log("Employee worked Part-Time today.");
        hoursWorked = 4;
        return PART_TIME_HOURS;
    } 
    else if (work === 2) {
        console.log("Employee worked Full-Time today.");
        hoursWorked = 8;
        return FULL_TIME_HOURS;
    }
}

let dailyWage = workdone(work) * WAGE_PER_HOUR; // Calculate daily wage

// Corrected to use backticks for template literals
console.log(`\nSingle Day:`);
console.log(`Hours Worked: ${hoursWorked}`);
console.log(`Daily Wage: ${dailyWage}`);
console.log(`Monthly Wage: ${dailyWage * WORKING_DAYS}`);
