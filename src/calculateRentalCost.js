/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let resultCost = 0;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const UNDISCOUNTED_COST = days * 40;

  if (days < 3) {
    resultCost = UNDISCOUNTED_COST;
  }

  if (days >= 3 && days < LONG_TERM) {
    resultCost = UNDISCOUNTED_COST - 20;
  }

  if (days >= LONG_TERM) {
    resultCost = UNDISCOUNTED_COST - LONG_TERM_DISCOUNT;
  }

  return resultCost;
}

module.exports = calculateRentalCost;
