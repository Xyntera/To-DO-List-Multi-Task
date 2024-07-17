// Basic Currency Rates Implementation using a free API
document.addEventListener('DOMContentLoaded', () => {
    const currencyRates = document.getElementById('currencyRates');
    currencyRates.innerHTML = `
        <div class="currency-rates-container">
            <input type="text" id="currencyCode" placeholder="Currency Code (e.g., USD)">
            <button id="getRatesBtn">Get Rates</button>
            <div id="ratesResult"></div>
        </div>
    `;

    const currencyCode = document.getElementById('currencyCode');
    const getRatesBtn = document.getElementById('getRatesBtn');
    const ratesResult = document.getElementById('ratesResult');

    getRatesBtn.addEventListener('click', async () => {
        const code = currencyCode.value.toUpperCase();
        if (code.trim() === '') {
            ratesResult.textContent = 'Please enter a currency code.';
            return;
        }

        try {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${code}`);
            const data = await response.json();

            if (data.error) {
                ratesResult.textContent = 'Invalid currency code.';
                return;
            }

            let ratesHtml = '<h3>Exchange Rates:</h3>';
            for (const [currency, rate] of Object.entries(data.rates)) {
                ratesHtml += `<p>${currency}: ${rate}</p>`;
            }
            ratesResult.innerHTML = ratesHtml;
        } catch (error) {
            ratesResult.textContent = 'Error fetching rates. Please try again.';
        }
    });
});
