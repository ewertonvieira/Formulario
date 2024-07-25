// Array de cidades por estado
const cidadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
    // Adicione os municípios para os outros estados conforme necessário
};

// Função para preencher as opções do select de cidades
function carregarCidades() {
    const estadoSelect = document.getElementById("estado");
    const cidadeSelect = document.getElementById("cidade");
    const estadoSelecionado = estadoSelect.value;

    // Limpar as opções atuais do select de cidades
    cidadeSelect.innerHTML = "<option value=''>Selecione</option>";

    // Verificar se o estado selecionado possui cidades definidas
    if (cidadesPorEstado.hasOwnProperty(estadoSelecionado)) {
        const cidades = cidadesPorEstado[estadoSelecionado];
        cidades.forEach(function(cidade) {
            const option = document.createElement("option");
            option.textContent = cidade;
            option.value = cidade; // Definir o valor como o nome da cidade, se necessário
            cidadeSelect.appendChild(option);
        });
    }
}

// Evento que dispara a função ao selecionar um estado
document.getElementById("estado").addEventListener("change", carregarCidades);
