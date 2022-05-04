//takes in string, s
//create function that returns string capitalized

function uppercase(s) {
    //loop through string s
    if (s == null || s == "") {
        return null;
    }
    let sentence = s.slice(1, s.length);
    let first_letter = s[0].toUpperCase();

    return first_letter + sentence;

    // first_letter = first_letter.uppercase()
    // return first_letter + sentence
}

// test = "happy"
// test2 = "does this work"
// test3 = "111 penguin"
// test4 = " special char"
// test5 = "&& final"
// test6 = null
// test7 = ""

// console.log(uppercase(test));
// console.log(uppercase(test2))
// console.log(uppercase(test3))
// console.log(uppercase(test4))
// console.log(uppercase(test5))
// console.log(uppercase(test6))
// console.log(uppercase(test7))


//question 2
//analog clock
//determine angle between minute and hour hands
//takes in (int, int)

function clock_angles(hour, minute) {
    //find hour hand distance from 12
    //minute hand distance from 12
    //then subtract them
    //every 5 minutes = 30 degrees
    //every minute is 6 degrees
    let hour_distance = 0
    let minute_distance = minute*6;

    if (hour == 12) {
        hour_distance = 0;
    }
    else {
        hour_distance = hour*30
    }

    return Math.abs(hour_distance - minute_distance)

}

// const hours = [3, 6, 4, 9, 12]
// const minutes = [10, 30, 45]

// console.log(clock_angles(hours[1], minutes[2]))

//question 3

//given a hash map of employees and managers
//return number of reports from employees to managers
//keys of employees
//manager as value
//number of reports = number of employees each manager has

test = {employee1: "manager", employee2: "manager", employee3: "manager2"}

//manager = 2
//manager2 = 1

function hashReport(employeeObj) {
    let reportCount = {}
    for (const employee in employeeObj) {
        // console.log(employeeObj[employee])
        if (!reportCount[employeeObj[employee]]) {
            reportCount[employeeObj[employee]] = 1
        }
        else {
            reportCount[employeeObj[employee]] += 1
        }
    }

    return reportCount;
}

console.log(hashReport(test))



