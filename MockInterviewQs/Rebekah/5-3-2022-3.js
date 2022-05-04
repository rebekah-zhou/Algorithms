// Question: Given current time on analog clock, determine angle on minute and hour hands

// Math perspective: 360/12 30deg/hour, 360/60 = 6degrees/minutes
// Multiply hour by 30, multiply minutes by 6, subtract and do absolute value 

const hours = [9, 12, 12, 1]
const mins = [15, 15, 0, 20]
const degrees = [180, 90, 0]

function calcAngleBtwnAnalogHands(hour, min) {
    if (hour < 0 || min <0) {
        return -1
    }
    const hourAngle = hour * 30
    const minAngle = min * 6
    const angle1 = Math.abs(hourAngle - minAngle)
    const angle2 = 360 - angle1
    return Math.min(angle1, angle2)
}

console.log(calcAngleBtwnAnalogHands(hours[3], mins[3]))