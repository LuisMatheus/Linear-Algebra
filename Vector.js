class Vector{
    constructor(dim,values){
        if (dim<=0){throw('tamanho do vetor invalido')}

        if(values == undefined){
            this.values = [];
            for(let i = 0 ; i < this.dim ; i++){
                this.values.push(0);
            }
        }else{
            if(this.dim == values.length){
                this.values = values;
            }else{
                throw("valores invalidos");
            }
        }
    }

    get(i){
        if(i < 0 || i > this.dim){throw ('Posicao Invalida')}
        return this.values[i-1];
    }

    set(i,value){
        if(i < 0 || i > this.dim){throw ('Posicao Invalida')}
        return this.values[i-1] = value;
    }
}