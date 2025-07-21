const nums=[10,12,14,15];
console.log(nums);
for(let i;i<nums.length;i++){
    console.log(nums[i]);
}

for (const num of nums){
    console.log(num);
}

const str="javascript";
for(const s of str){
    console.log(s);
}

//looping in object
const glass={
    name:'glass',
    color:'golden',
    price:100,
    isCleaned:true
};
//one way
for(const key in glass){
    const value=glass[key];
    console.log(key , value);
}

//two way
const keys=Object.keys(glass);
for(const key in glass)
{
    const value=glass[key];
    console.log(key,value);
}