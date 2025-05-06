const operacoes = [];

function  salvarOperacao(req) {
    data = req.body.data;
    codigo = req.body.codigo;
    tipo = req.body.tipo;
    quantidade = parseInt(req.body.quantidade);
    precoUnit = parseFloat(req.body.precoUnit);
    bruto = quantidade * precoUnit;
    taxas = parseFloat(req.body.taxas);
    liquido = 0;
    if (tipo == 'compra') {
        liquido = bruto + (bruto * (taxas / 100));
    } else {
        liquido = bruto - (bruto * (taxas / 100));
    }

    operacoes.push({data, codigo, tipo, quantidade, precoUnit, bruto, taxas, liquido});
}

function listarOperacoes() {
    return operacoes;
}

module.exports = {
    salvarOperacao,
    listarOperacoes
}