import { Console } from 'console';
import readline from 'readline';

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'Edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'Silvia'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'Lee'
}, 
{
  age: 22,
  examScores: [],
  gender: 'male',
  name: 'Marti'
},
]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isInt = (optionstr) => {
  const optioninteger = parseInt(optionstr);
  if (Number.isNaN(optioninteger)) {
    return false;
  } else {
    return true;
  }
};

function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question(menuamostrar + " Introduce el número (Entero) ", (option) => {
      rl.pause();
      if (isInt(option)){
        option = parseInt(option)
        resolve(option);
      } else{
        reject("Has de introducir un número"); 
      }
    })
  })
  return promise;
}

const menuamostrar = ("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15")

async function playApp() {
  let numberFromConsole; 

  do {

    try {
      numberFromConsole = await getNumberFromConsole();
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
    
    switch (numberFromConsole) {
        case 1:
          console.table(students);
        break;
        
        case 2: 
        console.log(students.length)
        break;

        case 3: 
            for (let i=0; i < students.length; i++){
            console.log(students[i].name);
          }
        break;

        case 4: 
          students.pop()
          console.log(students)
        break;
        
        case 5: 
           console.log(students)  
            function calculateRandomNumber(min, max) {
              const randomNumber = Math.floor(Math.random() * (max - min)) + min;
              return randomNumber;
            }
            const randomIndex = calculateRandomNumber(0, students.length)
            students.splice(randomIndex, 1)
            console.log(students)
        break;
             
        case 6: 
        const females = students.filter(person => person.gender === "female")
        console.log(females.length)

        case 7: 
          const femaleStudents = students.filter(person => person.gender === "female")
          const maleStudents = students.filter(person => person.gender === "male")

          console.log("There are/is:", femaleStudents.length, "girls")
          console.log("There are/is:", maleStudents.length, "boys")
        break;

        case 8: 
          let allFemale = students.every(isgirl); 
          console.log(allFemale);

          function isgirl(person) {
           return person.gender === "female";
        }
        break;
        
        case 9:
          const youngerStudents = students.filter(student => student.age >= 20 && student.age <= 25)
          function youngerStudentsNames(youngerStudents) {
            youngerStudents.forEach(person => console.log(person.name))
          };
          console.log ("The students between 20 and 25 is/are"), youngerStudentsNames(youngerStudents)  
        break;

        case 10: 
        //AGE
        const randomAge = calculateRandomAge(20,50)
        function calculateRandomAge(min, max) {
          const randomNumber = Math.floor(Math.random() * (max - min)) + min;
          return randomNumber;
        }
      
        //GENDER
        function calculateRandomGender(min, max) {
          const randomGenderIndex = Math.floor(Math.random() * (max - min)) + min;
          let randomGenderName;
            if (randomGenderIndex === 1){
              randomGenderName = "female"
            } else {
              randomGenderName = "male"}
            return randomGenderName
          }
          
        const randomGender = calculateRandomGender(0,2);
        function getRandomName(randomGender) {
          let assignedName 
            if (randomGender === 'female') {
            const randomFemaleName = Math.floor(Math.random() * availableFemaleNames.length);
            assignedName = availableFemaleNames[randomFemaleName]
            } else {
            const randomMaleName = Math.floor(Math.random() * availableMaleNames.length);
            assignedName = availableMaleNames[randomMaleName]}
            return assignedName
          }

        //NAME  
        const randomName = getRandomName(randomGender)

        //NEWSTUDENT       
        let newStudent = {
              age: randomAge,          
              examScores: [],          
              gender: randomGender,
              name: randomName,
          }
        console.log("The new student's information:", newStudent)

        //Add the new student  
        students.push(newStudent);
        break;    
         
        case 11: 
        let studentAges = students.map((student) => student.age)
        let youngestAge = Math.min(...studentAges)
        let youngestStudent = students[studentAges.indexOf(youngestAge)]
        let youngestName = youngestStudent.name
      
        console.log('The youngest student here is', youngestName);
        break; 
     
        case 12:
        let sumAverage= students.reduce((x, y) => x + y.age, 0);
        let average = sumAverage / students.length;

        console.log("The avarage age of students is: ", average) 
        break; 

        case 13:
        const numberGirls = students.filter(person => person.gender === "female")  
        let girlsAverage = numberGirls.reduce((x, y) => x + y.age, 0) / numberGirls.length;

        console.log("The avarage age of the girls is: ", girlsAverage) 
        break; 
          
        case 14:
        function getRandomNote(min, max) {
          const randomNumber = Math.floor(Math.random() * (max - min)) + min;
          return randomNumber;
          }
          
        function assignScore(students) {
          students.forEach(student => student.examScores.push(getRandomNote(0,11)))
          console.log("The followings scores are: ", students)
          }
          
        assignScore(students)
        break;
        
        case 15:
          const NamesAlph = sortNames(students)
          function sortNames(students) {
              students.sort((a, b) => {
                   const nameA = a.name.toUpperCase(); 
                  const nameB = b.name.toUpperCase(); 
                  if (nameA < nameB) {
                     return -1;
                   }
                  if (nameA > nameB) {
                     return 1;
                   }
                  return 0;
                 });
              }
        console.log("Here you can see students classified in alpabetical:", students)
        break; 

      default: 
      console.log("Has cerrado la aplicación")
      rl.close 
      }

    } while ((numberFromConsole >= 1) && (numberFromConsole <= 15)); 
}

playApp()
