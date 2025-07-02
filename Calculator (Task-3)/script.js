let string = "";
let memory = 0; // For M+ and M- memory storage
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let btn = e.target.innerHTML;

        if (btn == '=') {
            try {
                // Replace % with /100 for percent calculations
                let expression = string.replace(/(\d+)%/g, '($1/100)');
                string = eval(expression);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error!";
                string = "";
            }
        }
        else if (btn == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (btn == 'M+') {
            try {
                memory += eval(string || "0");
                document.querySelector('input').value = "M+";
                string = "";
            } catch {
                document.querySelector('input').value = "Error!";
                string = "";
            }
        }
        else if (btn == 'M-') {
            try {
                memory -= eval(string || "0");
                document.querySelector('input').value = "M-";
                string = "";
            } catch {
                document.querySelector('input').value = "Error!";
                string = "";
            }
        }
        else if (btn == 'MR') { // Optional: Memory Recall
            string = memory.toString();
            document.querySelector('input').value = string;
        }
        else {
            string += btn;
            document.querySelector('input').value = string;
        }
    });
});
