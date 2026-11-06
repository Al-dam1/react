import {heroes, type Hero} from '../../data/heroes.data'

const getHeroById = () :Hero=>{
    heroes
    const hero = heroes.find((hero)=>{
        return hero.id === Id;
    })
    if (!hero){
        throw new Error(`no existe un heroe con el id ${id}`)
    }
    return hero;
}
console.log(getHeroById(4));
