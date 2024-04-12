const bodyParser = require('body-parser');
const express = require('express');
const path = require('path')
const joi = require('joi');
const { error } = require('console');

const app = express();



// SERVING STATIC FILES
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "static", 'form.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/', (req, res) => {
    console.log(req.body);
    // console.log(req.body.id);
    res.send("Data posted successfully");
});

app.use(bodyParser.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ message: 'success'});
    res.json({ success: true});
})

// USER INPUT VALIDATION
const schema = joi.object.keys({
    email: joi.string().trim().email().required(),
    password: joi.string().max(20).min(6).required()
})

// Validation
app.use('/validation', (req, res) => {
    joi.validate(req.body, schema, (error, result) => {
        if (error) {
            console.log("ERROR", error);
            res.send(error)
        } else {
            console.log(result)
            res.send("Successfully posted data")
        }
    });
});

// Advanced schema
let arrString = ["banana", 'pineapple', 'avocado'];
let arrObject = [{
    example: 'example_1'
},
{
    example: 'example_2'
}
]

const userInput = {
    personalInfo : {
        steetAddress : "kk04356",
        city : "Nyamata",
        state : "Kindonyi"
    },
    preferences : arrString,
};

// Personalinfo schema
const personalInfoSchema = joi.object().keys({
    streetAddress: joi.string().trim().required(),
    city: joi.string().trim().required(),
    state: joi.string().max(6).min(3).required(),
});

// Preferences schema
const preferencesSchema = joi.array().items(joi.string());

// Relating defined schema
const schemaRelation = joi.object().keys({
    preferences : preferencesSchema,
    personalInfo : personalInfoSchema
});

/**
 * Having done above 2 steps,
 * It's now time to validate
 *  ACTUAL VALIDATION
 */
joi.validate(userInput, schemaRelation, (error, result) => {
    if (error) {
        console.log(error);
        res.send(error);
    } else {
        console.log(result);
        reset.send(result);
    }
});

/**
 * Middlewares
 *  Logic executed btn user and server
 */

app.use(bodyParser.json())
app.use('/example', (req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.listen(3000, () => {
    console.log(`App running on http://localhost:3000`);
});