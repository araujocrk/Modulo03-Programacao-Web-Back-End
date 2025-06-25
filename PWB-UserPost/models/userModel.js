const pool = require('../db/postgres')

class User {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.password = data.password
        this.email = data.email
        this.nome = data.nome
        this.sobrenome = data.sobrenome
        this.errors = []
    }
}

User.prototype.create = function () {
    const query = `
    INSERT INTO usuarios(username, password, email, nome, sobrenome)
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING id;
    `;
    const query_params = [
        this.username, 
        this.password,
        this.email,
        this.nome,
        this.sobrenome
    ];

    return new Promise((resolve, reject) => {
        pool.query(query, query_params, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        });
    });
};

module.exports = User;