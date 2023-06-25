// Currying takes a function that receives more than one parameters
// and breaks it into a series of unary (one parameter) functions

// Therefore, a curried function only takes one parameter at a time

const buildSandwich = (ingredient1)=>{
    return (ingredient2)=>{
        return (ingredient3)=>{
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich('Beacon')('Lettuce')('Tomato');
console.log(mySandwich);

// It works but thats getting ugly and nested the futher we go
// let's refactor:

const buildSammy = ingred1 => ingred2 => ingred3 => 
`${ingred1} ${ingred2} ${ingred3}`;

const mySammy = buildSammy('turkey')('Cheese')('Bread');
console.log(mySammy)