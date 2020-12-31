import { SERVER_BASE_URL,ACCESS_TOKEN } from '../common/config'

export function Login(username, password, successAction) {
    fetch(`${SERVER_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
        })
    })
        .then(respone => respone.json())
        .then(data => {
            console.log('data.access_token', data.data.access_token)
            successAction(data.data.access_token)
        })
        .catch(error => {
            console.log(error)
        });
}
export function GetListNote(successAction) {
    const Url = `${SERVER_BASE_URL}/note`;
    fetch(Url,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${ACCESS_TOKEN}`
            },
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}

export function CreateNoteAPI(title, dateTime, content, successAction) {
    const objfetch = {
        note_title: title,
        date_time: dateTime,
        note_content:content,
    }
    fetch(`${SERVER_BASE_URL}/note`,
        {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${ACCESS_TOKEN}`
            },
            body: JSON.stringify(objfetch)
        })
        .then(res => res.json())
        .then(response => {
            console.log("response",response)

            successAction(response)

        })
        .catch(error => {
            console.log("error",error)
        });
}
export function EditNoteAPI(id,note_title, date_time, note_content, successAction) {
    const Url = `${SERVER_BASE_URL}/note/${id}`;
    console.log('url', Url)
    const objfetch = {
        note_title, date_time, note_content,
    }
    fetch(Url,
        {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${ACCESS_TOKEN}`
            },
            body: JSON.stringify(objfetch)
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}
// export function DeleteUser(id,access_token,successAction) {
//     const Url = `${SERVER_BASE_URL}/customers/${id}`;
//     fetch(Url,
//         {
//             method: "DELETE",
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'access_token': `${access_token}`
//             },
//         })
//         .then(res => res.json())
//         .then(response => {

//             successAction(response)

//         })
//         .catch(error => {
//             console.log(error)
//         });
// }

export function GetWeather(address,successAction) {
    console.log("address",address)
    const Url = `http://api.weatherstack.com/current?access_key=f43d304628f460b006b4ed0e7904e0dd&query=${address}`;
    fetch(Url,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}
