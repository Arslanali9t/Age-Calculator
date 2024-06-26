function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are zero-indexed
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid date of birth.");
        return;
    }

    const dob = new Date(year, month, day);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get days in the previous month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
