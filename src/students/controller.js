const pool = require("../../db");
const queries = require('./queries');

const getStudents = (req, res) => {
    console.log( 'all students from data table');

    pool.query( queries.getStudents, (error, results) =>{
        if(error) throw error;
        
        res.status(200).json(results.rows);
    })
}

const getStudentById = (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);

    pool.query( queries.getStudentById, [id], (error, results) =>{
        if(error) throw error;

        res.status(200).json(results.rows);
        // res.send("idddd")
    })
}

const addStudent = (req, res) =>{
    const { name , email, age, dob} = req.body;
    console.log(req.body);

    if(!name || !email){
        return res.status(404).send("Didn't get name or email")
    }

    pool.query( queries.getStudentByEmail, [email],  (error, results) =>{
        if(error) throw error;

        if(results.rows.length) {
            res.status(400).send("Email already exists");
        }
        else{
            
            pool.query( queries.addStudent, [name, email, age, dob], (error, results) =>{
                if(error) throw error;
    
                res.status(201).send(` ${name} added to students table`);
            })
        }

    })
}


const deleteStudent = (req, res) =>{
    const id = parseInt(req.params.id);

    pool.query( queries.getStudentById, [id], (error, results) =>{
        if(error) throw error;
        
        if(!results.rows.length){
            res.status(400).send(`student of id ${id} doesn't exist`);
        }
        else{

            pool.query( queries.deleteStudent, [id], (error, results) =>{
                if(error) throw error;
        
                res.status(200).send(`id : ${id} was deleted`);
            })
        }

    })

}

const updateStudentName = (req, res) =>{
    const {id, name} = req.body;
    console.log(req.body);

    // res.send(`id is ${id} and name ${name}`)

    pool.query( queries.getStudentById , [id], (error, results) =>{
        if(error) throw error;

        if(!results.rows.length){
            res.status(400).send(`student of id ${id} doesn't exist`)
        }
        else{
            
            pool.query( queries.updateStudent, [name, id], (error, results) => {
                if(error) throw error;

                res.status(200).send(`student of id ${id} was named ${name}`);
            })
        }
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudentName,
}