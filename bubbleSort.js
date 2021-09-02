async function bubbleSort() {

    disableButtons();

    for(var i = 0; i < array_size; i++) {

        for(var j = 0; j < array_size - i - 1; j++) {

            // We are selecting current two array elements and changing their colour to yellow
            await timeout(speed);
            updateArray(divs[j], currDivSize[j], "yellow");
            updateArray(divs[j + 1], currDivSize[j + 1], "yellow");

            // This is standard bubble sort that if arr[j] > arr[j + 1] we should swap elements
            if(currDivSize[j] > currDivSize[j + 1]) {

                var temp = currDivSize[j];
                currDivSize[j] = currDivSize[j + 1];
                currDivSize[j + 1] = temp;

                
                await timeout(speed);
                updateArray(divs[j], currDivSize[j], "yellow");
                updateArray(divs[j + 1], currDivSize[j + 1], "yellow");
            }

            await timeout(speed);
            updateArray(divs[j], currDivSize[j], "grey");
            updateArray(divs[j + 1], currDivSize[j + 1], "grey");

            
        }

        updateArray(divs[array_size - i - 1], currDivSize[array_size - i - 1], "green");
    }

    enableButtons();

}