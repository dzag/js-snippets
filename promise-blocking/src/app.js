function runBlocking(id) {
  Promise
  .resolve()
  .then(() => {
    wait(2000);
    console.log('Finished!');
  });

  // Just log
  console.log('Hello world!')

  // UI Rendering
  $(id).innerHTML = 'Hello world!';
}

function runNonBlocking(id) {
  setTimeout(() => {
    wait(2000);
    console.log('Finished!')
  });
  
  // Just log
  console.log('Hello world!')
  
  // UI Rendering
  $(id).innerHTML = 'Hello world!';
}

