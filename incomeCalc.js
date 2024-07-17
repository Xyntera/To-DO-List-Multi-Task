// Basic Income Calculator Implementation
document.addEventListener('DOMContentLoaded', () => {
    const incomeCalculator = document.getElementById('incomeCalculator');
    incomeCalculator.innerHTML = `
        <div class="income-calculator-container">
            <input type="number" id="hourlyWage" placeholder="Hourly Wage">
            <input type="number" id="hoursPerWeek" placeholder="Hours per Week">
            <button id="calculateIncomeBtn">Calculate</button>
            <p id="incomeResult"></p>
        </div>
    `;

    const hourlyWage = document.getElementById('hourlyWage');
    const hoursPerWeek = document.getElementById('hoursPerWeek');
    const calculateIncomeBtn = document.getElementById('calculateIncomeBtn');
    const incomeResult = document.getElementById('incomeResult');

    calculateIncomeBtn.addEventListener('click', () => {
        const wage = parseFloat(hourlyWage.value);
        const hours = parseFloat(hoursPerWeek.value);
        if (isNaN(wage) || isNaN(hours)) {
            incomeResult.textContent = 'Please enter valid numbers.';
            return;
        }

        const weeklyIncome = wage * hours;
        const monthlyIncome = weeklyIncome * 4;
        const annualIncome = weeklyIncome * 52;

        incomeResult.innerHTML = `
            Weekly Income: $${weeklyIncome.toFixed(2)}<br>
            Monthly Income: $${monthlyIncome.toFixed(2)}<br>
            Annual Income: $${annualIncome.toFixed(2)}
        `;
    });
});
