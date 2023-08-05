const packageSizesInGrams = [2500, 2500];
const PROTEIN_PER_GRAM_OF_CHICKEN = 0.23;
const days = 13;

/**
 * Reduces an array of package sizes in grams to the total sum.
 * @param {number[]} packageSizesInGrams - Array of package sizes in grams.
 * @returns {number} - Total sum of package sizes.
 */
function arrayReducer(packageSizesInGrams) {
  return packageSizesInGrams.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Calculates the total grams of chicken consumed per day.
 * @param {Function} arrayReducer - Function to reduce package sizes.
 * @param {number[]} packageSizesInGrams - Array of package sizes in grams.
 * @param {number} days - Number of days.
 * @returns {number} - Total grams of chicken consumed per day.
 */
function getTotalGramsOfChickenPerDay(arrayReducer, packageSizesInGrams, days) {
  return arrayReducer(packageSizesInGrams) / days;
}



/**
 * Calculates the amount of protein consumed per day.
 * @param {Function} getTotalGramsOfChickenPerDay - Function to calculate total grams of chicken per day.
 * @param {Function} arrayReducer - Function to reduce package sizes.
 * @param {number[]} packageSizesInGrams - Array of package sizes in grams.
 * @param {number} days - Number of days.
 * @returns {number} - Total grams of protein consumed per day.
 */
function getProteinPerDay(
  getTotalGramsOfChickenPerDay,
  arrayReducer,
  packageSizesInGrams,
  days
) {
  return getTotalGramsOfChickenPerDay(
    arrayReducer,
    packageSizesInGrams,
    days
  ) * PROTEIN_PER_GRAM_OF_CHICKEN;
}


module.exports = {
  PROTEIN_PER_GRAM_OF_CHICKEN,
  packageSizesInGrams,  
  days,
  arrayReducer,
  getTotalGramsOfChickenPerDay,
  getProteinPerDay
};