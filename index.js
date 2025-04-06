function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');
    const birthdateString = birthdateInput.value;

    if (!birthdateString) {
        resultDiv.textContent = 'Please enter your birth date.';
        return;
    }

    const birthDate = new Date(birthdateString);
    const today = new Date();

    // Basic validation
    if (birthDate > today) {
        resultDiv.textContent = 'Birth date cannot be in the future.';
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age < 0) {
         // This case should ideally not happen with the future date check,
         // but added for robustness.
        resultDiv.textContent = 'Invalid birth date.';
    } else {
        resultDiv.textContent = `Your age is ${age} years.`;
    }
}
