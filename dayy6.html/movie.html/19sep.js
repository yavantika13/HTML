let arr=[1,2,-3,4,5]
let k=3
let n= arr.length
let wSum=0;
for(let i=0;i<k ;i++){
    wSum+=arr[i]
}
let maxSum=wSum
for(let i=k;i<n;i++){
    wSum=wSum+arr[i]-arr[i-k]
    if(wSum>maxSum){
        maxSum=wSum
    }
}
console.log(maxSum)