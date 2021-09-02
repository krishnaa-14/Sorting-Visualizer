console.log("working");

// Array size 
var array_size=parseInt(document.getElementById('arraySize').value);

// Array Container 
var container=document.getElementById('arrayContainer');

// Speed 
var speed=parseInt(document.getElementById('speed').value);

// Minval in array
var minVal=20;

// MaxVal in array 
var maxVal=100;

// Container style - We are appending divs in a row
container.style="flex-direction:row"

// Divs
var divs=[];
var currDivSize=[];

// This line make sures when the window loaded createArray function runs  which generates a random array on the screen.
window.addEventListener('load', createArray);

//When we click "Generate New Array" Button also it will also make sure to run createArray function
$('#generate_new_array').click(createArray);

// Even when we change the size of the array using the input slider of size createArray function will run again and we will get
// a random array on the size
$('#arraySize').change(createArray);

//When we change the speed of the animation we are just updating the value in the speed variable above.
$('#speed').change(()=>{speed=parseInt(document.getElementById('speed').value);});

// On Click Bubble Sort
$("#bubble").on("click",bubbleSort);

// On Click Merge Sort
$("#merge").on("click",mergeSort);

function createArray(){

    array_size = parseInt(document.getElementById('arraySize').value);
    speed = parseInt(document.getElementById('speed').value);

    // Intializing the empty container. 
    container.innerHTML = "";

    // Creating the random array. 
    for(var i = 0; i < array_size; i++) {
        
        currDivSize[i] = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
        // Create div
        divs[i] = document.createElement("div");
        container.appendChild(divs[i]);
        updateArray(divs[i],currDivSize[i],"gray");

    }
}

// When Algorithm is running we are disabling every button on the screen. 

function disableButtons(){
    document.getElementById("generate_new_array").disabled = true;
    document.getElementById("merge").disabled = true;
    document.getElementById("bubble").disabled = true;
    document.getElementById("quick").disabled = true;
    document.getElementById("select").disabled = true;
    document.getElementById("insert").disabled = true;
    document.getElementById('arraySize').disabled = true;
 
 }

 // When Algorithm finishes enable every button on the screen. 

 function enableButtons(){
    document.getElementById("generate_new_array").disabled = false;
    document.getElementById("merge").disabled = false;
    document.getElementById("bubble").disabled = false;
    document.getElementById("quick").disabled = false;
    document.getElementById("select").disabled = false;
    document.getElementById("insert").disabled = false;
    document.getElementById('arraySize').disabled = false;
 }
