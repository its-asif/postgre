const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const getStudentByEmail = "SELECT * FROM students WHERE email = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";


module.exports = {
    getStudents,
    getStudentById,
    getStudentByEmail,
    addStudent,
    deleteStudent,
    updateStudent,
}