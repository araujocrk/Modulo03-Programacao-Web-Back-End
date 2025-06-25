const User = require('../models/userModel');

exports.userCadastroForm = (req, res) => {
    res.render('pages/userCadastroForm'
        // title:
        // showHeader:
        // page:
    );
};

exports.userCadastro = (req, res) => {
    const user = new User(req.body);
    user.validate();

    if (user.errors.length > 0) {
        return res.render('pages/erro', {
            title: 'Erro no cadastro',
            showHeader: false,
            page: '',
            errors: user.errors
        });
    }

    user.create()
        .then(result => {
            const { id, id_errors } = result
            if (id_errors.length > 0) {
                return res.render('pages/error', {
                    title: 'Erro no cadastro',
                    showHeader: false,
                    page: '',
                    errors: id_errors
                });
            }
            
        })
}