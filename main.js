document.addEventListener('DOMContentLoaded', () => {
    const todoSection = document.getElementById('todoSection');
    const calculatorSection = document.getElementById('calculatorSection');
    const incomeCalcSection = document.getElementById('incomeCalcSection');
    const currencyRatesSection = document.getElementById('currencyRatesSection');

    document.getElementById('todoBtn').addEventListener('click', () => {
        showSection(todoSection);
    });

    document.getElementById('calculatorBtn').addEventListener('click', () => {
        showSection(calculatorSection);
    });

    document.getElementById('incomeCalcBtn').addEventListener('click', () => {
        showSection(incomeCalcSection);
    });

    document.getElementById('currencyRatesBtn').addEventListener('click', () => {
        showSection(currencyRatesSection);
    });

    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    document.getElementById('newTask').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    function showSection(section) {
        document.querySelectorAll('main section').forEach(sec => {
            sec.classList.remove('active');
        });
        section.classList.add('active');
    }

    function addTask() {
        const taskInput = document.getElementById('newTask');
        const taskList = document.getElementById('taskList');
        
        if (taskInput.value.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
