function write(array) {
    console.log(array)
    console.log("---------------------")
}

let student1 = {
    yearOfStuding: 2,
    facultyName: "Geographic"
}

let student2 = {
    yearOfStuding: 3,
    facultyName: "Geologic"
}

let student3 = {
    yearOfStuding: 1,
    facultyName: "Biologic"
}

let student4 = {
    yearOfStuding: 4,
    facultyName: "Economic"
}

let student5 = {
    yearOfStuding: 1,
    facultyName: "Linguistic"
}

let student6 = {
    yearOfStuding: 3,
    facultyName: "Historical"

}
let student7 = {
    yearOfStuding: 2,
    facultyName: "Cultural"
}

let student8 = {
    yearOfStuding: 5,
    facultyName: "Physical"
}

let student9 = {
    yearOfStuding: 4,
    facultyName: "Psychical"
}

let student10 = {
    yearOfStuding: 5,
    facultyName: "Chemical"
}

let studentsarray = []
studentsarray.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10)
write(studentsarray)

// масив зі значенням лише facultyName об'єктів
function getobject(student) {
    return student.facultyName
}
let facultyarray = studentsarray.map(getobject)
write(facultyarray)

// сумарне значення yearOfStuding для всіх об'єктів
function sumyearofstuding(sumofyears, currentobj) {
    return sumofyears + currentobj.yearOfStuding
}

let coursessum = studentsarray.reduce(sumyearofstuding, 0)
write(coursessum)