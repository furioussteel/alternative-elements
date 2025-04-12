function alternative(nums) {
    let count = 0;
    let arr = [];
    for(let i = 0; i < nums.length; i=i+2) {
        arr[count++] = nums[i];
    }
    return arr;
}
console.log(alternative([10, 20, 30, 40, 50]))
