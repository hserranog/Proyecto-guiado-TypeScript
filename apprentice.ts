export enum EducationalLevel {
    HIGHSCHOOL = "High School",
    UNIBERSITY = "University",
    MASTERDEGREE = "Master Degree"
}

export class Apprentice {
    constructor(
        public firstNames: string,
        public lastNames: string,
        public avatar: string,
        public age: number,
        public educationalLevel: EducationalLevel
    ) {}
}