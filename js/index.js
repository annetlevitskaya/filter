const users = [
    {
        name: 'Ann',
        description: 'lorem',
        gender: 'f',
        age: 21,
        id: 1,
    },
    {
        name: 'Sasha',
        description: 'lorem',
        gender: 'm',
        age: 23,
        id: 2,
    },
    {
        name: 'Inna',
        description: 'lorem',
        gender: 'f',
        age: 11,
        id: 3,
    },
    {
        name: 'Pasha',
        description: 'lorem',
        gender: 'm',
        age: 41,
        id: 4,
    },
    {
        name: 'Evgen',
        description: 'lorem',
        gender: 'm',
        age: 25,
        id: 5,
    },
    {
        name: 'Misha',
        description: 'lorem',
        gender: 'm',
        age: 5,
        id: 1,
    },
    {
        name: 'Oleg',
        description: 'lorem',
        gender: 'm',
        age: 90,
        id: 1,
    },
    {
        name: 'Sveta',
        description: 'lorem',
        gender: 'f',
        age: 34,
        id: 6,
    },
    {
        name: 'Dima',
        description: 'lorem',
        gender: 'm',
        age: 23,
        id: 7,
    },
    {
        name: 'Petya',
        description: 'lorem',
        gender: 'm',
        age: 12,
        id: 8,
    },
    {
        name: 'Umaru',
        description: 'lorem',
        gender: 'f',
        age: 2,
        id: 9,
    },
    {
        name: 'Saske',
        description: 'lorem',
        gender: 'm',
        age: 16,
        id: 10,
    },
    {
        name: 'Naruto',
        description: 'lorem',
        gender: 'm',
        age: 15,
        id: 11,
    },
    {
        name: 'Nastya',
        description: 'lorem',
        gender: 'f',
        age: 58,
        id: 12,
    },
];

const getListElement = () => {
    return document.getElementById('list');
}

function createUserElement(user) {
    const li = document.createElement('li');
    li.className = 'user';
    
    const nameEmenent = document.createElement('h3');
    nameEmenent.className = 'user__name';
    nameEmenent.innerHTML = user.name;
    
    const ageEmenent = document.createElement('div');
    ageEmenent.className = 'user__age';
    ageEmenent.innerHTML = user.age;
    
    const genderEmenent = document.createElement('span');
    genderEmenent.className = 'user__gender';
    genderEmenent.innerHTML = user.gender;

    li.appendChild(nameEmenent);
    li.appendChild(ageEmenent);
    li.appendChild(genderEmenent);

    return li;
}

function displayUsers(users) {
    const listElement = getListElement();
    listElement.innerHTML = '';

    users.forEach(user => {
        const userElement = createUserElement(user);
        listElement.appendChild(userElement);
    })
}

const userNameElement = document.querySelector('.input__name'); 
const userMinAgeElement = document.querySelector('.input__min-age'); 
const userMaxAgeElement = document.querySelector('.input__max-age'); 
const userGenderElement = document.querySelector('.input__gender'); 

const userButtonSubmit = document.querySelector('.submit'); 

userButtonSubmit.addEventListener('click', function() {
    const user = {
        userName: userNameElement.value,
        userMinAge: userMinAgeElement.value,
        userMaxAge: userMaxAgeElement.value,
        userGender: userGenderElement.value,
    }

    let result = users;

    if (user.userMinAge !== '') {
        result = users.filter((el) => {
            return el.age > user.userMinAge
        });
    }

    if (user.userMaxAge !== '') {
        result = result.filter((el) => {
            return el.age < user.userMaxAge
        })
    }

    if (user.userName !== '') {
        result = result.filter((el) => {
            return el.name.toLowerCase().includes(user.userName.toLowerCase());
        })
    }

    if (user.userGender !== '') {
        result = result.filter((el) => {
            return el.gender === user.userGender
        })
    }

    displayUsers(result);
});


document.addEventListener('DOMContentLoaded', () => {
    displayUsers(users);
});