console.log("Hello World")

let fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files[0];
    if(fileList){
        let reader = new FileReader(fileList);
        let firstLine = true;

        var t0 = performance.now();

        reader.onload = function(){
            let lines = reader.result.split('\n');
            let matrix;
            let la = new LinearAlgebra();
            let s = new LinearSis();
            

            for(let i = 0 ; i < lines.length ; i++){
                if(!lines[i].startsWith('%') && lines[i] != ''){
                    let aux = lines[i].split(' ');
                    if(firstLine){
                        matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]));
                        firstLine = false;
                    }else{
                        matrix.set(parseInt(aux[0]), parseInt(aux[1]),parseInt(aux[2]));
                    }
                }
            }

            s.solve(matrix);
            console.log(matrix);

            console.log("Operation took " + (performance.now() - t0) + " ms.")

        };

        reader.readAsText(fileList)

    }
});

