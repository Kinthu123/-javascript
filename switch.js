let grader = 65;

switch(true) {
    case grader >= 90:
        console.log("Grade: A");
        break;
    case grader >= 80:
        console.log("Grade: B");
        break;
    case grader >= 70:
        console.log("Grade: C");
        break;
    case grader >= 60:
        console.log("Grade: D");
        break;
    default:   //same as else:
        console.log("Grade: F");
}