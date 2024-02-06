/* hello(goodbye);

function hello(callback){
    console.log('Hello!');
    callback();
}

function goodbye(){
    console.log('Goodbye');
} */
sum(displayConsole, 2, 3);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}