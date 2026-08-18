const parceiros = [
    { nome: "Novo Mundo", cat: "varejo", desc: "10% de desconto na linha branca." },
    { nome: "OdontoCenter", cat: "saude", desc: "Avaliação gratuita com scanner 3D." },
    { nome: "Supermercado Tatico", cat: "varejo", desc: "Preços baixos todos os dias." }
];

const grid = document.getElementById('parceiros-grid');

function renderizar(itens) {
    grid.innerHTML = itens.map(item => `
        <div class="anuncio-card" data-cat="${item.cat}">
            <h3>${item.nome}</h3>
            <p>${item.desc}</p>
            <a href="https://wa.me/5562999999999" target="_blank" style="color:var(--primary); font-weight:600;">Falar no WhatsApp →</a>
        </div>
    `).join('');
}

// Filtro simples
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        const filtrados = filter === 'all' ? parceiros : parceiros.filter(p => p.cat === filter);
        renderizar(filtrados);
    });
});

renderizar(parceiros);