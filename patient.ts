export class Patient {

    // name: string;
    // code: number;
    waitingLine: { name: string, code: number }[] = [];
    finishedLine: { name: string, code: number }[] | undefined = [];


    enQueue(name: string, code: number): void {
        this.waitingLine.push({name, code});
    }

    deQueue(): { name: string, code: number } | undefined {
        return this.waitingLine.shift()
    }

    size(): number {
        return this.waitingLine.length
    }

    sortLine(): object[] {
        return this.waitingLine.sort((a, b) => a.code - b.code)
    }
    enteringPatient(): string{
        return `start exam the patient name: ${this.waitingLine[0].name} code: ${this.waitingLine[0].code}`
    }

    medicExam(): string | undefined{
        this.sortLine()
        let x= this.deQueue()
        if (this.finishedLine !== undefined && x !== undefined) {
            this.finishedLine.push(x)
            return `exam the patient name: ${x.name} code: ${x.code}`
        }
    }

    // lineAfterFinish(): object[]{
    //
    // }
}