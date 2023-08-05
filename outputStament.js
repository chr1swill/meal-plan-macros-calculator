const {
    getProteinPerDay,
    getTotalGramsOfChickenPerDay,
    packageSizesInGrams,
    arrayReducer,
    days
  } = require("./calculators.js");


/**
 * Generates an output statement for the total grams of chicken consumed per day.
 * @param {Function} getTotalGramsOfChickenPerDay - Function to calculate total grams of chicken per day.
 * @param {Function} arrayReducer - Function to reduce package sizes.
 * @param {number[]} packageSizesInGrams - Array of package sizes in grams.
 * @param {number} days - Number of days.
 * @returns {string} - Output statement.
 */
function totalGramsPerDayOutputStatement(getTotalGramsOfChickenPerDay, arrayReducer, packageSizesInGrams, days) {
    return `I will consume ${getTotalGramsOfChickenPerDay(arrayReducer, packageSizesInGrams, days)}g of chicken per day for ${days} days.`;
}


/**
   * Generates an output statement for the total grams of protein consumed per day.
   * @param {Function} getProteinPerDay - Function to calculate total grams of protein per day.
   * @param {Function} arrayReducer - Function to reduce package sizes.
   * @param {number[]} packageSizesInGrams - Array of package sizes in grams.
   * @param {number} days - Number of days.
   * @returns {string} - Output statement.
   */

function proteinPerDayOutputStatement(getProteinPerDay, arrayReducer, packageSizesInGrams, days) {
    return `I will consume ${getProteinPerDay(arrayReducer, packageSizesInGrams, days)}g of protein per day for ${days} days.`;
}

/**
   * Generates a function comment for the given function body.
   *
   * @param {function} getTotalGramsOfChickenPerDay - a function that calculates the total grams of chicken per day
   * @param {function} getProteinPerDay - a function that calculates the protein per day
   * @param {function} arrayReducer - a function that reduces an array of values
   * @param {array} packageSizesInGrams - an array of package sizes in grams
   * @param {number} days - the number of days
   */

function outputAllStatements(getTotalGramsOfChickenPerDay, getProteinPerDay, arrayReducer, packageSizesInGrams, days) {
    const totalGramsPerDay = getTotalGramsOfChickenPerDay(arrayReducer, packageSizesInGrams, days);
    const proteinPerDay = getProteinPerDay(getTotalGramsOfChickenPerDay, arrayReducer, packageSizesInGrams, days);

    console.log(`I will consume ${totalGramsPerDay}g of chicken per day for ${days} days.`);
    console.log(`I will consume ${proteinPerDay}g of protein per day for ${days} days.`);
}

console.log(outputAllStatements(getTotalGramsOfChickenPerDay, getProteinPerDay, arrayReducer, packageSizesInGrams, days));
