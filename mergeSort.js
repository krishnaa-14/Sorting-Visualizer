
console.log("Merge function is working");

async function mergeArrays(start, end, mid) {

    var temp = [];

    // i pointer for first half of subarray . j pointer for second half of subarray.
    var i = start, j = mid + 1, k = 0;

    while(i <= mid && j <= end) {
        if(currDivSize[i] < currDivSize[j]) {
            
            // Here ith pointer element is smaller 
            // Here we are storing out minimum element to the "temp" array and just showing by updating the minimum element 
            // div color to "red";
            await timeout(speed);
            updateArray(divs[i], currDivSize[i], "red");
            temp[k] = currDivSize[i];
            i = i + 1, k = k + 1;
        }
        else {
            // Here jth pointer element is smaller
            // Here also we are storing the minimum element to the "temp" array and showing by updating the minimum element 
            // div color to "red";
            await timeout(speed);
            updateArray(divs[j], currDivSize[j], "red");
            temp[k] = currDivSize[j];
            j = j + 1, k = k + 1;
        }
    }

    while(i <= mid) {
        await timeout(speed);
        updateArray(divs[i], currDivSize[i], "red");
        temp[k] = currDivSize[i];
        i = i + 1, k = k + 1;
    }

    while(j <= end) {
        await timeout(speed);
        updateArray(divs[j], currDivSize[j], "red");
        temp[k] = currDivSize[j];
        j = j + 1, k = k + 1;
    }

    for(var i = start; i <= end; i++) {
        // By this we stored all the sorted elements in the temp array and now we are updating the div sizes of the elements
        // using the temp array
        await timeout(speed);
        currDivSize[i] = temp[i - start];
        updateArray(divs[i], currDivSize[i], "green");
    }

}

async function mergeHelper(start,end) {

    if(start < end) {
        // Caluclating the mid value 
        var mid = Math.floor((start + end) / 2);

        // Changing the colour of the middle element. - "Yellow" Just to show the mid element of the array every time. 
        await timeout(speed);
        updateArray(divs[mid], currDivSize[mid], "yellow");

        // Recursively calling the left subarray
        await mergeHelper(start, mid);

        // Recursively calling the right subarray
        await mergeHelper(mid + 1, end);

        // Merging the both sorted arrays
        await mergeArrays(start, end, mid);
    }
}

async function mergeSort() {

    disableButtons();
    await mergeHelper(0, array_size - 1);
    enableButtons();

}