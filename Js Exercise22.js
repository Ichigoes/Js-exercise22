function recordCrusher(input) {
    let recordInSecs = Number(input[0]);
    let rangeInMeters = Number(input[1]);
    let timeInSecsForMeter = Number(input[2]);

    let neededSecs = rangeInMeters * timeInSecsForMeter;
    let addedTime = Math.round(rangeInMeters / 15) * 12.5;
    let oveallTime = neededSecs + addedTime;

    if (recordInSecs > oveallTime) {
        console.log(`Yes, he succeeded! The new world record is ${oveallTime.toFixed(2)} seconds.`)
    } else {
        neededTime = recordInSecs - oveallTime
        console.log(`No, he failed! He was ${Math.abs(neededTime).toFixed(2)} seconds slower.`)
    }
    
}

recordCrusher(["55555.67", "3017", "5.03"])
