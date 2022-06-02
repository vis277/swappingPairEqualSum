
/**
 * find the sum of both the arrays.
 * find the difference of their sum
 * if 2* (A[i]-B[j])===diffrence the swap pair will give equal sum;
 * above line logic
 * A=[4,1,2,1,1,2] //sum1=11
 * B=[3,6,3,3]//sum2=15
 * diffence=4;
 * to check swap sum is equal we will do sum1-A[i]+B[j]===sum2-B[j]+A[i];
 */
let N=6;
let M=4;
let A=[4,1,2,1,1,2];

let B=[3,6,3,3]


function swap(A,n,B,m){

let count=0;
let sum1=0;
let sum2=0;
for(let i=0;i<n;i++){
    sum1=sum1+A[i];
}
for(let i=0;i<m;i++){
   sum2=sum2+B[i];
}
// console.log(sum1,sum2);
let difference=(sum1-sum2)/2;
for(let i=0;i<n;i++){
   for (let j=i;j<m;j++){
       if(difference===A[i]-B[j]){
           count++;
          return count;
       }
       
   } 
}

return -1
}

console.log(swap(A,N,B,M));
