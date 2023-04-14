import {Patient} from "./patient";

let patients = new Patient();

patients.enQueue('Smith', 5)
patients.enQueue('John', 4)
patients.enQueue('Fe', 6)
patients.enQueue('Brown', 1)
patients.enQueue('Ingram', 1)

console.log('Waiting line:')
console.table(patients.sortLine())
patients.medicExam()
if (patients.finishedLine !== undefined){
    console.log('doing exam:')
    console.log(patients.finishedLine[patients.finishedLine.length - 1])
}
console.log('Waiting line')
console.table(patients.sortLine())
patients.medicExam()
if (patients.finishedLine !== undefined){
    console.log('doing exam:');
    console.log(patients.finishedLine[patients.finishedLine.length - 1])
}
console.log('Waiting line')
console.table(patients.sortLine())


console.log('Done list')
console.table(patients.finishedLine)
