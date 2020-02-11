var main_wasm = fetch('./main.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes));

function fib_wasm() {main_wasm.then(results => {
    instance = results.instance;
    document.getElementById("wasm_text").textContent = instance.exports.fib_wasm(document.getElementById("wasm_but").value);
  }).catch(console.error);
}

document.getElementById("wasm_but").onclick = function() {
    document.getElementById("wasm_but").value = Number(document.getElementById("wasm_but").value) + 1;
    fib_wasm();
}

function fib(x) {
  if (x === 0 || x === 1) {
    return 1;
  } else {
    return fib(x-1) + fib(x-2);
  }
}

document.getElementById("js_but").onclick = function() {
  document.getElementById("js_but").value = Number(document.getElementById("js_but").value) + 1;
  document.getElementById("js_text").textContent = fib(document.getElementById("js_but").value);
}

