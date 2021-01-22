class Solution{
    
    static solution(A){

        let numbersWithCount = {};
        let numbersCounting = {}
        let numberSlice = {};

        for (let number of A) {
           if(numbersCounting[number] == undefined){
                let {max, min} = Solution.getMaxAndMinPosition(A, number);
                numberSlice[number] = (max+1) - min;
                numbersCounting[number] = true;
           }
        }

        return numberSlice;
    }

    static getMaxAndMinPosition(array, number){
        let posiciones = [];
        let max, min = 0;

        for (let i = 0 ; i < array.length ; i++) {
            if(array[i] == number){
                posiciones.push(i);
            }
        }

        max = Math.max.apply(null, posiciones);
        min = Math.min.apply(null, posiciones);

        return { max : max, min : min };
    }
    

}

console.log(Solution.solution([
    1,1,3,4,1,4,5,6,1,5
]));