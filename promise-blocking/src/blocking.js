Promise
  .resolve()
  .then(() => {
    wait(2000);
    console.log('Finished!');
  });

// Just log
console.log('Hello world!')

// UI Rendering
$('#root').innerHTML = 'Hello world!';