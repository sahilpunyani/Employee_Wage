const wage = 20; // wage per hour
const partTime = 4; // part-time hours
const fullTime = 8; // full-time hours
const noTime = 0; // no work hours

let res = Math.floor(Math.random() * 2); // Attendance check (0 = absent, 1 = present)
let work = Math.floor(Math.random() * 3); // Work type (0 = no time, 1 = part-time, 2 = full-time)

let hoursWorked;

function workdone(work) {
    if (work === 0) {
        console.log("Employee did not work today.");
        hoursWorked = 0;
        return noTime;
    } 
    else if (work === 1) {
        console.log("Employee worked Part-Time today.");
        hoursWorked = 4;
        return partTime;
    } 
    else if (work === 2) {
        console.log("Employee worked Full-Time today.");
        hoursWorked = 8;
        return fullTime;
    }
}

if (res === 0) {
    console.log("Employee is Absent.");
    hoursWorked = 0; // Set hoursWorked to 0 if the employee is absent
} else {
    console.log("Employee is Present.");
    let dailyWage = workdone(work) * wage; // Calculate daily wage based on hours worked

    console.log(`Hours Worked: ${hoursWorked}`);
    console.log(`Daily Wage: ${dailyWage}`);
}
