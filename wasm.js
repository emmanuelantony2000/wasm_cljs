function fib_wasm() {fetch('./main.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
    instance = results.instance;
    document.getElementById("wasm-text").textContent = instance.exports.fib_wasm(document.getElementById("wasm_but").value);
  }).catch(console.error);
}

document.getElementById("wasm_but").onclick = function() {
    document.getElementById("wasm_but").value = Number(document.getElementById("wasm_but").value) + 1;
    fib_wasm();
}


