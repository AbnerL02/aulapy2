async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/onix');
        const data = await response.json();
        
        // Substituir os dados no HTML
        document.getElementById('name').textContent = data.forms[0].name;
        document.getElementById('email').textContent = data.base_experience;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chamar a função ao carregar a página
fetchData();