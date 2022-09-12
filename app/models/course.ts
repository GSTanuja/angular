export class Course {
    constructor(
        public courseName:string, 
        public cost:number, 
        public category:string, //cloudcomputing,backend,frontend
        public type:string, 
        public medium:string, 
        public trainer?:string
    ){}
}
