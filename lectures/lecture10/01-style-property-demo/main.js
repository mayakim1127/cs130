
const resetButtonBackground = () => {
    const color = '#EEE';
    document.querySelector('#btn1').style.backgroundColor = color;
    document.querySelector('#btn2').style.backgroundColor = color;
    document.querySelector('#btn3').style.backgroundColor = color;
    document.querySelector('#btn4').style.backgroundColor = color;
    document.querySelector('#btn5').style.backgroundColor = color;
}

const makeRed = () => {
    resetButtonBackground ();
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector("#btn1").style.backgroundColor = "red";
};

const makeBlue = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("#btn2").style.backgroundColor = "blue";
};

const makePink = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor = "pink";
    document.querySelector("#btn3").style.backgroundColor = "pink";
};

const makeOrange = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor = "orange";
    document.querySelector("#btn4").style.backgroundColor = "orange";
};

const makeAqua = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to aqua');
    document.querySelector("body").style.backgroundColor = "aqua";
    document.querySelector("#btn5").style.backgroundColor = "aqua"
};
