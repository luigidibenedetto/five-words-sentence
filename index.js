const readline = require('readline');
const consola = require('consola');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  function askSentence() {
    rl.question('Please insert a sentence made by 5 words: ', (sentence) => {
        const spaceCount = (sentence.split(" ").length - 1);
        console.log(spaceCount)
        if (spaceCount < 4) {
            consola.error(`"${sentence}" contains less then 5 words!`);
            askSentence();
        
        } else {
            consola.success(`Very good! "${sentence}" is correct`);
            rl.close();
        }
        
    });
  }
  askSentence();