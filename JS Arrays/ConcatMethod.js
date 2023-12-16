const data1 = ["FULLSTACK", "FRONTEND", "BACKEND"];
const data2 = ["IT TECHNICAL SUPPORT", "ANALYST"];
const data3 = ["DESIGNER","PRODUCER"];

//e convert para maisa tanang arrays
const listofprofessions = data1.concat(data2, data3);

//para e display
document.getElementById("concat").innerHTML = listofprofessions;

//console sa gawas
console.log("DATA", listofprofessions);
