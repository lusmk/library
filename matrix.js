const fs = require('fs')

function saveMatrixToFile(matrix, path) {
    let file = fs.createWriteStream(path);
    file.on('error', function(err) {
    });
    matrix.forEach(function(v) { file.write(v.join(', ') + '\n'); });
    file.end()
}

function loadMatrixFromFile(path) {
    let matrix = fs.readFileSync(path, "utf-8");
    return matrix;
}

module.exports.saveMatrixToFile = saveMatrixToFile;
module.exports.loadMatrixFromFile = loadMatrixFromFile;