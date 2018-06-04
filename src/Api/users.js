import axios from 'axios';

const SERVER = 'http://localhost:4000/api/v1';

export default {
    user : {
        login: credentials =>
            axios.post(SERVER+'/login', { credentials }).then(res=>res.data).catch(error => { throw new Error(error); console.dir(error)} ),
        signup: user =>
            axios.post(SERVER+'/users', { user }.then(res => res.data.user)),
        read: () =>
            null
    }
}