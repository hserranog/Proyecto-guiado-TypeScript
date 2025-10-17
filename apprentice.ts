import { Course } from './course.js'

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
        public educationalLevel: EducationalLevel,
        public courses: Course[]
    ) {}

    public getCertificesCourses() :number {
        let totalCertifiedCourses: number = 0

        for (let index = 0; index < this.courses.length; index++) {
            let course = this.courses[index];
            if (course.certificate) {
                totalCertifiedCourses += 1;
            }
        }

        return totalCertifiedCourses;
    }
}