const glass ={name:'glass', color: 'golden',price: 10,isCleaned:true };
console.log(glass);

const keys=Object.keys(glass);
console.log(keys);

const values=Object.values(glass);
console.log(values);

let pair=Object.entries(glass);
console.log(pair);

//delete
// delete glass.isCleaned;
console.log(glass);
//print except that key value
const {color,...shortglass}=glass;
console.log(shortglass);

//freeze obj
// Object.freeze(glass);
glass.color="white";
console.log(glass);

//seal properties
// Object.seal(glass);
glass.source='Bangladesh';
glass.price=500;
console.log(Object.values(glass));