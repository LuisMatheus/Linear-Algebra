class Transformations{

    /*
    minha funcao dot retorna vetor em vez de matriz
    */
    translate2D(vector,dx,dy){
        let m = new Matrix(3,3,[1,0,dx,
                                0,1,dy,
                                0,0,1 ]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    translate3D(vector,dx,dy,dz){
        let m = new Matrix(4,4,[1,0,0,dx,
                                0,1,0,dy,
                                0,0,1,dz,
                                0,0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    rotation2D(vector,angle){
        let m = new Matrix(3,3,[Math.cos(angle),-Math.sin(angle),0,
                                Math.sin(angle), Math.cos(angle),0,
                                        0      ,       0        ,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    rotation3Dx(vector,angle){
        let m = new Matrix(4,4,[1,      0        ,      0         ,0,
                                0,Math.cos(angle),-Math.sin(angle),0,
                                0,Math.sin(angle), Math.cos(angle),0,
                                0,      0        ,      0         ,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    rotation3Dy(vector,angle){
        let m = new Matrix(4,4,[ Math.cos(angle),0,Math.sin(angle),0,
                                        0       ,1,     0,         0,
                                -Math.sin(angle),0,Math.cos(angle),0,
                                        0       ,0      ,0        ,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    rotation3Dz(vector,angle){
        let m = new Matrix(4,4,[Math.cos(angle),-Math.sin(angle),0,0,
                                Math.sin(angle), Math.cos(angle),0,0,
                                        0      ,       0        ,1,0,
                                        0      ,       0        ,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale2D(vector,value){
        let m = new Matrix(3,3,[value ,   0 ,0,
                                0     ,value,0,
                                0     ,   0 ,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    scale2Dx(vector,value){
        let m = new Matrix(3,3,[value ,0,0,
                                0     ,1,0,
                                0     ,0,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);

    }

    scale2Dy(vector,value){
        let m = new Matrix(3,3,[1,  0  ,0,
                                0,value,0,
                                0,  0  ,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);

    }

    scale3D(vector,value){
        let m = new Matrix(4,4,[value,  0  ,  0  ,0,
                                0    ,value,  0  ,0,
                                0    ,  0  ,value,0,
                                0    ,  0  ,  0  ,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale3Dx(vector,value){
        let m = new Matrix(4,4,[value,0,0,0,
                                0    ,1,0,0,
                                0    ,0,1,0,
                                0    ,0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale3Dy(vector,value){
        let m = new Matrix(4,4,[1,  0  ,0,0,
                                0,value,0,0,
                                0,  0  ,1,0,
                                0,  0  ,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale3Dz(vector,value){
        let m = new Matrix(4,4,[1,0,  0  ,0,
                                0,1,  0  ,0,
                                0,0,value,0,
                                0,0,  0  ,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale3Dxy(vector,value){
        let m = new Matrix(4,4,[value,  0  ,0,0,
                                0    ,value,0,0,
                                0    ,  0  ,1,0,
                                0    ,  0  ,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale3Dyz(vector,value){
        let m = new Matrix(4,4,[1,  0  ,  0  ,0,
                                0,value,  0  ,0,
                                0,  0  ,value,0,
                                0,  0  ,  0  ,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    scale3Dxz(vector,value){
        let m = new Matrix(4,4,[value,0,  0  ,0,
                                0    ,1,  0  ,0,
                                0    ,0,value,0,
                                0    ,0  ,  0  ,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    reflection2Dx(vector){
        let m = new Matrix(3,3,[-1 ,0,0,
                                0  ,1,0,
                                0  ,0,1 ]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    reflection2Dy(vector){
        let m = new Matrix(3,3,[1, 0,0,
                                0,-1,0,
                                0, 0,1 ]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    reflection2Dorigin(vector){
        let m = new Matrix(3,3,[-1, 0,0,
                                0 ,-1,0,
                                0 , 0,1 ]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    reflection3Dyz(vector){
        let m = new Matrix(4,4,[-1,0,0,0,
                                0,1,0,0,
                                0,0,1,0,
                                0,0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
        
    }

    reflection3Dxz(vector){
        let m = new Matrix(4,4,[1, 0,0,0,
                                0,-1,0,0,
                                0, 0,1,0,
                                0, 0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    reflection3Dxy(vector){
        let m = new Matrix(4,4,[1,0, 0,0,
                                0,1, 0,0,
                                0,0,-1,0,
                                0,0, 0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    reflection3Dorigin(vector){
        let m = new Matrix(4,4,[-1,0, 0,0,
                                0,-1, 0,0,
                                0, 0,-1,0,
                                0, 0, 0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    projection2Dx(vector){
        let m = new Matrix(3,3,[1,0,0,
                                0,0,0,
                                0,0,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    projection2Dy(vector){
        let m = new Matrix(3,3,[0,0,0,
                                0,1,0,
                                0,0,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    projection3Dx(vector){
        let m = new Matrix(4,4,[1,0,0,0,
                                0,0,0,0,
                                0,0,0,0,
                                0,0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    projection3Dy(vector){
        let m = new Matrix(4,4,[0,0,0,0,
                                0,1,0,0,
                                0,0,0,0,
                                0,0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    projection3Dz(vector){
        let m = new Matrix(4,4,[0,0,0,0,
                                0,0,0,0,
                                0,0,1,0,
                                0,0,0,1]);
        let n = new Matrix(4,1,[vector.get(1),vector.get(2),vector.get(3),vector.get(4)]);
        return this.dot(m,n);
    }

    shearingX(vector,k){
        let m = new Matrix(3,3,[1,0,0,
                                k,1,0,
                                0,0,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);

    }

    shearingY(vector,k){
        let m = new Matrix(3,3,[1,k,0,
                                0,1,0,
                                0,0,1]);
        let n = new Matrix(3,1,[vector.get(1),vector.get(2),vector.get(3)]);
        return this.dot(m,n);
    }

    dot(a,b){
        if(a.cols != b.rows){throw("Matrizes incompativeis");}
        let aux = new Matrix(a.rows,b.cols);
        let sum = 0;

        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= b.cols ; j++){
                sum = 0;
                for(let k = 1 ; k <= b.rows ; k++){
                    sum += a.get( i , k ) * b.get( k , j );
                }
                aux.set( i , j , sum );
            }
            
        }

        let v = new Vector((aux.rows*aux.cols));
        let cont = 1;
        for (let i = 1; i <= aux.rows; i++) {
            for (let j = 1; j <= aux.cols; j++) {
                v.set(cont,aux.get(i,j));
                cont++;
            }
        }

        return v;
    }
}