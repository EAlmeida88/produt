const handleSubmit = (event) => {
    event.preventDefault();

    const arma = document.querySelector('input[name=arma]').value;
    const prisao = document.querySelector('input[name=prisao]').value;
    const trafico = document.querySelector('input[name=trafico]').value;
    const iri = document.querySelector('input[name=iri]').value;
    const mandado = document.querySelector('input[name=mandado]').value;
    const veiculo = document.querySelector('input[name=veiculo]').value;
    const veiculoautor = document.querySelector('input[name=veiculoautor').value;

    fetch('https://api.sheetmonkey.io/form/6fcczrz8oku2bRRGtsoMjn', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ arma, prisao, trafico, iri, mandado, veiculo, veiculoautor }),

    });


}


document.querySelector("form").addEventListener('submit', handleSubmit);

