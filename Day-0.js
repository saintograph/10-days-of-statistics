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
        let halfValue = Math.ceil(values.length / 2);
        let newMedian = (Number(values[halfValue]) + Number(values[halfValue - 1]));
        return process.stdout.write(String(newMedian / 2));
    }
    const mode = () => {
        let mode = {};
        let max = 0, count = 0;

        newArray.forEach(function(e) {
            if (mode[e]) { mode[e]++; }
            else { mode[e] = 1; }

            if (count<mode[e]) {
                max = e;
                count = mode[e];
            }
        });
        return process.stdout.write(String(max));
    }
    mean();
    process.stdout.write("\n");
    median();
    process.stdout.write("\n");
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
