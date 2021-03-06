class Solution{
    
    static solution(A){

        let numberSlice = {};
        let maxSlice = 0;

        for (let number of A) {
           if(numberSlice[number] == undefined){
                let {max, min} = Solution.getMaxAndMinPosition(A, number);
                numberSlice[number] = (max+1) - min;

                if(numberSlice[number] > maxSlice){
                    maxSlice = numberSlice[number];
                }
           }
        }

        return maxSlice;
    }

    static getMaxAndMinPosition(array, number){
        let positions = [];
        let max, min = 0;

        for (let i = 0 ; i < array.length ; i++) {
            if(array[i] == number){
                positions.push(i);
            }
        }

        max = Math.max.apply(null, positions);
        min = Math.min.apply(null, positions);

        return { max : max, min : min };
    }
    

}

console.log(Solution.solution([
    4,1,5,6,5,6,6,5,6,6
]));