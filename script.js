document.addEventListener('DOMContentLoaded', () => {
    // Banco de dados simulado expandido com o mesmo padrão rico
    const todosAnuncios = [
        { nome: "Mega Eletrônicos Celulares", desc: "Os últimos lançamentos em smartphones e acessórios com assistência ultra-rápida.", tag: "TECNOLOGIA", icon: "fas fa-mobile-alt" },
        { nome: "Banco do Brasil (Ag. 4775)", desc: "Agência completa para pessoa física e jurídica. Soluções financeiras na região.", tag: "FINANÇAS", icon: "fas fa-university" },
        { nome: "Auto Escola Garavelo", desc: "Sua CNH descomplicada. As melhores taxas de aprovação e pacotes promocionais.", tag: "SERVIÇOS", icon: "fas fa-car" },
        { nome: "Pernambucanas", desc: "Moda feminina, masculina, infantil e utilidades para o seu lar em um só lugar.", tag: "VAREJO GERAL", icon: "fas fa-tags" },
        { nome: "Zé do Peixe - Peixaria", desc: "O melhor e mais fresco pescado da região! Qualidade e tradição. Entregas grátis.", tag: "ALIMENTAÇÃO", icon: "fas fa-fish" },
        { nome: "Ativa Planos de Saúde", desc: "O melhor convênio médico para você e sua família. Faça uma cotação sem compromisso.", tag: "SAÚDE", icon: "fas fa-ambulance" },
        { nome: "Lorenzo Móveis", desc: "Móveis planejados sob medida. Design moderno com o melhor custo-benefício.", tag: "DECORAÇÃO", icon: "fas fa-couch" },
        { nome: "Barbearia do Fabim", desc: "Cortes e barba clássicos e modernos. Agende seu horário e evite filas.", tag: "BELEZA", icon: "fas fa-cut" }
    ];

    const anunciosPorLote = 3;
    let proximoIndice = 0;
    const parceirosGrid = document.getElementById('parceiros-grid');
    const btnCarregarMais = document.getElementById('btn-carregar-mais');
    
    const criarAnuncio = (loja) => {
        const div = document.createElement('div');
        div.classList.add('anuncio-item', 'partner');
        div.setAttribute('data-loja', loja.nome);

        div.innerHTML = `
            <div class="anuncio-icon-wrapper">
                <i class="${loja.icon} anuncio-icon"></i>
            </div>
            <div class="anuncio-content">
                <h3>${loja.nome}</h3>
                <p>${loja.desc}</p>
                <div class="card-footer-info">
                    <span class="tag-parceiro">${loja.tag}</span>
                    <a href="https://wa.me/5562999999999" target="_blank" class="btn-whatsapp" title="Falar no WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        `;
        return div;
    };

    const carregarMaisAnuncios = () => {
        const loteDeAnuncios = todosAnuncios.slice(proximoIndice, proximoIndice + anunciosPorLote);

        if (loteDeAnuncios.length > 0) {
            loteDeAnuncios.forEach(loja => {
                parceirosGrid.appendChild(criarAnuncio(loja));
            });
            proximoIndice += loteDeAnuncios.length;

            if (proximoIndice >= todosAnuncios.length) {
                btnCarregarMais.textContent = "Fim dos Anúncios Destaque";
                btnCarregarMais.disabled = true;
                btnCarregarMais.style.opacity = '0.5';
                btnCarregarMais.style.cursor = 'not-allowed';
            } else {
                btnCarregarMais.innerHTML = `Carregar Mais Anúncios <i class="fas fa-chevron-down"></i>`;
            }
        }
    };
    
    if (btnCarregarMais) {
        btnCarregarMais.addEventListener('click', carregarMaisAnuncios);
    }
});