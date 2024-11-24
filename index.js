/**
 * Password Strength Checker
 * @param {string} password - The password to evaluate
 * @returns {string} Strength of the password: "Weak", "Medium", "Strong"
 */
function checkPasswordStrength(password) {
  if (!password || typeof password !== "string") {
    return "Invalid input";
  }

  // Patterns for strength levels
  const strongPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
  const mediumPattern = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  if (strongPattern.test(password)) {
    return "Strong";
  } else if (mediumPattern.test(password)) {
    return "Medium";
  }
  return "Weak";
}

module.exports = checkPasswordStrength;
