function p5() {
    let m = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    saveMatrixToFile(m ,"./matrixTextFile.txt");
    console.log(loadMatrixFromFile("./matrixTextFile.txt"));
}
const {saveMatrixToFile, loadMatrixFromFile} = require("./matrix");

p5();
