//Clossure
function res(){
    let a=10;
    return function(n){
        a=n
        return a;
    };

}
res1=res()
console.log(res1(20));
var res2=res()
console.log(res2(30));
