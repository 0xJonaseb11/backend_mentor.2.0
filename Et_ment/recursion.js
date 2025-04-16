const { ethers } = require("ethers");

const Main = async() => {
    const Contract = await ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();

    contract.deployed();
    console.log("The Adress Is: ", contract.address);
}

const FetchError = async() => {
    try {
       await Main();

        console.log("The Address Successfully retrieved");
        process.exit(1);
    } catch(err) {

        console.error("ERROR ECOUNTERED", err);
        process.exit(0);
    } finally {
        console.log("It Is Working");
    }

}
FetchError();

//Another  One
function getFullInfo() {

    let EMPLOYEE = ['etiene','eric'];
    return EMPLOYEE;
}
getFullInfo();

function getName(){

    let name = "etiene";
    return name;
}
getName();

const Info = async() => {
    const Person = await ethers.getFullInfo("EMPLOYEE");
    const person = await Person.getName();

    console.log("The Information Is: ", person.name);
}

const fetchInfo = async() => {
    try {

        await Info();
        console.log("Info retrieved Successfully");
        process.exit(1);
    }catch (err) {

        console.error("Error Ecountered", err);
        process.exit(1);
    }finally{
        console.log("Done");
    }
}

fetchInfo();