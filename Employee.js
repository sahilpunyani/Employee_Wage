let res = Math.floor(Math.random() * 2);
if (res == 0) {
    console.log("Absent");
} else {
    console.log("Present");
    
    let timeWork = Math.floor(Math.random() * 3);
    switch(timeWork) {
        case 0:
            console.log("No Time = 0 $");
            break;
        case 1:
            console.log("Part Time = 80 $");
            break;
        case 2:
            console.log("Full Time = 160 $");
            break;
    }
}

