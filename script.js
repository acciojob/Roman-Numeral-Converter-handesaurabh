function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

 let result = "";

  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}


console.log(convertToRoman(14));  
console.log(convertToRoman(798));  
console.log(convertToRoman(36));  


// do not edit below this line
module.exports = convertToRoman


