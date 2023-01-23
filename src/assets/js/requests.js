const endpoint = "http://localhost:8080/employe-api/public/"

async function put(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(endpoint + url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

async function post(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(endpoint + url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


async function get(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


async function del(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


async function login(data) {
    const res = await post('login', data).then((res) => {
        console.log(res);
    })
}

async function register(data) {
    
    const res = await post('register', data).then((res) => {
        console.log(res);
    })
}

async function validation_username(data) {
    
    const res = await post('validation_username', data).then((res) => {
        console.log(res);
    })
}   

async function AddCourse(data) {
    
    const res = await post('AddCourse', data).then((res) => {
        console.log(res);
    })
}

async function DeleteCourse(data) {

    const res = await post('DeleteCourse', data).then((res) => {
        console.log(res);
    })
}

async function AddLesson(data) {
    const res = await post('AddLesson', data).then((res) => {
        console.log(res);
    })
}

async function DeleteLesson(data) {
    const res = await del('DeleteLesson').then((res) => {
        console.log(res);
    })
}

async function EditCourse(data) {
    const res = await post('EditCourse', data).then((res) => {
        console.log(res);
    })
}

async function EditLesson(data) {
    const res = await post('EditLesson', data).then((res) => {
        console.log(res);
    })
}

async function addNewSubscription(data) {
    const res = await post('addNewSubscription', data).then((res) => {
        console.log(res);
    })
}

async function deleteASubscription([data]) {
    const res = await post('deleteASubscription', data).then((res) => {
        console.log(res);
    })
}

async function updateProgress(data) {
     data = {
        'userID' : 1,
        'courseID' : 1,
        'progress' : 12
    }

    const res = await put('UpdateProgress', data).then((res) => {
        console.log(res);
    })
}