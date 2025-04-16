const {ethers} = require("ethers");

// let Employee = {
//     company 
// }

// function getName() {
//     let name = "Etienne";
//     return name;
// }
// getName();

// function getPersonalinfo() {
// return Employee ;
// }

const main =  async() => {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();

    const Person  = await company.getPersonalinfo("MINICT");
    const person = await Person.getName()

    await person.nameRetrieved();

    console.log("Employee name is: ", person.name);
    console.log("Employee name is: ", person.target);

    await contract.deployed();

    console.log("Contract deployed at: ", contract.address);
    console.log("Contract deployed at: ", contract.target)
}

// best way to handle errors - by recursion
const runMain = async() => {
    try {
        await main();
        console.log("Main function executed successfully!!");
        process.exit(1)
    } catch(err) {
        console.error("ERROR OCCURRED", err);
        process.exit(0);
    } finally {
        console.log("Finally block in")
    }
}

runMain();