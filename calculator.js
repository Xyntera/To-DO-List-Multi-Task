// Basic Calculator Implementation
document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.getElementById('calculator');
    calculator.innerHTML = `
        <div class="calculator-container">
            <input type="text" class="calculator-display" id="calcDisplay" disabled>
            <div class="calculator-buttons">
                <button class="btn">7</button>
                <button class="btn">8</button>
                <button class="btn">9</button>
                <button class="btn">/</button>
                <button class="btn">4</button>
                <button class="btn">5</button>
                <button class="btn">6</button>
                <button class="btn">*</button>
                <button class="btn">1</button>
                <button class="btn">2</button>
                <button class="btn">3</button>
                <button class="btn">-</button>
                <button class="btn">0</button>
                <button class="btn">.</button>
                <button class="btn">=</button>
                <button class="btn">+</button>
                <button class="btn">C</button>
            </div>
        </div>
    `;

    const calcDisplay = document.getElementById('calcDisplay');
    const buttons = calculator.querySelectorAll('.btn');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                } catch {
                    currentInput = 'Error';
                }
            } else {
                currentInput += value;
            }

            calcDisplay.value = currentInput;
        });
    });
});
