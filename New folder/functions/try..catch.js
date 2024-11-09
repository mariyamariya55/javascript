// let arr=[1,2,3,4,5]
// let arr1=[]
// let sum=0;

// try{
//     if(arr.length==0){
//         throw new Error(`the array is empty`)
//     }
//     for(let i=0; i<arr.length;i++){
//         sum+=arr[i]
//     }
    
// }catch(err){
//     console.log(err.message);

// }finally{
//     console.log(sum);
// }




function validnumber(num){



    try{



        if ( typeof num !== 'number'){

throw new error('input must be a number.');

    }


if(num<0 || num>100){

throw new error('number must be 0 tp 100')


}
console.log('number is valid',num);



    }catch(error){
console.log();(error.message)
}
}