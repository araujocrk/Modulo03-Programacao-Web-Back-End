const validator = require('validator');

class Post {
    constructor(data) {
        this.data = data;
        this.errors = [];
    }
}

Post.prototype.validate = function () {
    if (!this.data.title || typeof this.data.title !== 'string') {
        this.errors.push('Título é obrigatório e deve ser uma string.');
        if (!validator.isAlphanumeric(this.data.title)) {
            this.errors.push('O título deve conter apenas letras e números.');
        }
    } else {
        if (!this.data.texto || typeof this.data.title !== 'string') {
            this.errors.push('Texto de conteúdo é obrigatório e deve ser uma string.');
        } else {
            if (!validator.isLength(this.data.titulo, { min: 5, max: 30 })) {
                this.errors.push('Título deve ter entre 10 e 30 caracteres.');
            }
            if (!validator.isLength(this.data.texto, { min: 20, max: 300 })) {
                this.errors.push('Texto do conteúdo deve ter entre 20 e 300 caracteres.');
            }
        }
    }

    if (this.errors.length === 0) {
        validatedData = {
            titulo: this.data.titulo,
            texto: this.data.texto,
            dataPostagem: new Date(), // pega a data do sistema
            likes: 0 // inicializa com 0 likes a postagem
        };
        this.data = validatedData;
    }
}


module.exports = Post;