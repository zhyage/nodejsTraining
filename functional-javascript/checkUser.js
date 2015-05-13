

function checkUsersValid(goodUsers){
    return function allUsersValid(submitUsers){
        return submitUsers.every(function(submitUser){
            return goodUsers.some(function(goodUser){
                return submitUser.id === goodUser.id;
            })
        })
    }
}

 module.exports = checkUsersValid

// module.exports = function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(submittedUser) {
//             return goodUsers.some(function(goodUser) {
//                 return goodUser.id === submittedUser.id
//             })
//         })
//     }
// }