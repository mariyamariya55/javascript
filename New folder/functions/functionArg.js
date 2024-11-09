function findSum(...args){
    return args.reduce((acum,current)=>{
        return acum*current
    },1)

    // sum=0;
    // sum+=current
}

console.log(findSum(1,2,3,4));