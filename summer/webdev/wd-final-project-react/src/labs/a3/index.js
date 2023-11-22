import JavaScript from "./java-script";
function Assignment3() {
    return (
      <div>
        <h1>Assignment 3</h1>
        <JavaScript/>
      </div>
    );
   }
   var functionScoped = 2;
   let blockScoped = 5;
   const constant1 = functionScoped - blockScoped;
   let numberArray1 = [1, 2, 3, 4, 5];
   let stringArray1 = ['string1', 'string2'];
   
   let variableArray1 = [
      functionScoped,   blockScoped,
      constant1,        numberArray1,   stringArray1
   ];

   console.log("Working with Arrays");
   for (let i=0; i<numberArray1.length; i++) {
    console.log(numberArray1[i]);
   }
   for (let i=0; i<stringArray1.length; i++){
    console.log(stringArray1[i]);
   }
   for (let i=0; i<variableArray1.length ;i++){
    console.log(variableArray1[i]);
   }
   

   export default Assignment3;