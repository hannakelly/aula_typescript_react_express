// 1 - importação de arquivos


import importGreet from './greet.js'

importGreet();





// 2 - import de variavel
import { x } from './variable'

console.log(x)



// 3 - multiplas exportacoes
import {a, b, myfunction} from './multiple'

console.log(a);
console.log(b);

myfunction();




// 4 - alias
import {somename as name} from './changename.js'

console.log(name)




// 5 - import all
import * as myNumbers from './numbers.js'

console.log(myNumbers);
console.log(myNumbers.n1);




// 6 - importando tipos
import {Human} from './mytype.js'

class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    } 
}

const hanna = new User("Hanna", 22)

console.log(hanna)