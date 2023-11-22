function IfElse() {
let true1 = 5 === 1+4;
let false1 = 5 === 2+2;
console.log('If else');
 if(true1) {
    console.log('true1');
 }
 
 if(!false1) {
    console.log('!false1');
 } else {
    console.log('false1');
 }
 return(
    <div>
       <h2>If Else</h2>
       { true1 && <p>true1</p> }
       { !false1 ? <p>!false1</p> : <p>false1</p> }
    </div>
 );
 }
 export default IfElse