class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    attack(){
        let name = this.name
        let attackHero;

        if(this.type === 'guerreiro'){
            attackHero = 'espada'
        } else if(this.type == 'mago') {
            attackHero = 'magia'
        }else if( this.type =='monge'){
            attack = 'artes marciais'
        }else if( this.type == 'ninja'){
            attackHero = 'shuriken'
        }

        console.log(`o ${name} atacou usando ${attackHero}`)

    }
}

let hero1 = new hero('Lenda', 27, 'ninja')

console.log(hero1)
hero1.attack()

let hero2 = new hero('Power ranger vermelho', 23, 'guerreiro')

// console.log(hero2)
// hero2.attack()