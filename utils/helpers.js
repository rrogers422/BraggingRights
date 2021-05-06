module.exports = {
    destruct_users: (users) => {
        console.log(users);
        const user1 = users[0].username;
        const user2 = users[1].username;
        return (user1 + " & " + user2);
    }  
}