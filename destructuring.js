const student = {
    'name':'Prodip',
     'dist':'Tangail',

}

const {name:fname,dist}=student;
console.log(fname,'\n',dist);

const nums =[10,20,30,40];
const [x,y,z,a]=nums;
console.log(x,y,z);

// Create a String
let names = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = names;
console.log(a1,a2,a3,a4,a5);