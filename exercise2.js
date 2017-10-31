console.log(total(process.argv));

function total(arguments)
{
   return arguments.slice(2, arguments.length)
                   .map(x => Number(x))
                   .reduce((total, nextNum) => total + nextNum);
}