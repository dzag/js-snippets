/**
 * Taken from http://archive.is/adziP 
 */
function wait(ms) {
  let now = Date.now()
  let end = now + ms
  while (end > now) {
      now = Date.now()
  }
}

let $ = any => document.querySelector(any);