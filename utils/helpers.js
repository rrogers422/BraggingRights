module.exports = {
    destruct_users: (users) => {
        console.log(users);
        const user1 = users[0].username;
        const user2 = users[1].username;
        return (user1 + " & " + user2);
    },
    putWin: async () => {
        console.log("win!")
          const response = await fetch('/api/bets/win', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
         });
         const response2 = await fetch('/api/bets/status', {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' },
         });
         if (response.ok) {
           return;
         }
      },
    
    putLoss: async () =>{
            console.log("Loss!")
        }
};


