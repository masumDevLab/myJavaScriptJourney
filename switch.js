var date = new Date();
var today = date.getDay();

switch(today){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is wednusday");
        break;
    case 3:
        console.log("Today is Thursday");
        break;
    case 4:
        console.log("Today is Friday");
        break;
    case 5:
        console.log("Today is Saturday");
        break;
    Default:
        console.log("Not a number");
        break;

}