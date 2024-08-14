interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
    }
    let student1: Student = {
    firstName: "Maryam",
    lastName: "Mohamed",
    age: 15,
    location: "Egypt"
    }
    let student2: Student = {
    firstName: "Menna",
    lastName: "Osama",
    age: 15,
    location: "Syria"
    }
    
    const studentsList: Student[] = [student1, student2];
    
    function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    
    students.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    
    table.appendChild(row);
    });
    document.body.appendChild(table);
    }
    renderTable(studentsList);