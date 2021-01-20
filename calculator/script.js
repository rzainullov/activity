class Calculator{
    constructor(currentOperandTextElement,previousOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }
    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.readyToReset = false;
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.slice(0, -1)

    }
    chooseOperation(operation){
        if(operation == '-' && this.currentOperand == '' && this.operation !== '√'){
            this.currentOperand = operation;
            return;
        }
        if(operation == '√' && this.currentOperand == ''|| this.currentOperand == '-' ) return;
        
        if(this.previousOperand !== ""){
            this.compute();
        }
        if(this.previousOperand !== "" && this.operation !== "" ){
            return;
        }
        this.readyToReset = true;
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        
        let computation 
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);

        if(isNaN(prev)){
            computation = current;
            this.currentOperand = computation;
            this.previousOperand = ''
            this.readyToReset = true;
        }
        
        if(isNaN(current) && this.operation == '√' && prev > 0){
            computation = Math.sqrt(prev);
            this.currentOperand = computation;
            this.previousOperand = ''
            
        }
        if(isNaN(current) && this.operation == '√' && prev < 0){
            alert('Error!It is not possible to extract the square root of a negative number.');
            this.clear();
        }
        else if (isNaN(prev) || isNaN(current))return;
        
        switch(this.operation){
            case '+':
                computation = ((prev * 10) + (current * 10))/10
                break;
            case '-':
                computation = ((prev * 10) - (current * 10))/10
                break;
            case '*':
                computation = ((prev * 10) * (current * 10))/100
                break;
            case '÷':
                computation = prev / current
                break;
            case '^':
                computation = Math.pow(prev,current);
                break;
            default:
                return
        }
        
        this.currentOperand = computation;
        this.previousOperand = ''
        

    };

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.'))return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    getDisplayNumber(number){
        if(number == "-") return number;
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('ru', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }


    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.previousOperand !== "" && this.operation !== '√' ){
             this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        }
        else if(this.previousOperand !== "" && this.operation == '√'){
            this.previousOperandTextElement.innerText = `${this.operation} ${this.previousOperand} `
        }
        
        else{
            this.previousOperandTextElement.innerText = this.previousOperand;
            

        }

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');

const calculator = new Calculator(currentOperandTextElement,previousOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(calculator.previousOperand === '' && calculator.currentOperand !== '' && calculator.readyToReset){
            
            calculator.currentOperand = ''
            calculator.readyToReset = false
        }
        else if(calculator.operation == '√'){
            return;
        }
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', (button) => {
        calculator.compute();
        calculator.updateDisplay();
    })
deleteButton.addEventListener('click', (button) => {
        calculator.delete();
        calculator.updateDisplay();
    })

allClearButton.addEventListener('click', (button) => {
        calculator.clear();
        calculator.updateDisplay();
    })

