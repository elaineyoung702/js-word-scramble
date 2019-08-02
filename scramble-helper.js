function candyCheck(color, camap) { 
  if (camap.has(color)) {
    return camap.get(color);
  } else {
    console.log(`Sorry, that color no have a flavor`);
  }
}
//PRACTICE SESSION
> let greet = 'yo';
undefined
> greet
'yo'
> greet.split();
[ 'yo' ]
> greet = 'yo yo';
'yo yo'
> greet.split();
[ 'yo yo' ]
> .split(greet);
Invalid REPL keyword
> greet.split(' ');
[ 'yo', 'yo' ]
> greet.split('');
[ 'y', 'o', ' ', 'y', 'o' ]
> let lets = greet.split('');
undefined
> lets
[ 'y', 'o', ' ', 'y', 'o' ]
> lets.join()
'y,o, ,y,o'
> lets.join('')
'yo yo'
> lets.join(' ')
'y o   y o'
> lets
[ 'y', 'o', ' ', 'y', 'o' ]
> lets.Math.random()
Thrown:
TypeError: Cannot read property 'random' of undefined
> let ind = Math.floor(Math.random() * 4);
undefined
> ind
0
> let ind = Math.floor(Math.random() * 4);
Thrown:
SyntaxError: Identifier 'ind' has already been declared
> ind = Math.floor(Math.random() * 4);
3
> lets[3]
'y'
> let sw = lets[3]
undefined
> lets[3] = lets[0]
'y'
> lets[0] = sw
'y'
> lets
[ 'y', 'o', ' ', 'y', 'o' ]
> let sw = lets[3]
Thrown:
SyntaxError: Identifier 'sw' has already been declared
> sw = lets[3]
'y'
> lets[3] = lets[1]
'o'
> lets[1] = sw
'y'
> lets
[ 'y', 'y', ' ', 'o', 'o' ]
> let candy = new Map();
undefined
> candy
Map {}
> candy.set(['purple', 'grape'], ['red', 
... 'cherry'], ['yellow', 'lemon'], ['brown', 'rootbeer'], ['black', 'darkness']);
Map { [ 'purple', 'grape' ] => [ 'red', 'cherry' ] }
> candy
Map { [ 'purple', 'grape' ] => [ 'red', 'cherry' ] }
> candy.set(['purple': 'grape'], ['red': 'cherry']) 
Thrown:
candy.set(['purple': 'grape'], ['red': 'cherry']) 
                   ^

SyntaxError: Unexpected token :
> candy.set(['purple', 'grape']; ['red': 'cherry']);
Thrown:
candy.set(['purple', 'grape']; ['red': 'cherry']);
                            ^

SyntaxError: missing ) after argument list
> candy.set('purple', 'grape'; 'red': 'cherry';);
Thrown:
candy.set('purple', 'grape'; 'red': 'cherry';);
                    ^^^^^^^

