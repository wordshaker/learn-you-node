console.log(total(process.argv));

function total(arguments)
{
    var total = 0;
    for(i = 2; i < arguments.length; i++){
        total += Number(arguments[i]);
    }
    return total;
}