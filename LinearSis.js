class LinearSis{
    solve(m){
    
    let res = new Matrix(m.rows,m.cols,m.values);
    let aux = new Vector(m.cols);

    //triangular inferior
    for(let i = 1 ; i <= m.rows ; i++){
        for(let j = 1 ; j <= m.cols -1 ; j++){
            if(i==j){
                //recomeca o j e pula o i
                break;
            }
            else{
                //funcao x*jj = -i,j -> x = -i,j/j,j
                let con = (-1 * res.get(i,j)) / res.get(j,j);
                for(let k = 1 ; k <= m.cols ; k++){
                    aux.set(k, res.get(j,k) * con );
                }
                for(let l = 1 ; l <= m.cols; l++){
                    res.set(i,l, res.get(i,l) + aux.get(l)   );
                }
            }
        }
    }

    //triangular superior
    for(let i = m.rows ; i >= 1 ; i--){
        for(let j = m.cols - 1 ; j >= 1 ; j--){
            if(i==j){
                //recomeca o j e pula o i
                break;
            }else{
                let con = (-1 * res.get(i,j)) / res.get(j,j);
                for(let k = 1 ; k <= m.cols ; k++){
                    aux.set(k, res.get(j,k) * con );
                }
                for(let l = 1 ; l <= m.cols; l++){
                    res.set(i,l, res.get(i,l) + aux.get(l)   );
                }
            }
        }
    }

    //diagonal = 1 e resultado
    for(let i = 1 ; i <= m.rows ; i++){
        //divide a diagonal
        res.set(i,i, res.get(i,i) / res.get(i,i));
        //divide o resultado
        res.set(i,m.cols, res.get(i,m.cols) / res.get(i,i));
    }

    let vec = new Vector(m.rows);

    //amazenando resultado
    for(let i = 1 ; i <= m.rows ; i++){
        vec.set(i,res.get(i,m.cols));
    }

    console.log(vec);
    return vec;
}
}