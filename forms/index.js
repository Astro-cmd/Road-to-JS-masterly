
const form = document.getElementById('signup-form');

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');

// Get the error message span for each field
function getErrorElement(field) {
    return document.querySelector(
        `[data-error-for="${field.id}"]`
    );
}

// Return a custom error message based on validity
function getErrorMessage(field) {
    if (field.validity.valueMissing) {
        return 'This field is required.';
    }

    if (field.validity.typeMismatch) {
        return 'Please enter a valid email address.';
    }

    if (field.validity.tooShort) {
        return `Minimum ${field.minLength} characters required.`;
    }

    if (field.validity.tooLong) {
        return `Maximum ${field.maxLength} characters allowed.`;
    }

    if (field.validity.patternMismatch) {
        if (field.id === 'username') {
            return 'Use only letters, numbers, and underscores.';
        }

        if (field.id === 'phone') {
            return 'Enter a valid 10-digit phone number starting with 07.';
        }

        if (field.id === 'password') {
            return 'Password needs uppercase, lowercase, digit, and special character.';
        }

        return 'Please enter a valid format.';
    }

    if (field.validity.customError) {
        return field.validationMessage;
    }

    return '';
}

// Display error for a field
function showError(field) {
    const errorElement = getErrorElement(field);

    if (!errorElement) return;

    errorElement.textContent = getErrorMessage(field);
}

// Validate password confirmation
function checkPasswords() {
    if (
        confirmPassword.value !== '' &&
        password.value !== confirmPassword.value
    ) {
        confirmPassword.setCustomValidity('Passwords do not match.');
    } else {
        confirmPassword.setCustomValidity('');
    }

    showError(confirmPassword);
}

// Get all form controls
const fields = form.querySelectorAll('input, textarea');

// Listen for input events
fields.forEach((field) => {
    field.addEventListener('input', () => {
        if (field === password || field === confirmPassword) {
            checkPasswords();
        } else {
            showError(field);
        }
    });
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Make sure password confirmation is checked
    checkPasswords();

    // Show errors for all fields
    fields.forEach((field) => {
        showError(field);
    });

    // Check overall form validity
    if (!form.checkValidity()) {
        console.log('Form contains errors.');
        return;
    }

    console.log('Form submitted successfully.');

    // Example: display success message
    alert('Account created successfully!');
});