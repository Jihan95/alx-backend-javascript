interface Teacher {
readonly firstName: string,
readonly lastName: string,
fullTimeEmployee: boolean,
location: string,
yearsOfExperience?: number,
[key: string]: any 
}

interface Directors extends Teacher {
numberOfReports: number
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
