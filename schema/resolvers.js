const UserList = require('../fake-data.js')

const resolvers = {
    Query: {
        users() {
            return UserList;
        }
    }
}

module.exports = {resolvers}