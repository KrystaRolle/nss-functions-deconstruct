const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


// const computerDetails = (obj) => {
// let result = ''
// result += `${computer.id} ${computer.manufacturer} ${computer.specs.memory}` 
// return result
// }

const computerDetails = (computerObj) => {
const computerSentence = `<section id ="computer--${computer.id}"> /n
<h1>Apple ${computerObj.manufacturer}</h1>
<div>Model: ${computerObj.model}</div>
<div>Memory: ${computerObj.specs.memory}GB</div>
<div>Hard drive space: ${computerObj.specs.hardDrive}</div>
<div>Processor speed: ${computerObj.specs.processor} Ghz</div>
</section>`
return computerSentence
}
const result = computerDetails(computer)
console.log(result)



// define a function named buyChocolate, no params, 
//return an object with type property whose value is milk chocolate

/*const buyChocolate = () => {
    const object = {
        type: 'Milk chocolate'
    }
    return object
}

// define a function called addFlavoring, one param, should
//add a new flavor property with a value of 'Mint'

const addFlavoring = (object) => {
    object.flavor = ('Mint')
    return object
}

//define

const makeBarkMixture = (object) => {
    if (object.flavor === 'Mint') {
        object.mixed = true
    } else {
        object.baked = false
    }
}

//create function to make mint Array

const breakBark = (object) {
    if (object.baked) {
        const mintArray = ['Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece']
        return mintArray
    }
}
*/





/*//create a chassisObj, log object to check if made
const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {	}

    return newChassisObject
}
//invoke creatChasseis function
const initiation = createChassis();
console.log(initiation);
//The addWheels() function should have a parameter for the
// incoming chassis object. It should add a new property to that object named
//wheels with a value of 4. The function should return the chassis object.

const addWheels = (initiation) => {
    initiation.wheels = 4
    return initiation
}

//The addEngine() function should have a parameter for the
//incoming chassis object. It should add a new property to that object named
//engine with a value of "4.8L". The function should return the chassis object.
const addEngine = (initiation) => {
    initiation.engine = '4.8L'
    return initiation
}

//The addSteeringWheel() function should have a parameter
//for the incoming chassis object. It should add a new property to
//that object named steeringWheel with a value of "Tilting". The function
//should return the chassis object.

const addSteeringWheel = (initiation) => {
    initiation.addSteeringWheel = 'Tilting'
    return initiation
}
//The addDriveTrain() function should have a parameter
//for the incoming chassis object. It should add a new property to that
//object named driveTrain with a value of "Two wheel drive". The function
//should return the chassis object.
const addDriveTrain = (initiation) => {
initiation.driveTrain = 'Two wheel drive'
return initiation
}

const wheels = addWheels(initiation)
console.log(wheels)
const engine = addEngine(initiation)
console.log(engine)
const Steering = addSteeringWheel(initiation)
console.log(Steering)
const driveTrain = addDriveTrain(initiation)
console.log(driveTrain)*/


//create 4 functions: add subtract divide and multiply
//these functions should have 2 params num1, num2
//code in the function
//create variable for code
//return that variable
//set function call to a variable

/*const add = (num1, num2) => {
let sum = num1 + num2; 
return sum;
}

const subtract = (num1, num2) => {
    let sum = num1 -num2
    return sum;
}

const divide = (num1, num2) => {
   let sum = num1/num2
   return sum 
}

const multiply = (num1, num2) => {
    let sum = num1*num2
    return sum
}

let addition = add(20, 1)
let subtraction = subtract(20,1)
let division = divide(20, 1)
let multiplication = multiply(20, 1)

console.log(addition)
console.log(subtraction)
console.log(division)
console.log(multiplication) */


/*const paper = () => {
    console.log('get paper')
}

const pencil = () => {
    console.log('get pencil')
}

const eraser = () => {
    console.log('get eraser')
}

const reference = () => {
    console.log('find a reference')
}

const observe = () => {
    console.log('observe')
}

const measurements= () => {
    console.log('take measurements')
}

const draft = () => {
    console.log('rough draft')
}
const trace = () => {
    console.log('trace')
}
const final = () => {
    console.log('final layer')
}


pencil()
eraser()
reference()
observe()
measurements()
draft() 
trace() 
final() */
