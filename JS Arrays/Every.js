const ages = [21, 25, 30, 40];

document.getElementById('every').innerHTML = ages.every(checkAges);

function checkAges(age){

    return age > 20;
};



