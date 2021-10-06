interface Mountain {
    name:string;
    height: number;
}

let mountains:Mountain[]=[
    {name:'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name:'Denali', height: 20310},
];

function findNameOfTallestMountain (mountain:Mountain[]):string {
    let biggestMountain: number=0;
    let currentname: string='';

    for (let i=0; i<mountain.length; i++) {
        if (mountain[i].height >biggestMountain) {
            biggestMountain=mountain[i].height;
            currentname=mountain[i].name;
        }
    }
    return currentname;
}
let findName: string=findNameOfTallestMountain(mountains);
console.log(findName);

interface Product {
    name:string;
    price: number;
}
let products:Product[]= [
    {name:'Pepsi', price: 2},
    {name:'Burger', price:5},
    {name:'Fries', price: 3},
];

function calcAverageProductPrice(product:Product[]):string{
    let biggestPrice: number=

    return 'a';
}
