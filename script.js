function calcularXOR() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumeroXOR").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumeroXOR").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta XOR
    net.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] },
    ]);
    
    const output = net.run([primeiroNumero, segundoNumero]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoXOR").innerText = resultado;
}

function calcularAND() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumeroAND").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumeroAND").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta AND
    net.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [0] },
        { input: [1, 0], output: [0] },
        { input: [1, 1], output: [1] },
    ]);
    
    const output = net.run([primeiroNumero, segundoNumero]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoAND").innerText = resultado;
}

function calcularOR() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumeroOR").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumeroOR").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta OR
    net.train([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [1] },
    ]);
    
    const output = net.run([primeiroNumero, segundoNumero]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoOR").innerText = resultado;
}

function calcularNOT() {
    const entrada = parseFloat(document.getElementById("entradaNOT").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta NOT
    net.train([
        { input: [0], output: [1] },
        { input: [1], output: [0] },
    ]);
    
    const output = net.run([entrada]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoNOT").innerText = resultado;
}

function calcularNAND() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumeroNAND").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumeroNAND").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta NAND
    net.train([
        { input: [0, 0], output: [1] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] },
    ]);
    
    const output = net.run([primeiroNumero, segundoNumero]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoNAND").innerText = resultado;
}

function calcularNOR() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumeroNOR").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumeroNOR").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta NOR
    net.train([
        { input: [0, 0], output: [1] },
        { input: [0, 1], output: [0] },
        { input: [1, 0], output: [0] },
        { input: [1, 1], output: [0] },
    ]);
    
    const output = net.run([primeiroNumero, segundoNumero]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoNOR").innerText = resultado;
}

function calcularXNOR() {
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumeroXNOR").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumeroXNOR").value);
    
    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [3],
        activation: 'sigmoid',
        leakyReluAlpha: 0.01,
    };
    
    const net = new brain.NeuralNetwork(config);
    
    // Treinamento para a porta XNOR
    net.train([
        { input: [0, 0], output: [1] },
        { input: [0, 1], output: [0] },
        { input: [1, 0], output: [0] },
        { input: [1, 1], output: [1] },
    ]);
    
    const output = net.run([primeiroNumero, segundoNumero]);
    const resultado = output[0] >= 0.5 ? 1 : 0;
    
    document.getElementById("resultadoXNOR").innerText = resultado;
}