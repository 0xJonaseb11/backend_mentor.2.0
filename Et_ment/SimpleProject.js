
const PersonalData =[];

function Add() {

    const Name = document.getElementById("name").value;
    const Age = document.getElementById("age").value;
    const Address = document.getElementById("address").value;
    const message = document.getElementById("messages");
    
    const person = [
        {
           names: Name, Ages: Age, Addresses: Address
         },
        //  {
        //   names: "Etiene", Ages: 12, Addresses: "Bugesera"
        // }
      
    ];
   
    PersonalData.push(person);
    console.log(PersonalData);

    // const namess = PersonalData.map(namesss => namesss.Name);
    // console.log(namess);
}

//console.log(PersonalData);
Add();