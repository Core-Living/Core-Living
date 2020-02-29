var exerciseMap = {
    "Weights": 0.024,
    "Water Aerobics": 0.032,
    "Elliptical": 0.072,
    "Slow Bicycle": 0.056,
    "Med Bicycle": 0.096,
    "Fast Bicycle": 0.132,
    "Slow Walking": 0.032,
    "Med Walking": 0.036,
    "Fast Walking": 0.04,
    "Swimming": 0.048,
    "Slow Running": 0.064,
    "Med Running": 0.088,
    "Fast Running": 0.116
}

function calorieBurnPerMin(Person) {
    var calBurned = 0;
    var multiplier = 1;
    //Height in Inches, Weight in Pounds, Sex is a Char, Exercise is a Char
    switch (Person.activity) {
        case 'L': 
                multiplier *= 1.2;
                break;
        case 'S': 
                multiplier *= 1.37;
                break;
        case 'M':
                multiplier *= 1.55;
                break;
        case 'A':
                multiplier *= 1.725;
                break;
        case 'E':
                multiplier *= 1.9;
                break;
    }
    if (Person.sex === 'M') {
        calBurned = 66 + (6.2 * Person.weight) + (12.7 * Person.height) - (6.76 * Person.age);
    } else {
        calBurned = 655.1 + (4.35 * Person.weight) + (4.7 * Person.height) - (4.7 * Person.age);
    }
    return (calBurned * multiplier) / 1440;
}

function updateCalories(Person) {
    Person.currentCalorie += calorieBurnPerMin(Person);
    return Person.currentCalorie;
}

function recordExercise(Person, Exercise) {
    //Name -> Calorie Loss Per Pound Per Min
    //Add Map Nums to Exercise Object Instead
    if (exerciseMap.has(Exercise.name)) {
        Person.currentCalorie += exerciseMap[Exercise.name] * Person.weight;
    } else {
        alert(new MessageEvent("Exercise has Not Been Added Please Update First"));
    }
}

function expandExerciseList(calPerPoundPerMin, name) {
    if (!exerciseMap.has(name)) {
        exerciseMap[name] = calPerPoundPerMin;
    } else {
        alert(new MessageEvent("Exercise is Already Available"));
    }
}

function dailyReset(Person) {
    Person.currentCalorie = 0;
}