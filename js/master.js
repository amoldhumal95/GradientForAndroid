let startColor = document.getElementById('StartColor');
let endColor = document.getElementById('EndColor');
let currentDirection = '45';
let outputCode = document.getElementById('code');

function setDirection(value,_this){
    let directions = document.querySelectorAll(".buttons button");
    
    for(let i of directions){
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
}

function generateCode(){

    document.getElementById('copy').style.backgroundColor = 'blue';
    document.getElementById('copy').innerText = 'copy';

    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${startColor.value}, ${endColor.value});`

    outputCode.value = `<?xml version="1.0" encoding="utf-8"?>
                    <shape xmlns:android="http://schemas.android.com/apk/res/android">
                    <gradient android:type="linear" android:angle="${currentDirection}"
                    android:startColor="#ff${startColor.value}" android:endColor="#ff${endColor.value}" />
                    </shape>`


    document.getElementsByTagName("body")[0].style.backgroundImage = `linear-gradient(${currentDirection}deg, ${startColor.value}, ${endColor.value})`;
}


function copyText(){
    outputCode.select();
    document.execCommand('copy');
    
    document.getElementById('copy').style.backgroundColor = 'green';
    document.getElementById('copy').innerText = 'copied';
}