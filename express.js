/***Express web framework */
const express = require('express');
const app = express();

/**get method */
app.get('/',(req,res) =>{//has only one route
 res.send('over..over...First route ');
 }).listen(5000);//or app.listen(5000);

 /**Giving app many routes */
 app.get('/example',(req,res) =>{
     res.send('Hitting example route');
 });
 app.get('/example/:name/:age',(req,res) =>{
     console.log(req.params);
     console.log(req.query);//initially prints empty object
     //run this:=>http:localhost:5000/example/jonas/17?tutorial=paramstutorial&sort=byAge
     res.send(req.params.name + ":" + req.params.age );
 });

 /**Serving Static Files With Express */
 const path = require('path');
 app.use('/public',express.static(path.join(__dirname,'static')));
 app.get('/',(req,res) =>{
     res.sendFile(path.join(__dirname,'static','form.html'));
 });



 /****HTTP Post Request With Express and Body Parser Module */
 const bodyParser = require('body-parser');//body-parser is used to parse the data
 /*Use middleware *///whenever we use middleware, we call app.use
 app.use(bodyParser.urlencoded({extended:false}));
 app.post('/',(req,res) =>{
     console.log(req.body);
     /*Database work here */
     res.send('Successfully posted data');
 });//remember to install body-parser module inoreder to run our program


 /**Working with JSON Data - Express and Body-parser */
 app.use(bodyParser.json());
 app.post('/',(req,res) =>{
     console.log(req.body);
     //Some database call here 
     res.json({success : true});
 });



 /****USER INPUT VALIDATION with EXPRESS and Joi */
 
 //we have get request which basically surge a form to a user */
  //we also have post request which is gonna get the data from a user */
  //We need to validate the data that we get within a request body,,this is where Joi comes in */

 const joi = require('joi');
 const lodash = require('lodash');

 /*we are going to create a schema*/ //is ablue printof the data that we want to have
 const schema = joi.object().keys({
     email :  joi.string().trim().email().required(),
     password : joi.string().min(6).max(10).required()
 });
 /**validation of inputs */
 joi.validate(req.body,schema,(err,result) =>{
     if(err){
         res.send('AN ERROR OCCURRED');
     }else{
         console.log(result);//result is the data inputed from the request body
         res.send('Successfully posted valid data');
     }
 });//Mind to install Joi module next time with internet


 /***User input Validation With Express and Joi, PT2 */
 const arrayaString = ['banana','bacon','cheese'];
 const arrayObjects = [{example : 'example_1'},{example: 'example_2'}];

 const userInput = {personalInfo: {
     streetAddress: '12345678',
     city: 'Kigali',
     state: 'bg'
 },
  preferences: arrayaString/*arrayObjects */
 };
 /**Inorder to get started, we need to first develop the schemas for both  */
 /**ie. schema for personalInfo and scheme for preferences */


 //PERSONALINFO SCHEMA
 const personalInfoSchema = joi.object().keys({
     streetAddress : joi.string().trim().required(),
     city : joi.string().trim().required(),
     state : joi.string().trim().length(2).required()

 });

 ///PREFERENCES SCHEMA

 /**here we'll not use string method instead we use array method */
 const preferencesSchema = joi.array().items(joi.string());/*Joi.object()*/
    /*example: Joi.string().required(); */
 
    /**we'll try to relate schemas created */
 const schema_2 = joi.object().keys({
     personalInfo : personalInfoSchema,
     preferences : preferencesSchema

 });
 /**Validation */
 joi.validate(userInput,schema_2,(err,result) =>{
     if (err){ //WE use the built in schema(that contains all schemas)
         console.log(err);
     }else{
         console.log(result);
     }
 });//When you are given a complicated object you need to first break it down into individual schemas

 
/***GETTING STARTED WITH EJS TEMPLATES WITH EXPRESS*/
app.set('view engine','ejs');
 app.get('/:userQuery',(req,res) =>{
//      res.render('index',{data : {userQuery: req.params.userQuery,
//             searchResults : ['book1','book2','book3'],
//          loggedIn: true,
//      username: jonas
//  }});
 });
app.get('/',(req,res) =>{
res.render('index');
});


/****MIDDLEWARE */
 //Refers to the code that gets executed btn the user request and the server itself
app.use(bodyParser.json);
app.use('/example',(req,res,next) =>{
//next is invoked whenever you create a custom middleware
//if not used, you may time out the server
console.log(req.url,req.method);
next();
}); 

app.use((req,res,next) =>{
    req.banana = 'banana'; 
//note that with middle ware we use app.use to parse data
});
app.get('/',(req,res) =>{
    console.log(req.banana);
    res.send('MiddleWare');
    //app.get is used to get the data of the user
});



/***WORKING WITH THE EXPRESS ROUTER */
//Express Routes helps us to separate our routes into different files
//makes it easy for our code to be managable

/***Need to access my route in pple.js */
const pple = require('./routes/pple');
app.use('/pple',pple);
app.listen(5000); 