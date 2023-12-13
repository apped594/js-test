/////Roman Numeral Converter

//Solution 1

function convertToRoman(num) {

    const numbers = {

        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1 

    }

    


}

convertToRoman(36);




 function recursiveSumrange(a,b, total = 0) {
    if (b < a) {

        return total
    }


    
   return recursiveSumrange(a, b-1, total + b);
    
 }

 recursiveSumrange(1,300);


 function  recursiveCountdown(n, arr = []) {

    if (n < 0) {
        return arr;
    }

    arr.push(n);
   return recursiveCountdown(n-1,arr);


 }

 recursiveCountdown(10);

 function flatArray(arr,flatArr = []) {
    
    for (let i = 0; i < arr.length; i ++) {

        if (Array.isArray(arr[i])) {

      flatArr = flatArr.concat(flatArray(arr[i]));

        } 

        else flatArr.push(arr[i]);

    }

    return flatArr;

 }


 flatArray([1,2,4,[3,4,[7,8]]]);


 ///Sum All numbers in a range

 function sumRange(arr) {

    let sortedArr = arr.sort(); 

    const sumRange = function recursivesumRange(a,b,total = 0) {

        if (b < a) {

            return total;
        }

        return recursivesumRange(a, b-1, total + b);
    }

    return sumRange(sortedArr[0],sortedArr[1]);

 }

 sumRange([1,4]);

///Diff Array

 function diffArray(arr1, arr2) {

    const diffArray = [];     /// Empty array to keep the difference

    const diff = function (arrone,arrtwo) { // function that compares one array with another array

       return arrone.map(item=> {
            if (arrtwo.indexOf(item) == -1) {
                diffArray.push(item);
            }
        })
    }

    diff(arr1,arr2); 
    diff(arr2,arr1);
                    //swapping arguments so both arryas are compared.

return diffArray

 }

 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

 //Solution 2

 function diffArray2(arr1,arr2) {

    const combinedArr = [...arr1,...arr2]; //combine both arrays

    return combinedArr.filter(item=> !arr1.includes(item)||!arr2.includes(item));// test absence of presence in either one and return if true.
        
 }

 diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 


function destroyer(arr) {

    let removearr = [...arguments].slice(1); // create an array of all the arguments except for the first one

    return arr.filter(item=> !removearr.includes(item)); // only pass the ones who do not have a presence in removearr.
   
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer2(arr,...valsToRemove) {
    return arr.filter(item=>!valsToRemove.includes(item));
}

destroyer2([1, 2, 3, 1, 2, 3], 2, 3);




function whatIsInAName(collection,source) {
    
   return collection.filter(obj=> {
    let x = 0;
        for (let key in source) {

            if (obj.hasOwnProperty(key) && obj[key] == source[key]) {
                
                x++;
            }
                
        }

        if ( x == Object.keys(source).length) {

            return true;
        }
    })
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });



function whatIsInAName2(collection,source) {

    let sourceKeys =  Object.keys(source); //create array of the source obejct keys

    return collection.filter(obj=>{        //apply the filter method to the collection array testing the truthyness of the obj passed

        for (let i = 0; i < sourceKeys.length; i++) { //iterating through the sourcekeys array

            if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {   //loooking for the deal breaker. key value pairs not matching up between the  2 objects.

                return false;
            } else {
                return true;
            }

        }
    })
}

