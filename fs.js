const { readFile, writeFile, appendFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) return console.error(err);

  const first = res;

  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) return console.error(err);

    const second = res;

    writeFile('./content/result-asyn.txt', `${first} ${second}`, (err) => {
      if (err) return console.error(err);
    });

    console.log('done');
  });
});

console.log('next task');
