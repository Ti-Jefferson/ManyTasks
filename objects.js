function task(func) {
    func();
}

//-----------------------------------------------------------------------------------------task 9.1------------------------------------------------------------------------------------------//

function t91() {

    let employee = {
        firstName: 'Василий',
        lastName: 'Тёркин',
        age: '28'
    }

    console.log(employee);

}

//-----------------------------------------------------------------------------------------task 9.2------------------------------------------------------------------------------------------//

function t92() {

    let employee = {
        firstName: 'Василий',
        lastName: 'Тёркин',
        age: '28'
    }

    function getFullName() {
        let fName = employee.firstName;
        let lName = employee.lastName;
        console.log(fName, lName);
    }

    getFullName();

}

//-----------------------------------------------------------------------------------------task 9.3------------------------------------------------------------------------------------------//

function t93() {

    let employee = {
        firstName: 'Василий',
        lastName: 'Тёркин',
        age: '28'
    }

    function getFullName() {
        let fName = employee.firstName;
        let lName = employee.lastName;
        return fName + " " + lName;
    }

    employee = {
        firstName: 'Василий',
        lastName: 'Тёркин',
        fullName: getFullName(),
        age: '28'
    }

    console.log(employee);

}

//--------------------------------------------------------------------------------------summon a tasks---------------------------------------------------------------------------------------//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                //Сделано Ульяновым Т.