whatIsInAName2([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

function whatIsInAName3(collection, source) {

    let sourceKeys = Object.keys(source); //create array of source object keys

    collection.filter(obj=> { //filter the collection array to check if each obj is true

        sourceKeys.every(key=> obj.hasOwnProperty(key) && obj[key] === source[key]); //fist check if all the keys are present and if the value pairs for each key matches befre returning true to the filter method to filter the obj.
        
    })

}
whatIsInAName3([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

function whatIsInAName4(collection,source){
    let sourceKeys = Object.keys(source); // create arraay of the keys of source object

    return collection.filter(obj=> sourceKeys //filter the collection array
        .map(key=> obj.hasOwnProperty(key) && obj[key] === source[key]) // check 2 conditions and creating an array of either true or false values once for each condition.
        .reduce((a,b) => a && b) //takes the array created by the map method and reduces it to one value either true or false
    );

}

whatIsInAName4([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

function whatIsInAName5(collection, source) {
let arr= [];

for (let i = 0; i < collection.length; i++) {
    let found = true;

    for (let key in source) {
        if (collection[i][key] !== source[key]) {

            found = false;
            break;
        }

    }
    if (found) {

        arr.push(collection[i])
    }
}

return arr

}

whatIsInAName5([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });


function spinalCase(str) {

 return str.split(/\s+|_+|(?=[A-Z])/) // split this into an array
 .join('-')
 .toLowerCase();
}
spinalCase("This IsSpinal_Tap")

function spinalCase2(str) {

   return str.match(/[A-Z][a-z]+|[a-z]+/g) // extracts the matches/filtering it from the orignal string into an array.
    .map(item=> item.toLowerCase())  // mapping the words to lowercase
    .join("-");
}

spinalCase2("This Is Spinal Tap");

function spinalCase3(str) {

   return str.replace(/([a-z])([A-Z])/g,"$1 $2") // focus on the camelCase word first and adds a space between them lower to uppercase letters
    .replace(/\s+|_+/g,"-") //removes all the spaces and underscores and replacing it with -
    .toLowerCase();
}

spinalCase3("thisIsSpinalTap");

function translatePigLatin(str) {
return str
.replace(/^[a,e,i,o,u]\w*/i,"$&way") // We first put the one that won't change the string and use $& because here is not captured groups, so this refers to the matched substring
.replace(/(^[^a,e,i,o,u]+)(\w*)/i, "$2$1ay"); // This wil match 2 captured groups and then change the string adding ay

}

translatePigLatin("eight");

function translatePigLatin2(str) {

    let regex = /^[^aeiou]+/i; //setting upt our regex for consonants

    if (regex.test(str)) {

        let newArr = str.match(regex); // extracting the consonant or consonant cluster in a New Array
        return str.replace(regex,"") //replacing the consonants in the original string with and empty string
        .concat(newArr) // adding the consonants to the end of the string
        .concat("ay"); //adding ay to the end of the string.

    } else {
       return str.concat("way") //adding way if it isn't a consonant
    }

}

translatePigLatin2("california");


function myReplace(str,before, after) {

    if (before[0] === before[0].toLowerCase()) { // test to see if the before is lowercase

       after = after.replace(after[0],after[0].toLowerCase()); //change after to lowecase if true

    } else{

      after =  after.replace(after[0], after[0].toUpperCase()); //else change after to UpperCase
    }

return str.replace(before,after); //replace before with after
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


function myReplace2(str,before, after) {
    
    if (/[A-Z]/.test(before)) { //test before for uppercase

        after = after.replace(after[0], after[0].toUpperCase()) //change after to uppercase
    } else {

        after = after.replace(after[0], after[0].toLowerCase()) //change after to lowercase
    }
    return str.replace(before,after); // replace before with after
}

myReplace2("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

function myReplace3(str,before, after) {

    function applyCase(source, target) {

      let  sourceArr = source.split(""); //create array of source so we can iterate
      let  targetArr = target.split(""); //create array of target so we can iterate

        for (let i = 0; i < Math.min(sourceArr.length, targetArr.length); i++) { //look for the smallest length betweeb the 2 arrays

            if (/[A-Z]/.test(source[i])) { //test each character of the source array for uppercase /lowercase

               targetArr[i] = targetArr[i].toUpperCase();

            } else {
                
               targetArr[i] = targetArr[i].toLowerCase();
            }
        }

        return targetArr.join(""); // create string from array for after again.
    }

    return str.replace(before, applyCase(before,after)) // repalce before with value returned by applyCase function

}

myReplace3("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


function pairElement(str) {

    const dnaPairs = { // use a object for a lookup for the DNA pairs

        A: "T",
        T: "A",
        C: "G",
        G: 'C'
    }

   return str.split("") //create an array of the string so we can iterate through each item
   .map(item=> [item, dnaPairs[item]]); // retrn the original item and the DNA pair combined as an array item.
}

pairElement("GCG");

function pairElements2(str) {
    
    return str.split("") // create array of the sring so we can iterate through each item.
    .map(item=>{

       switch(item) {   //test the cases for each item

            case "A":       /// returns the DNA pair when the case is true, no break needed as we are returning the valueinsode an array as soon as we get it.
                 return ["A", "T"]; // this return will return the map fucntion as well and take the next item, look at GPT for explanation
                

            case "T":
                return ["T", "A"];
                

            case "C":
                return ["C", "G"];
                

            case "G":
                return ["G", "C"];
                
        }

    })

}
pairElements2("ATCGA");


function fearNotLetter(str) {

    let completeArr = []; // create empty array to store the complete range of letters

    for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++) { // creat a complete range of letters between the starting and ending letters of the string
        completeArr.push(String.fromCharCode(i));
    }

    return  completeArr.filter(item=>!str.includes(item)) // compare the complete array with the letters in the str
            .join(""); // return as a string

}

fearNotLetter("abce");

function fearNotLetter2(str) {
    let missingArr = [];        // array to keep the missing letters
    let startLetter = str.charCodeAt(0);   //determine the starting Char code number
    
        for (let i = 0; i < str.length; i++) {   //iterating through the string
            
            if (str.charCodeAt(i) == startLetter) {   // this should match unless a letter is missing between the range

                startLetter ++;   // increment starting letter to comapre to the charcode for the next letter

            } else{

                missingArr.push(String.fromCharCode(startLetter));   // should they not match we will push the starletter charcode at that point to the missing array and decrement i wiht one because a letter is missing, we need to get it back to the startletter charcode
                startLetter++;
                i--;

            }
        }
    if (missingArr.length > 0) {   // checking if we have any values in missing array

        return missingArr.join("");   //return string if we do

    }else{

        return undefined;
    }
        
}

fearNotLetter2("abceg");


function uniteUnique(arr) {

    let finalArr = []; // array without any duplicates
    [...arguments].flat(Infinity) //use arguments object and create an array of all arguments. We need to flaten the arrays in order to iterate thourgh the array more easily.
    .map(item=>{       // use the map method on the arguments array to check for the presense of each element int the finalArr.

        if (finalArr.indexOf(item) == -1) {

            finalArr.push(item);    // if not found then push item to final array
        }
    })
    return finalArr

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUnique2(arr) {

    return [...arguments].flat() //create array from the arguments object. Flatten the array so we have one array
    .filter((item,ind,arr)=> arr.indexOf(item) === ind) // use the filter method but pass the item,ind of the item and the array calling the filter method.  indexOf will return the first instance of an element if there are duplicates. So if the ind does not macth the item being processed then it's a duplicate and gets filtered.
}

uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function convertHTML(str) {

    
}