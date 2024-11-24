# Password Strength Checker

A lightweight and easy-to-use JavaScript package for evaluating the strength of passwords. This package uses regex-based rules to categorize passwords as **Weak**, **Medium**, or **Strong**, ensuring enhanced security for your applications.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Password Strength Criteria](#password-strength-criteria)
5. [Example Output](#example-output)
6. [Changelog](#changelog)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- Categorizes passwords into **Weak**, **Medium**, and **Strong** based on security strength.
- Lightweight and dependency-free.
- Simple API for easy integration into any project.
- Supports passwords of various complexities.

---

## Installation

### Install from NPM

To install the package from NPM, run:

```bash
npm install password-strength-checker-ahmad
```

---

## Usage

### Import the Package

Use the `require` function in Node.js:

```javascript
const checkPasswordStrength = require("password-strength-checker-ahmad");
```

### Evaluate Password Strength

Pass a password string to the `checkPasswordStrength` function:

```javascript
console.log(checkPasswordStrength("12345")); // Output: "Weak"
console.log(checkPasswordStrength("password123")); // Output: "Medium"
console.log(checkPasswordStrength("P@ssword123!")); // Output: "Strong"
```

### Invalid Input

If the input is invalid, the function will return:

```javascript
console.log(checkPasswordStrength("")); // Output: "Invalid input"
console.log(checkPasswordStrength(null)); // Output: "Invalid input"
```

---

## Password Strength Criteria

The password is evaluated using the following criteria:

1. **Weak**:

   - Fewer than 8 characters.
   - No special patterns or complexity.
   - Example: `12345`, `password`

2. **Medium**:

   - At least 8 characters.
   - Combination of letters and numbers.
   - Example: `password123`, `hello1234`

3. **Strong**:
   - At least 12 characters.
   - Combination of uppercase, lowercase, numbers, and special characters.
   - Example: `P@ssword123!`, `S3cur3P@ss!`

---

## Example Output

| Password       | Strength |
| -------------- | -------- |
| `12345`        | Weak     |
| `password123`  | Medium   |
| `P@ssword123!` | Strong   |
| `weakpass`     | Weak     |
| `S3cur3P@ss!`  | Strong   |

---

## Changelog

### **1.1.0**

- Improved password validation with optimized regex.
- Added detailed README documentation.
- Added input validation for better error handling.

### **1.0.0**

- Initial release with basic functionality.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Make your changes and write tests.
4. Submit a pull request.

For bugs or feature requests, open an issue on the [GitHub issues page](https://github.com/azafar224/password_strength_checker/issues).

---

## License

This package is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## Support

If you encounter issues, feel free to:

- Open an issue on the [GitHub repository](https://github.com/azafar224/password_strength_checker/issues).
- Contact me via email at `ahmadzafar224@gmail.com`.

```

```
