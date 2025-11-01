// Função para buscar endereço pelo CEP
document.getElementById('cep').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro || '';
                    document.getElementById('bairro').value = data.bairro || '';
                    document.getElementById('cidade').value = data.localidade || '';
                    document.getElementById('estado').value = data.uf || '';
                } else {
                    alert('CEP não encontrado. Verifique e tente novamente.');
                }
            })
            .catch(() => {
                alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
            });
    } else {
        alert('CEP inválido. Digite os 8 dígitos corretamente.');
    }
});

// Função para capturar e exibir os dados do formulário
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão

    const formData = new FormData(this);
    const dados = {};

    formData.forEach((valor, chave) => {
        dados[chave] = valor;
    });

    console.log('Dados do formulário:', dados);
    alert('Doação cadastrada com sucesso!');

    this.reset(); // Limpa o formulário após envio
});


