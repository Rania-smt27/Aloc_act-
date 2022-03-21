const express = require('express');
//first we initialise a nose with node init 
//we insttal express with this command npm i express
//start execution in terminal "node index.js"
//insttal a node package -> nodemon(npm i  -g nodemon) to not go to terminal and say "nodemon index.js"

const app = express();
const Joi = require('joi');
app.use(express.json());
const jobs = [
    { id: 1, nom: 'WebDev', ville: 'Oran' },
    { id: 2, nom: 'MobileDev', ville: 'Alger'},
    { id: 3, nom: 'fullStack', ville: 'Telemcen'},
]; 
app.get('/',(req, res) =>{
    res.send('Hello World!!!!');
});
//define new rond by calling aap.get
app.get('/api/jobs',(req, res) => {
    res.send(jobs);
});



//Route Parameters:
/*app.get('/api/jobs/:nom/:ville', (req, res) => {
    res.send(req.params); after executi -> {"nom":"WebDev","ville":"Mostaganem"}
    res.send(req.query);//sortBy=name
});
*/
//handelling GET request:
app.get('/api/jobs/:id',(req, res) => {
   const job =  jobs.find(c => c.id === parseInt(req.params.id));
   if (!job)  res.status(404).send('le Job avec ID donnée  est pas trouvé.');
   res.send(job);//404
});
//Post 
app.post('/api/jobs', (req, res) => {
    const shema = {
        nom: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, shema);
    
    //input validation (la vérification):
    //if(!req.body.nom || req.body.nom.length < 3) {
        //404 ERROUR
        //res.status(400).send('le nom est obligatoire et ne doit pas etre inf à 3 charactére.');
        if(result.error){
            res.status(400).send(result.error.details[0].message);//show error message in potman
            return;
        }
        
    
    const job = {
        id: jobs.length + 1,
        nom: req.body.nom,
        ville: req.body.ville,
    };
    jobs.push(jobs);
    res.send(job);
});

// envirement variable for hosting variable (PORT) env:
const port  = process.env.PORT || 3000; 
app.listen(port,() => console.log(`Listenning on port ${port}...`));//SET an envirement variable "SET PORT=5000"





