function processData(input) {
    //Enter your code here
    const array = input.slice('3');
    const newArray = array.split(' ');
    const mean = () => {
        let answer = 0;
        for (i = 0; i < newArray.length; i++) {
            answer += parseInt(newArray[i]);
        }
        return process.stdout.write(String((answer/10).toFixed(1)));
    }
    const median = () => {
        let values = newArray;
        values.sort( function(a,b) {return a - b;} );
        return process.stdout.write(String());
    }
    const mode = () => {
        return process.stdout.write(String());
    }
    mean();
    process.stdout.write("\n");
    median();
    mode();
    // process.stdout.write(String(array[1].length));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
