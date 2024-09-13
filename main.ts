// 1. Basic Types va Unions

// a) Quyidagi o'zgaruvchilarni to'g'ri TypeScript turlari bilan e'lon qiling:
let ism:string ='salom';
let yosh: number=9;
let talabami: boolean=true;
let hobby: string | null=null;

// b) Ushbu funksiyani tugallang. U raqam yoki string qabul qilishi va
// har doim string qaytarishi kerak.
function stringgaAylantir(qiymat: number | string): string {
    // Sizning kodingiz
    return ''+qiymat
}

// 2. Objects va Interfaces

// a) "Kitob" uchun interface yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - sarlavha (string)
// - muallif (string)
// - nashrYili (number)
// - sahifalarSoni (number)
// - mavjud (boolean)
interface Kitob {
    sarlavha:string,
    muallif:string,
    nashrYili:number,
    sahifalarSoni:number,
    mavjud:boolean
}

// b) Kitob interfeysi asosida kamida 3 ta kitob obyektini yarating

let kitob1:Kitob={
    sarlavha:'XXXX',
    muallif:'Ali',
    nashrYili:1999,
    sahifalarSoni:90,
    mavjud:true
}

let kitob2:Kitob={
    sarlavha:'A',
    muallif:'Vali',
    nashrYili:2022,
    sahifalarSoni:150,
    mavjud:false
}

let kitob3:Kitob={
    sarlavha:'bb',
    muallif:'Tesha',
    nashrYili:2020,
    sahifalarSoni:120,
    mavjud:true
}

// c) Quyidagi funksiyani tugallang. U Kitob obyektini qabul qiladi va 
// kitob haqida ma'lumotni string ko'rinishida qaytaradi.
function kitobHaqidaMalumot(kitob: Kitob): string {
    return `Nomi: ${kitob.sarlavha} Muallif: ${kitob.muallif} Nashr yili: ${kitob.nashrYili} Sahifalar soni: ${kitob.sahifalarSoni}`
}

// 3. Amaliy mashq: Kutubxona tizimi

// a) "Kutubxona" nomli class yarating. Unda quyidagi xususiyatlar bo'lishi kerak:
// - kitoblar (Kitob turidagi array)
// - kitobQoshish(kitob: Kitob) metodi
// - kitobniTopish(sarlavha: string) metodi
// - mavjudKitoblarSoni() metodi
class Kitob {
    constructor(public sarlavha: string, public muallif: string) {}
}
class Kutubxona {
    private kitoblar: Kitob[] = [];

    
    kitobQoshish(kitob: Kitob): void {
        this.kitoblar.push(kitob);
    }

    
    kitobniTopish(sarlavha: string):any {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }

    mavjudKitoblarSoni(): number {
        return this.kitoblar.length;
    }
}

// b) Kutubxona classidan obyekt yarating va unga bir nechta kitoblar qo'shing

const kutubxona = new Kutubxona();
const kitob01 = new Kitob("B", "A");
const kitob02 = new Kitob("K", "L");
const kitob03 = new Kitob("H", "G");

kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
kutubxona.kitobQoshish(kitob03)

// c) Qo'shilgan kitoblar orasidan birini izlab toping
console.log(kutubxona.kitobniTopish("Hobbit"));

// d) Mavjud kitoblar sonini chiqaring

console.log(kutubxona.mavjudKitoblarSoni()); 

