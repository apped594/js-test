
///////Sum All Numbers in a Range
//Solution 1
function sumAll(arr) {

    let sortedarr = arr.sort((a,b)=> a-b);
    let newarr2 = [];

    for (let i = arr[0]+1; i < arr[1];i++) {
        newarr2.push(i);
    };
  (sortedarr.splice(sortedarr[0], 0,...newarr2))
 return sortedarr.reduce((sum,number)=> sum+number);
}

sumAll([1, 4]);

//solution 2

function sumAll2(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll2([1, 4]);

  //Solution 3

  const sumAll3 = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };
  sumAll3([1, 4]);

  //solution 4

  function sumAll4(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll4([1, 4]);

  //Solution 5 - recursive version

  function sumAll5(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll5([1, 4]);

//////// Diff Two Arrays

//Shit Solution

function diffArray(arr1, arr2) {

    for (let i =0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {
            
            if (arr1[i] == arr2[j]) {

                arr1.splice(i,1);
                arr2.splice(j,1);
                arr1.unshift('');
                arr2.unshift('');
            }
        }

    }

   return (arr1.concat(arr2)).filter(item=> item !=="");
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

//Better Solution 1

function diffArray1(arr1, arr2) {
    const newArr = [];

    function firstCompare(first,second) {

        for (let i = 0; i < first.length; i++) {

            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    firstCompare(arr1,arr2);
    firstCompare(arr2,arr1);
  
    return newArr;
  }
  
  diffArray1([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Better Solution 2

function diffArray2(arr1, arr2) {
   return arr1
   .concat(arr2)
   .filter(item=> !arr1.includes(item)||!arr2.includes(item));
  }
  
  diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);

 
  //////// Seek and Destroy

  //solution 1

  function destroyer(arr) {
    let newArr =[];
    
    for (let i = 1; i < arguments.length; i++){
    newArr.push(arguments[i]);

 }

 return arr.filter(item => !newArr.includes(item));
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//solution 2

function destroyer2(arr) {

   return arr.filter(item=>!(Array.prototype.slice.call(arguments,1)).includes(item));
// Uses the slice method on the arguments object form index 1
}

destroyer2([1, 2, 3, 1, 2, 3], 2, 3);

//Solution 3

function destroyer3(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  destroyer3([1, 2, 3, 1, 2, 3], 2, 3);

  //Solution 4

  function destroyer4(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }

  destroyer4([1, 2, 3, 1, 2, 3], 2, 3);

  //Solution 5
  
  function destroyer5(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }

  destroyer5([1, 2, 3, 1, 2, 3], 2, 3);

  ////////Wherefore art thou

  //Solution 1
  
  function whatIsInAName1(collection,source) {
   
    return collection.filter(obj=> {

      let i=0;

      for (let key in source) {

        if (obj.hasOwnProperty(key) && obj[key] === source[key]) {
          i++;
        }
      }

      if (Object.keys(source).length <= i)   {

        return true;
      }

  });

  }

  whatIsInAName1([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  // Solution 2

  function whatIsInAName2(collection,source) {

    let sourceKeys = Object.keys(source);

    return collection.filter(obj=> {

      for (let i = 0; i < sourceKeys.length; i++) {

        if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        } else {
          return true;
        }

      }

    })

  }

  whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Solution 3

  function whatIsInAName3(collection,source) {
     let sourceKeys = Object.keys(source);

     return collection.filter(obj=> sourceKeys
      .every(keys=> obj.hasOwnProperty(keys) && obj[keys] == source[keys])
     );

  }
  whatIsInAName3([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Solution 4

  function whatIsInAName4(collection,source) {

    let sourceKeys = Object.keys(source);

    return collection.filter(obj=> sourceKeys
      .map(keys=> obj.hasOwnProperty(keys) && obj[keys] === source[keys])
      .reduce((a,b)=> a && b)
    );

  }

  whatIsInAName4([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  //Solution 4

  function whatIsInAName5(collection,source) {
    let arr= [];

    for (let i = 0; i < collection.length; i++) {
        let found = true;

        for (let keys in source) {

          if (collection[i][keys] !== source[keys]) {
            found = false;
            break;
          }
        }

      if (found) {
        arr.push(collection[i]);
      }
    }

return arr;
    
  }

  whatIsInAName5([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

  /////Spinal Tap Case

  //Solution 1

function spinalCase1(str) {

  return  str.match(/[A-Z][a-z]+|[a-z]+/g)
             .map(item=> item.toLowerCase())
             .join("-");
}
  
spinalCase1("thisIsSpinalTap");

  //solution 2

function spinalCase2(str) {

 return str.replace(/([a-z])([A-Z])/g,"$1 $2")
       .replace(/\s+|_+/g,"-")
        .toLowerCase();

}
spinalCase2("thisIsSpinalTap");

//solution 3

function spinalCase4(str) {
return str.split(/\s+|_+|(?=[A-Z])/) //make use of a lookahead
.join("-")
.toLowerCase()
}
spinalCase4("AllThe-small Things");

///// Pig Latin

//Solution 1

function translatePigLatin1(str) {

  let regex = /^[^a,e,i,o,u]+/i;

  if (regex.test(str) == false) {

    return str
     .concat("way")

    
  } else {
     
    let newArr =  str.match(regex);
   return str.replace(regex,"")
    .concat(newArr)
    .concat("ay")
    
  }

}

translatePigLatin1("schwartz");

//Solution 2

function translatePigLatin2(str) {

  return str

  .replace(/^[aeiou]\w*/,"$&way")
  .replace(/(^[^aeiou]+)(\w*)/,"$2$1ay")


} 

translatePigLatin2("aain");

/////// Search and Replace

//Solution 1

function myReplace1(str,before,after) {

  if (/[A-Z]/.test(before)) {

     after = after.replace(after[0], after[0].toUpperCase())

  } else {
    after = after.replace(after[0], after[0].toLowerCase())
  }

 return str.replace(before,after);
  
}

myReplace1("Mikayla is moerse Stout in die klas", "Mikayla", "Mia");


//Solution 2

function myReplace2(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split("");
    var sourceArr = source.split("");
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return targetArr.join("");
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}

// test here
myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/////DNA Pairing

//Solution 1

function pairElement1(str){

  let arr2=[];
  let arr = [];
  let newArr = str.split("")
  
 for (let i = 0; i < newArr.length; i++) {

  if (/G/.test(newArr[i])) {

   arr.push(newArr[i])
   arr.push("C");
   arr2.push(arr);
   
   

  } else if (/C/.test(newArr[i])) {
    arr.push(newArr[i])
    arr.push("G");
    arr2.push(arr);
    
  } else if (/A/.test(newArr[i])) {
    arr.push(newArr[i])
    arr.push("T");
    arr2.push(arr);
    
  } else if (/T/.test(newArr[i])) {
    arr.push(newArr[i])
    arr.push("A");
    arr2.push(arr);
    
  }

  arr = [];

 }
 
return arr2
}
pairElement1("ATCGA");

//Solution 2



  function pairElement2(str) {

    // Function to match each character with the base pair

    const matchWithBasePair = function(char) {

      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
  
    return pairs;
  }
  
  // test here
  pairElement2("GCG");


  function pairElement3(str) {

    const pairs = {

      A: "T",
      T: "A",
      C: 'G',
      G: "C"

    };

    return str.split("")
    .map(item=> [item,pairs[item]]);

  }
  pairElement3("GCG");


  /////Missing letters

  //Solution 1

  function fearNotLetter(str) {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let newArr =  str.split('');
    let newArr2 = alphabet.slice(alphabet.indexOf(newArr[0]), (alphabet.indexOf(newArr[newArr.length-1]))+1);
 
    
         let filterstr =  newArr2
                .filter(item=> !newArr.includes(item))
                .join('')
      if (filterstr == '') {

        return undefined;
      } else return filterstr;
  }
  
  fearNotLetter("abcde");

  //Solution 2
  

  function fearNotLetter2(str) {

    let charcode = str.charCodeAt(0);
    let missing =[];
    
    for (let i = 0; i < str.length; i++) {

      if (charcode === str[i].charCodeAt(0)) {
        charcode++;

      } else {
        
        return missing = String.fromCharCode(charcode);
      
      }

    } 
    
 return undefined;

  }
    
  fearNotLetter2("abce");

  //Solution 3

  function fearNotLetter3(str) {

   str =  str
      .split("")
      .sort((a,b)=> {
        return a===b ? 0 : a<b ? -1 :1;
      })
      .join("");

    let newArr = [];

    for (let i = str[0].charCodeAt(0); i <=str[str.length-1].charCodeAt(0); i++) {

      newArr.push(String.fromCharCode(i));

    }

    return newArr
      .filter( item=> !str.split("")
                          .includes(item)
      ) 

  }

  fearNotLetter3("ah");


  /////// Sorted Union

  ///solution 1

  function uniteUnique(arr) {
    
 let newArr = [];

  for (let i = 0; i < arguments.length; i++) {

    for (let j = 0; j < arguments[i].length; j ++) {

      if (newArr.indexOf(arguments[i][j]) < 0 ) {

        newArr.push(arguments[i][j]);
      }
    }

  }

  return newArr;


  }
  
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

  ///solution 2

  function uniteUnique6(...arr) {

    return [...new Set(arr.flat())]; //create set object of the flaten array of the arguments and converting this set object to an array.
    
    //Firstly, a Set is a built-in JavaScript object that lets you store unique values of any type. When you add a value to a Set, it will automatically remove any duplicate values.

  }

  uniteUnique6([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

  ///Solution 3

  function uniteUnique3(arr) {

    return [...arguments] //need to convert the arguments object to an array just like with the Set object above
      .flat()
      .filter((item,ind,arr)=> arr.indexOf(item) === ind);

  }

  uniteUnique3([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);

  //////Convert HTML Entities

  ///solution 1

  function convertHTML(str) {

    const entities = {

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

   return str.split('')

    .map(item => {
      
      if (entities.hasOwnProperty(item)) {
      
      return entities[item];

    } 
    else {return item } 
    })
    .join("");


  }

  convertHTML("Dolce & Gabbana");


  //solution 1B

  function convertHTML1b(str) {

    const htmlElements = {

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    return str.split("")
           .map(item=> htmlElements[item] || item) /// will only check the value item after the || if the first vaue is falsy
           .join("");

  }

  convertHTML1b("Dolce & Gabbana");

  ///solution 2

  function convertHTML2(str) {

    let temp = str.split("");

    for (let i = 0; i < temp.length; i++) {

        switch(temp[i]) {

          case "&" :
            temp[i] = "&amp;";
            break;

          case ">" :
            temp[i] = "&gt;";
            break;

          case "<" :
            temp[i] = "&lt;";
            break;

          case '"' :
            temp[i] = "&quot;";
            break;

          case "'" :
            temp[i] = "&apos;";
            break;
        }

    }
return temp.join("");
  }

  convertHTML2("Dolce & Gabbana");


  ///solution 3

  function convertHTML3(str) {

    const elements = {

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }

    return  str.replace(/[&<>"']/g,item => elements[item]); //can pass function as arguments as well, almost like a map function for arrays

  }

  convertHTML3("Dolce & Gabbana");

/////Sum all fib od numbers

///Solution 1

  function sumFibs(num) {
    
    let fibArr = [0,1];

    for (let i = 0; i < fibArr.length; i++ ) {

       let fibNum = fibArr.slice(i)
        .reduce((sum, number)=> sum + number);

        if (fibNum <= num) {
          fibArr.push(fibNum)
          
        } else {
          break;
        }
      
    }
      console.log(fibArr)
      return fibArr
      .filter(item=> item % 2 !== 0)
      .reduce((sum, item)=> sum+ item)
  }

  sumFibs(10);

  ///Solution 2   ///fastest solution, because dynamically creating an array in JS is rather slow

  function sumFibs2(num) {

    let prevNum = 0;
    let currentNum = 1;
    let result = 0;

    while (currentNum <= num) {

      if (currentNum % 2 !== 0) {
        result = result + currentNum;
      }
      
      currentNum = currentNum + prevNum;
      prevNum = currentNum - prevNum;
      

    }

    return result;

  }

  sumFibs2(10);

  ///Solution 3

  function sumFibs3(num) {

    let fibArr = [1,1];
    let newFib = 0;

    while((newFib = fibArr[0] + fibArr[1]) <= num) {

       fibArr.unshift(newFib);

    }

    return fibArr.filter(item=> item %2 !==0)
    .reduce((a,b)=> a+b)

  }

  sumFibs3(10);

  /////Sum All Primes

  ///Solution 1
  function sumPrimes(num) {

  let numArr = [];

  for (let i = 1; i <=num; i++) {

    numArr.push(i);
    
  }
  console.log(numArr)
  return numArr.filter(item=> 
    
    {
      if (item <= 1) {
        return false
      } else if (item <= 3) {
        return true;
      } else if (item % 2 === 0 || item % 3 === 0) {
        return false;
      }

      for (let i = 5; i * i <= item; i += 6) {
        if (item % i === 0 || item % (i + 2) === 0) return false;
      }
      return true;
    }
  
   )
  .reduce((sum,num)=> sum + num);


  }
sumPrimes(10);


////Solution 2

function sumPrimes2(num) {

  let currentNum = 0;
  let result = 0;

  function isPrime(item) {

    if (item <= 1) {
      return false
    } else if (item <= 3) {
      return true;
    } else if (item % 2 === 0 || item % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= item; i += 6) {
      if (item % i === 0 || item % (i + 2) === 0) return false;
    }
    return true;

  }

  while (currentNum <= num) {

    if (isPrime(currentNum)) {

      result = result + currentNum;
    }

    currentNum ++;

  }

  return result;

}

sumPrimes2(10);

////// Smallest Common Multiple

function smallestCommons1(arr) {

    arr.sort((a,b)=> a-b);
    let newArr = [];
 
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
    }

 
  function divCheck(arr2,num) {

    return arr2.every(item => num % item === 0);
  }
  
  let currentNum = arr[1];

  while (divCheck(newArr,currentNum) === false) {

    currentNum++;

  }

  return currentNum;

}

smallestCommons1([1,5]);


//////Drop it

function dropElements(arr,func) {

  let newArr = [];
 
for (let i = 0; i < arr.length; i++) {

  if (func(arr[i])) {

  newArr =  arr.slice(i);
   break;
  } 
  
}

return newArr;

}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});



////// Steamroller

//Solution 1

function steamrollArray(arr) {

function findDepth(arr, depth = 1) {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = depth;
  for (const item of arr) {
    if (Array.isArray(item)) {
      const currentDepth = findDepth(item, depth + 1);
      maxDepth = Math.max(maxDepth, currentDepth);
    }
  }

  return maxDepth;

}

for (let i = 0; i <= findDepth(arr); i++) {

 arr = arr.map(item=> (Array.isArray(item) ? item : [item]))
.reduce((acum,a)=> acum.concat(a), []);

}
return arr;
}

steamrollArray([1, {}, [3, [[4]]]]);

/////////////////////////

function steamrollArray2(arr) {

  return arr.flat(Infinity);
 
 }
 
 steamrollArray2([1, {}, [3, [[4]]]]);


 /////Binary Agents

 function binaryAgent(str) {

  return  str.split(" ")

  .map(item=> {
    
      let total = 0;

      for (let i = 0; i < item.length; i++) {

       total = total + (item[i] * Math.pow(2, ((item.length-1) - i)));

      }
      return String.fromCharCode(total);
  })
  .join("");

 }

 binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


 ///Everything Be True

 ///Solution 1

 function truthCheck(collection, pre) {

let arrFilter =  collection.filter(obj => {

  if (obj.hasOwnProperty(pre) && Number.isNaN(obj[pre])=== false)
      
       {
        switch(obj[pre]){

          case  false :
            return false;
          
          case Number.isNaN(obj[pre]) :
            return false;
          
          case "" : 
            return false;

          case 0 :
            return false;
          
          case null :
            return false;
       } 
      }
 
else { return false}

return true

})
  

console.log(arrFilter);

  if (collection.length == arrFilter.length ) {

    return true;
  } else {

    return false;
  }
   
    
 }
 truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")


  /////Solution 2 just checking for thr truth

  function truthCheck2(collection, pre) {

     return collection.every(obj=> obj.hasOwnProperty(pre) && obj[pre]);
  
  }

  truthCheck2([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users:[]}], "users");

////// Arguments Optional

///Solution 1
function addTogether(x) {

  if (arguments.length > 1) {
    let newArr = [...arguments];
    if (newArr.every(a=> typeof a == "number"))
    {
        return newArr.reduce((a,b)=> a+b);

    } else{
      return undefined;
    }

  } 
  if (typeof x !== "number") {
    return undefined;
  }
  return function(y) {
    if (typeof y !== "number") {
      return undefined;
    }
    return x+y;
  }

 
}
addTogether(2)(4);

///Solution 2

function addTogether2(...argsx) {

    return function(...argsy) {
     return argsx.reduce((a,b)=>a+b) + argsy.reduce((a,b)=> a+b);
    }
  

 
}
addTogether2(2,3);


function top(x) {

  return function(y) {

   return function(z) {

    return x + y + z + 4;

    }

  }
}

top(1)(3)(4);



////Map a Debris

///Solution 1

function orbitalPeriod(arr) {

  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(obj=> {
    
   let a = earthRadius + obj.avgAlt;

    obj.orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(a,3)/GM)));

    return {name: obj.name, orbitalPeriod: obj.orbitalPeriod}

  })
  


}
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])


//////make a person

///solution 1

const Person = function(first, last) {

  let firstName = first || "Bob";
  let lastName = last || "Ross";

  this.setFirstName = function(newfirst) {

    firstName = newfirst;
  },

  this.setLastName = function(newlast) {
    lastName = newlast;
  },

  this.setFullName = function(newfirst,newlast) {

    firstName = newfirst;
    lastName = newlast;
  }

  this.getFullName = function() {
    
    return (firstName + " " + lastName);
  },

  this.getFirstName = function(){
    return firstName;
  },

  this.getLastName = function() {
    return lastName;
  }

};

let test = new Person();

test.getFullName();

Object.keys(test).length;




function convertHTML9(str) {

  const entities = {

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

 return str.split("")
  .map(item=> entities[item]||item)
  .join("");

}

convertHTML9("Dolce & Gabbana");



function convertHTML10(str) {

 return str.split("")
   .map(item=>{

      switch(item) {

        case "&" : 
       return "&amp;";

        case "<" : 
        return "&lt;";

        case ">" : 
       return "&gt;";

        case '"' : 
       return "&quot;";

        case "'" : 
        return "&apos;";
      }

      return item;
    })
    .join("");
}

convertHTML10("Dolce & Gabbana");



function convertHTML11(str) {

  const entities = {

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  return str.replace(/[&<>"']/g, item => entities[item]);


}

convertHTML11("Dolce & Gabbana");




  