SyntaxError: missing ) after argument list
> candy.set('purple', 'grape'], ['red', 
Thrown:
candy.set('purple', 'grape'], ['red', 
                    ^^^^^^^

SyntaxError: missing ) after argument list
> const candy2 = new Map([['purple', 'grape'], ['red', 
... 'cherry'], ['yellow', 'lemon'], ['brown', 'rootbeer'], ['black', 'darkness']]);
undefined
> candy2
Map {
  'purple' => 'grape',
  'red' => 'cherry',
  'yellow' => 'lemon',
  'brown' => 'rootbeer',
  'black' => 'darkness' }
> for (const [col, flav] of candy2) {
... console.log(col, flav);};
purple grape
red cherry
yellow lemon
brown rootbeer
black darkness
undefined
> for (const [col, flav] of candy2) {
... console.log(`The ${flav} flavor is colored ${col}`);};
The grape flavor is colored purple
The cherry flavor is colored red
The lemon flavor is colored yellow
The rootbeer flavor is colored brown
The darkness flavor is colored black
undefined
> candy2.get('black');
'darkness'
> candy2.get('void');
undefined
> function candyCheck(color, map) [
Thrown:
function candyCheck(color, map) [
                                ^

SyntaxError: Unexpected token [
> function candyCheck(color, map) {
... if map.get(color) {
Thrown:
if map.get(color) {
   ^^^

SyntaxError: Unexpected identifier
> function candyCheck(color, map) {
...   if map.get(color) {
Thrown:
  if map.get(color) {
     ^^^

SyntaxError: Unexpected identifier
> function candyCheck('black', candy2) {
Thrown:
function candyCheck('black', candy2) {
                    ^^^^^^^

SyntaxError: Unexpected string
> function candyCheck(color, map) {
... Thrown:
candy.set(['purple': 'grape'], ['red': 'cherry']) 
                   ^

SyntaxError: Unexpected token :
> Thrown:
candy.set(['purple', 'grape']; ['red': 'cherry']);
                            ^

SyntaxError: missing ) after argument list
> Thrown:
candy.set('purple', 'grape'; 'red': 'cherry';);
                    ^^^^^^^

SyntaxError: missing ) after argument list
> Thrown:
candy.set('purple', 'grape'], ['red', 
                    ^^^^^^^

SyntaxError: missing ) after argument list
> Thrown:
function candyCheck(color, map) [
                                ^

SyntaxError: Unexpected token [
> Thrown:
if map.get(color) {
   ^^^

SyntaxError: Unexpected identifier
> Thrown:
  if map.get(color) {
     ^^^

SyntaxError: Unexpected identifier
> Thrown:
function candyCheck('black', candy2) {
                    ^^^^^^^

SyntaxError: Unexpected string
> 
> function candyCheck(color, map) {
... Thrown:
candy.set(['purple': 'grape'], ['red': 'cherry']) 
                   ^

SyntaxError: Unexpected token :
> Thrown:
candy.set(['purple', 'grape']; ['red': 'cherry']);
                            ^

SyntaxError: missing ) after argument list
> Thrown:
candy.set('purple', 'grape'; 'red': 'cherry';);
                    ^^^^^^^

SyntaxError: missing ) after argument list
> Thrown:
candy.set('purple', 'grape'], ['red', 
                    ^^^^^^^

SyntaxError: missing ) after argument list
> Thrown:
function candyCheck(color, map) [
                                ^

SyntaxError: Unexpected token [
> Thrown:
if map.get(color) {
   ^^^

SyntaxError: Unexpected identifier
> Thrown:
  if map.get(color) {
     ^^^

SyntaxError: Unexpected identifier
> Thrown:
function candyCheck('black', candy2) {
                    ^^^^^^^

SyntaxError: Unexpected string
> function candyCheck(color, map) {
... Thrown:
candy.set(['purple': 'grape'], ['red': 'cherry']) 
                   ^

SyntaxError: Unexpected token :
> Thrown:
candy.set(['purple', 'grape']; ['red': 'cherry']);
                            ^

SyntaxError: missing ) after argument list
> Thrown:
candy.set('purple', 'grape'; 'red': 'cherry';);
                    ^^^^^^^

SyntaxError: missing ) after argument list
> Thrown:
candy.set('purple', 'grape'], ['red', 
                    ^^^^^^^

SyntaxError: missing ) after argument list
> Thrown:
function candyCheck(color, map) [
                                ^

SyntaxError: Unexpected token [
> Thrown:
if map.get(color) {
   ^^^

SyntaxError: Unexpected identifier
> Thrown:
  if map.get(color) {
     ^^^

SyntaxError: Unexpected identifier
> Thrown:
function candyCheck('black', candy2) {
                    ^^^^^^^

SyntaxError: Unexpected string
> engineer@new-3G-36:~/src/js-word-scramble$ node --use-strict
> const candy2 = new Map([['purple', 'grape'], ['red', 
... 'cherry'], ['yellow', 'lemon'], ['brown', 'rootbeer'], ['black', 'darkness']]);
undefined
> function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log("Sorry, that color doesn't have a flavor");}};
Thrown:
function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log("Sorry, that color doesn't have a flavor");}};
                                       ^^^^^

SyntaxError: Unexpected identifier
> function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color doesn't have a flavor`);}};
Thrown:
function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color doesn't have a flavor`);}};
                                       ^^^^^

SyntaxError: Unexpected identifier
> engineer@new-3G-36:~/src/js-word-scramble$ node --use-strict
> const candy2 = new Map([['purple', 'grape'], ['red', 
... 'cherry'], ['yellow', 'lemon'], ['brown', 'rootbeer'], ['black', 'darkness']]);
undefined
> function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color doesn't have a flavor`);}};
Thrown:
function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color doesn't have a flavor`);}};
                                       ^^^^^

SyntaxError: Unexpected identifier
> function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color no have a flavor`);}};
Thrown:
function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color no have a flavor`);}};
                                       ^^^^^

SyntaxError: Unexpected identifier
> function candyCheck(color, camap) { if camap.has(color) {return camap.get(color)} else {console.log(`Sorry, that color no have a flavor`);}};
> function candyCheck(color, camap) { if (camap.has(color)) {return camap.get(color)} else {console.log(`Sorry, that color doesn't have a flavor`);}};
undefined
> candyCheck('black', candy2);
'darkness'
> candyCheck('void', candy2);
Sorry, that color doesn't have a flavor



// Create a function that reverses a word

// Create a function that takes an array of words and returns a new array of the
// words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
