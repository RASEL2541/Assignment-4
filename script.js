// Random pin generate and input1 to monitor
function generatePinNumber(){
    const pinNumber = Math.floor(1000 + Math.random() * 8999);
    document.getElementById('input1').value = pinNumber;
}

// ButtonsNumbers 
function inputButton(buttonNumber) {
    document.getElementById("input2").value = input2.value + buttonNumber;
};
//--BackButton----
function BackButton(){
    let value = document.getElementById('input2').value;
    document.getElementById('input2').value = value.substr(0, value.length -1);
  
}
//--cleanButton---
function cleanButton(){
    document.getElementById('input2').value = '';
}

//scend step 
function submit() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    if (input1 !== input2) {
        document.getElementById("notify1").style.display = 'block';
        document.getElementById("notify2").style.display = 'none';
    }
    else {
        document.getElementById("notify2").style.display = 'block';
        document.getElementById("notify1").style.display = 'none';
    }
}