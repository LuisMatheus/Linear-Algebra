class LinearAlgebra {

    transpose(a){
        let c = new Matrix(a.cols,a.rows);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( j , i ) );
            }
        }

        return c;
    }

    plus(a,b){
        if(a.rows != b.rows || a.cols != b.cols){throw("Matrizes incompativeis");}

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) + b.get(i , j ));
            }
        }

        return c;

    }

    scalarMulti(k,a){
        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) * k);
            }
        }

        return c;
    }

    times(a,b){
        if(a.rows != b.rows || a.cols != b.cols){throw("Matrizes incompativeis");}

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) * b.get(i , j ));
            }
        }

        return c;
    }

    div(a,b){
        if(a.rows != b.rows || a.cols != b.cols){throw("Matrizes incompativeis");}

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) / b.get(i , j ));
            }
        }

        return c;
    }

    dot(a,b){
        if(a.cols != b.rows){throw("Matrizes incompativeis");}
        let res = new Matrix(a.rows,b.cols);
        let sum = 0;

        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= b.cols ; j++){
                sum = 0;
                for(let k = 1 ; k <= b.rows ; k++){
                    sum += a.get( i , k ) * b.get( k , j );
                }
                res.set( i , j , sum );
            }
            
        }
        return res;
    }

    solve(a){
    
        let res = new Matrix(a.rows,a.cols,a.values);
        let aux = new Vector(a.cols);

        //triangular inferior
        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= a.cols -1 ; j++){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }
                else{
                    //funcao x*jj = -i,j -> x = -i,j/j,j
                    let con = (-1 * res.get(i,j)) / res.get(j,j);
                    for(let k = 1 ; k <= a.cols ; k++){
                        aux.set(k, res.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= a.cols; l++){
                        res.set(i,l, res.get(i,l) + aux.get(l)   );
                    }
                }
            }
        }
    
        //triangular superior
        for(let i = a.rows ; i >= 1 ; i--){
            for(let j = a.cols - 1 ; j >= 1 ; j--){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }else{
                    let con = (-1 * res.get(i,j)) / res.get(j,j);
                    for(let k = 1 ; k <= a.cols ; k++){
                        aux.set(k, res.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= a.cols; l++){
                        res.set(i,l, res.get(i,l) + aux.get(l)   );
                    }
                }
            }
        }
    
        //diagonal = 1 e resultado
        for(let i = 1 ; i <= a.rows ; i++){
            //divide a diagonal
            res.set(i,i, res.get(i,i) / res.get(i,i));
            //divide o resultado
            res.set(i,a.cols, res.get(i,a.cols) / res.get(i,i));
        }
    
        let vec = new Vector(a.rows);
    
        //amazenando resultado
        for(let i = 1 ; i <= a.rows ; i++){
            vec.set(i,res.get(i,a.cols));
        }
    
        console.log(vec);
        return vec;
    }
    
}