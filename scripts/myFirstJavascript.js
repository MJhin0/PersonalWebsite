var array = [1, 2, 3, 4, 5]

var print3Ways = function() {
    alert("Hello world!")
    console.log("Hello world!")
    console.log("The value of the array is " + array)
    document.write("<h1>Hello world!<h1>")
}

var funWithArrays = function() {
    document.write("Array holds the values:<br>")
    for (var i = 0; i < array.length; i++) {
        document.write(array[i])
    }
    document.write("The sum of the array is " + sumArray() + "<br>")
    document.write("The min of the array is " + minArray() + "<br>")
    document.write("The max of the array is " + maxArray() + "<br>")
}

var sumArray = function() {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

var minArray = function() {
    var min = array[i]
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min;
}

var maxArray = function() {
    var max = array[i]
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max;
}