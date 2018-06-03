const users = [
    {
        email : 'ali@test.com',
        password : '123'
    },
    {
        email: 'alex@test.com',
        password: '1234'
    }
];
const index = users.find(user => user.email === 'ali@test.com' && user.password === '123');
console.log(index);
const { username, password } = req.params;
if(users.find( user => user.email == username && user.password == password)) {
    console.log('User found');
} else {
    console.log('Cannot find user');
}