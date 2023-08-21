function bubbleSort(vec, n){
    let i;
    let j;
    let aux;

    for(i=0; i<n-1 ; i++){
        for(j=1; j<n-i ; j++){
            if(vec[j] < vec[j-1]){
                aux = vec[j-1];
                vec[j-1] = vec[j];
                vec[j] = aux;
                console.log(vec);
            }
        }
    }
}

// let vetor = [3,2,1];

// bubbleSort(vetor,vetor.length);