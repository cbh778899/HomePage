class Calculator {
    constructor() {
        this.generateBody();
    }

    body = document.createElement("form");

    generateBody() {
        this.body.className = "Calculator";
        this.body.onsubmit = this.submitHandler;
        this.body.innerHTML = 
            "<input type='text' disabled name='formula' id='CalculatorFormula' value=''>"+
            "<div class='TopSymbols'>" +
                "<input type='button' class='Button Symbol' value='AC'>" +
                "<input type='button' class='Button Symbol' value='/'>" +
                "<input type='button' class='Button Symbol' value='*'>" +
                "<input type='button' class='Button Symbol' value='-'>" +
            "</div>" +
            "<div class='RightSymbols'>" +
                "<input type='button' class='Button Symbol' value='+'>" +
                "<input type='submit' class='Button Symbol' value='='>" +
            "</div>" +
            "<div class='InputNumbers'>" +
                "<input type='button' class='Button' value='1'>" +
                "<input type='button' class='Button' value='2'>" +
                "<input type='button' class='Button' value='3'>" +
                "<input type='button' class='Button' value='4'>" +
                "<input type='button' class='Button' value='5'>" +
                "<input type='button' class='Button' value='6'>" +
                "<input type='button' class='Button' value='7'>" +
                "<input type='button' class='Button' value='8'>" +
                "<input type='button' class='Button' value='9'>" +
                "<input type='button' class='Button Zero' value='0'>" +
                "<input type='button' class='Button' value='.'>" +
            "</div>" +
            "<input type='hidden' value='false' id='CalculatorGotResult'>";
        document.getElementById("ToolPage").appendChild(this.body);
        this.addEventListeners();
    }

    submitHandler = (event) => {
        event.preventDefault();
        const formula = event.target.formula.value;
        document.getElementById("CalculatorFormula").value = this.calculate(formula);
        document.getElementById("CalculatorGotResult").value = 'true';
    }

    addEventListeners = () => {
        const calculator_formula = document.getElementById("CalculatorFormula");
        const buttons = document.querySelectorAll('.Button');
        buttons.forEach((b) => {
            b.addEventListener("click", (e) => {
                this.updateStyle(b);
                const value = e.target.value;
                if(value === 'AC') {
                    calculator_formula.value = "";
                } else if(value === '=') {
                    this.body.submit.call();
                } else
                    calculator_formula.value = calculator_formula.value + value;
            });
        });

        this.body.addEventListener("keydown", (e) => {
            var btn = null;
            switch(e.key) {
                case 'Escape': btn = buttons[0]; break;
                case '/': btn = buttons[1]; break;
                case '*': btn = buttons[2]; break;
                case '-': btn = buttons[3]; break;
                case '+': btn = buttons[4]; break;
                case 'Enter': btn = buttons[5]; break;
                case '1': btn = buttons[6]; break;
                case '2': btn = buttons[7]; break;
                case '3': btn = buttons[8]; break;
                case '4': btn = buttons[9]; break;
                case '5': btn = buttons[10]; break;
                case '6': btn = buttons[11]; break;
                case '7': btn = buttons[12]; break;
                case '8': btn = buttons[13]; break;
                case '9': btn = buttons[14]; break;
                case '0': btn = buttons[15]; break;
                case '.': btn = buttons[16]; break;
                case 'Backspace':
                    if(document.getElementById("CalculatorGotResult").value === 'true') {
                        calculator_formula.value = '';
                        document.getElementById("CalculatorGotResult").value = 'false';
                    }
                    else {
                        var value = calculator_formula.value;
                        calculator_formula.value = value.substr(0, value.length - 1);
                    } break;
            };
            
            if(btn)
                btn.click();
        });
    }

    calculate(formula) {
        var result;
        var parts;

        if((parts = formula.split('+')).toString() === formula) {

            if((parts = formula.split('-')).toString() === formula) {
                    
                if((parts = formula.split('*')).toString() === formula) {
                    
                    if((parts = formula.split('/')).toString() === formula) {

                        result = parseFloat(formula);

                    } else {
                        result = this.calculate(parts[0]);
                        for(var i = 1; i < parts.length; i++)
                            result /= this.calculate(parts[i]);
                    }
                } else {
                    result = this.calculate(parts[0]);
                    for(var i = 1; i < parts.length; i++)
                        result *= this.calculate(parts[i]);
                }
            } else {
                result = this.calculate(parts[0]);
                for(var i = 1; i < parts.length; i++)
                    result -= this.calculate(parts[i]);
            }
        } else {
            result = this.calculate(parts[0]);
            for(var i = 1; i < parts.length; i++)
                result += this.calculate(parts[i]);
        }

        return result;
    }

    updateStyle = async (btn) => {
        btn.classList.add("Clicked");
        await new Promise((s)=>setTimeout(s, 100));
        btn.classList.remove("Clicked");
    }
}