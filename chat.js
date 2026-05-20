document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const messagesContainer = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.querySelector('.chat-input-area button');

    // Função para abrir/fechar
    window.toggleChat = function() {
        if (chatWindow) {
            chatWindow.classList.toggle('hidden');
            userInput.focus();
        }
    };

    // Função para enviar mensagem
    window.sendMessage = function() {
        const text = userInput.value.trim();
        
        if (text !== "") {
            // Adiciona mensagem do usuário
            appendMessage(text, 'user');
            userInput.value = "";

            // Resposta do Robô
            setTimeout(() => {
                const response = getBotResponse(text.toLowerCase());
                appendMessage(response, 'bot');
            }, 600);
        }
    };

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerText = text;
        messagesContainer.appendChild(messageDiv);
        
        // Scroll automático para o final
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function getBotResponse(input) {
              if (input.includes("quanto tempo dura"))
            return "Os sintomas da toxoplasmose podem durar algumas semanas, mas isso varia de pessoa para pessoa.";

                if (input.includes("boa tarde"))
            return "Boa tarde! Estou aqui para tirar suas dúvidas sobre toxoplasmose.";

        if (input.includes("boa noite"))
            return "Boa noite! Como posso ajudar você hoje?";

        if (input.includes("oi") || input.includes("olá") || input.includes("ola"))
            return "Olá! Seja bem-vindo ao ToxoBot. 😊";

        if (input.includes("tchau") || input.includes("até logo") || input.includes("adeus"))
            return "Até mais! Cuide-se e volte sempre que precisar. 👋";

        if (input.includes("quem descobriu a toxoplasmose"))
            return "A toxoplasmose foi identificada no início do século XX por pesquisadores da área da saúde.";

        if (input.includes("toxoplasmose passa para cachorro"))
            return "Cachorros podem entrar em contato com o parasita, mas os gatos são os principais hospedeiros.";

        if (input.includes("meu gato fica dentro de casa"))
            return "Gatos que vivem dentro de casa possuem menor risco de infecção.";

        if (input.includes("posso adotar gato"))
            return "Sim! Basta manter os cuidados de higiene e acompanhamento veterinário.";

        if (input.includes("gato transmite sempre"))
            return "Nem todos os gatos possuem o parasita da toxoplasmose.";

        if (input.includes("areia do gato"))
            return "A limpeza diária da areia ajuda a reduzir riscos de contaminação.";

        if (input.includes("como prevenir"))
            return "Evite carnes cruas, higienize alimentos e lave as mãos regularmente.";

        if (input.includes("como evitar toxoplasmose"))
            return "Manter hábitos de higiene é uma das melhores formas de prevenção.";

        if (input.includes("carne de porco"))
            return "Carnes devem ser bem cozidas antes do consumo.";

        if (input.includes("carne crua"))
            return "Evite consumir carne crua ou malpassada.";

        if (input.includes("água filtrada") || input.includes("agua filtrada"))
            return "Consumir água filtrada ou tratada ajuda na prevenção.";

        if (input.includes("frutas sujas"))
            return "Frutas devem ser lavadas corretamente antes de serem consumidas.";

        if (input.includes("legumes"))
            return "Legumes higienizados ajudam a reduzir riscos de contaminação.";

        if (input.includes("salada"))
            return "Lave bem verduras e saladas antes de consumir.";

        if (input.includes("gravidez e gato"))
            return "Gestantes podem conviver com gatos, desde que mantenham os cuidados corretos.";

        if (input.includes("sintomas leves"))
            return "Algumas pessoas apresentam sintomas leves ou até nenhum sintoma.";

        if (input.includes("sem sintomas"))
            return "Muitas pessoas podem ter toxoplasmose sem perceber sintomas.";

        if (input.includes("dor no corpo"))
            return "Dores no corpo podem aparecer em alguns casos de toxoplasmose.";

        if (input.includes("febre e cansaço"))
            return "Febre e cansaço podem estar relacionados a diferentes infecções.";

        if (input.includes("olho embaçado"))
            return "Alterações visuais devem ser avaliadas por um especialista.";

        if (input.includes("dói o olho"))
            return "Dor nos olhos merece atenção médica, especialmente com alterações na visão.";

        if (input.includes("preciso ir ao médico"))
            return "Se os sintomas persistirem, procure um médico para avaliação adequada.";

        if (input.includes("o que acontece se não tratar"))
            return "Sem acompanhamento, alguns casos podem apresentar complicações.";

        if (input.includes("quanto tempo demora o tratamento"))
            return "O tempo do tratamento varia conforme cada paciente.";

        if (input.includes("tem vacina"))
            return "Atualmente não existe vacina amplamente disponível para toxoplasmose em humanos.";

        if (input.includes("posso pegar mais de uma vez"))
            return "Em alguns casos pode ocorrer reinfecção, principalmente em pessoas com baixa imunidade.";

        if (input.includes("baixa imunidade"))
            return "Pessoas com imunidade baixa devem ter atenção redobrada.";

        if (input.includes("hiv") || input.includes("aids"))
            return "Pessoas imunossuprimidas precisam de acompanhamento médico adequado.";

        if (input.includes("idosos"))
            return "Idosos devem manter cuidados preventivos e acompanhamento de saúde.";

        if (input.includes("crianças"))
            return "A prevenção também é importante para crianças e bebês.";

        if (input.includes("como funciona o exame"))
            return "O exame geralmente é feito através de coleta de sangue.";

        if (input.includes("resultado demora"))
            return "O prazo dos exames varia conforme o laboratório.";

        if (input.includes("posso me automedicar"))
            return "Evite automedicação e procure orientação médica.";

        if (input.includes("remédio caseiro"))
            return "Não utilize tratamentos caseiros sem orientação profissional.";

        if (input.includes("alimentação"))
            return "Uma alimentação equilibrada contribui para a saúde e prevenção.";

        if (input.includes("água potável"))
            return "Consumir água potável é essencial para prevenção de doenças.";

        if (input.includes("higienização"))
            return "A higienização correta reduz riscos de contaminação.";

        if (input.includes("lavar verduras"))
            return "Verduras devem ser higienizadas antes do consumo.";

        if (input.includes("posso ter toxoplasmose e não saber"))
            return "Sim, muitas pessoas não apresentam sintomas aparentes.";

        if (input.includes("estou cansado"))
            return "O cansaço pode ter várias causas. Procure orientação médica se persistir.";

        if (input.includes("dor nas costas"))
            return "Dores persistentes devem ser avaliadas por profissionais de saúde.";

        if (input.includes("fraqueza"))
            return "Fraqueza excessiva pode indicar diferentes condições de saúde.";

        if (input.includes("me sinto doente"))
            return "Caso os sintomas persistam, procure atendimento médico.";

                if (input.includes("como limpar a caixa de areia"))
            return "Utilize luvas e higienize a caixa de areia diariamente.";

        if (input.includes("quanto tempo o parasita vive"))
            return "O parasita pode sobreviver por bastante tempo em ambientes inadequadamente higienizados.";

        if (input.includes("o gato parece doente"))
            return "Caso o animal apresente sintomas, procure um veterinário.";

        if (input.includes("meu gato não sai de casa"))
            return "Gatos domésticos têm menos chances de entrar em contato com o parasita.";

        if (input.includes("carne congelada"))
            return "Congelar carnes pode ajudar a reduzir alguns riscos de contaminação.";

        if (input.includes("posso comer sushi"))
            return "Alimentos crus podem apresentar riscos. Consuma apenas em locais confiáveis.";

        if (input.includes("comida japonesa"))
            return "Prefira alimentos preparados com higiene e ingredientes de qualidade.";

        if (input.includes("mercado"))
            return "Escolha alimentos bem armazenados e dentro do prazo de validade.";

        if (input.includes("validade"))
            return "Verifique sempre a validade dos alimentos antes do consumo.";

        if (input.includes("comida vencida"))
            return "Evite consumir alimentos vencidos ou mal armazenados.";

        if (input.includes("febre baixa"))
            return "Febre baixa persistente deve ser acompanhada por um profissional.";

        if (input.includes("mal estar"))
            return "O mal-estar pode estar relacionado a diversas condições de saúde.";

        if (input.includes("sono excessivo"))
            return "Sono excessivo pode ter várias causas. Observe os sintomas.";

        if (input.includes("dor no pescoço"))
            return "Caso a dor persista, procure avaliação médica.";

        if (input.includes("íngua") || input.includes("ganglios"))
            return "Ínguas podem aparecer em algumas infecções e devem ser avaliadas.";

        if (input.includes("dor na garganta"))
            return "Dor de garganta pode ter diferentes causas além da toxoplasmose.";

        if (input.includes("coceira"))
            return "Coceiras persistentes devem ser avaliadas por um profissional.";

        if (input.includes("manter higiene"))
            return "A higiene adequada é essencial para prevenção.";

        if (input.includes("como cozinhar carne"))
            return "Cozinhe carnes completamente antes de consumir.";

        if (input.includes("carne mal cozida"))
            return "Carnes mal cozidas podem aumentar os riscos de contaminação.";

        if (input.includes("contato com fezes"))
            return "Evite contato direto com fezes de animais sem proteção.";

        if (input.includes("lavar utensílios"))
            return "Utensílios devem ser higienizados após o preparo de alimentos crus.";

        if (input.includes("cortar carne"))
            return "Use utensílios limpos e lave as mãos após manipular carne crua.";

        if (input.includes("me sinto fraco"))
            return "Fraqueza persistente merece atenção médica.";

        if (input.includes("dor no peito"))
            return "Dor no peito deve ser avaliada imediatamente por um profissional.";

        if (input.includes("estou tossindo"))
            return "Tosse persistente deve ser acompanhada por orientação médica.";

        if (input.includes("estou espirrando"))
            return "Espirros podem estar relacionados a alergias ou infecções.";

        if (input.includes("dor abdominal"))
            return "Dores abdominais persistentes precisam de avaliação médica.";

        if (input.includes("me sinto febril"))
            return "Observe os sintomas e procure orientação médica se necessário.";

        if (input.includes("estou melhor"))
            return "Fico feliz em saber! Continue seguindo os cuidados preventivos.";

        if (input.includes("estou pior"))
            return "Se os sintomas piorarem, procure atendimento médico imediatamente.";

        if (input.includes("me ajuda por favor"))
            return "Claro! Diga sua dúvida e tentarei ajudar da melhor forma.";

        if (input.includes("estou sozinho"))
            return "Procure apoio de familiares, amigos ou profissionais de saúde se precisar.";

        if (input.includes("tenho dúvidas"))
            return "Pode perguntar! Estou aqui para ajudar com informações educativas.";

        if (input.includes("quero aprender"))
            return "Aprender sobre prevenção é uma ótima forma de cuidar da saúde.";

        if (input.includes("curiosidade"))
            return "A toxoplasmose é uma das infecções parasitárias mais conhecidas no mundo.";

        if (input.includes("fato interessante"))
            return "Muitas pessoas têm contato com o parasita sem apresentar sintomas.";

        if (input.includes("me conte algo"))
            return "Manter hábitos de higiene é uma das formas mais eficazes de prevenção.";

        if (input.includes("dica"))
            return "Uma boa dica é sempre higienizar frutas e verduras antes do consumo.";

        if (input.includes("conselho"))
            return "Evite automedicação e procure sempre informações confiáveis.";

        if (input.includes("me tranquilize"))
            return "Nem todos os casos são graves. Buscar orientação correta ajuda bastante.";

        if (input.includes("estou nervoso"))
            return "Respire fundo e procure orientação profissional caso necessário.";

        if (input.includes("tenho ansiedade"))
            return "Conversar com profissionais e pessoas de confiança pode ajudar.";

        if (input.includes("quero prevenir"))
            return "Ótima atitude! Prevenção é fundamental para cuidar da saúde.";

        if (input.includes("meu alimento caiu no chão"))
            return "Evite consumir alimentos que possam ter sido contaminados.";

        if (input.includes("lavar verduras com vinagre"))
            return "Siga orientações adequadas de higienização para maior segurança.";

        if (input.includes("água mineral"))
            return "Água mineral ou filtrada ajuda na prevenção.";

        if (input.includes("filtro de água"))
            return "Filtros ajudam a melhorar a qualidade da água consumida.";

        if (input.includes("hábito saudável"))
            return "Hábitos saudáveis contribuem para uma vida mais segura e equilibrada.";

        if (input.includes("qualidade de vida"))
            return "Cuidados preventivos ajudam na qualidade de vida.";

        if (input.includes("vida saudável"))
            return "Uma vida saudável inclui alimentação equilibrada e boa higiene.";

        if (input.includes("rotina saudável"))
            return "Pequenos cuidados diários fazem grande diferença na saúde.";

        if (input.includes("sistema imunológico"))
            return "Um sistema imunológico saudável ajuda o corpo a se proteger.";

        if (input.includes("defesa do corpo"))
            return "A imunidade é importante para combater infecções.";

        if (input.includes("quero falar com humano"))
            return "Você pode procurar os canais de suporte disponíveis no site.";

        if (input.includes("atendente"))
            return "Nosso suporte pode ajudar através dos canais oficiais.";

        if (input.includes("menu"))
            return "Explore o menu do site para acessar conteúdos e ferramentas.";

        if (input.includes("inicio"))
            return "Na página inicial você encontra informações principais sobre prevenção.";

        if (input.includes("faq"))
            return "A seção FAQ reúne respostas para perguntas frequentes.";

        if (input.includes("ajuda no site"))
            return "Você pode navegar pelas seções educativas disponíveis na plataforma.";

        if (input.includes("carregando"))
            return "Aguarde alguns instantes e tente novamente.";

        if (input.includes("muito lento"))
            return "Verifique sua conexão para melhorar o carregamento do site.";

        if (input.includes("gostei do projeto"))
            return "😄 Obrigado pelo apoio ao projeto!";

        if (input.includes("parabéns pelo site"))
            return "Muito obrigado! Ficamos felizes com seu feedback.";

        if (input.includes("site incrível"))
            return "😄 Agradecemos pelo carinho e apoio!";

        if (input.includes("obrigado bot"))
            return "😊 Fico feliz em ajudar!";

        if (input.includes("você é inteligente"))
            return "Obrigado! Estou aqui para ajudar da melhor forma possível.";

        if (input.includes("você aprende"))
            return "Fui programado para responder perguntas educativas automaticamente.";

        if (input.includes("site bonito"))
            return "Obrigado pelo feedback! 😄";

        if (input.includes("parceria"))
            return "Entre em contato pelos canais oficiais disponíveis no site.";

        if (input.includes("contato da equipe"))
            return "Os contatos oficiais estão disponíveis na área de suporte do site.";

        if (input.includes("suporte técnico"))
            return "Nosso suporte pode ajudar em caso de dúvidas ou problemas técnicos.";

        if (input.includes("não funciona"))
            return "Tente atualizar a página ou verificar sua conexão com a internet.";

        if (input.includes("travando"))
            return "Feche e abra novamente a página caso o sistema esteja travando.";

        if (input.includes("internet"))
            return "Uma conexão estável ajuda no funcionamento correto da plataforma.";

        if (input.includes("celular"))
            return "Nosso site também pode ser acessado pelo celular.";

        if (input.includes("computador"))
            return "Você pode acessar a plataforma pelo computador ou notebook.";

        if (input.includes("tablet"))
            return "A plataforma também funciona em tablets.";

        if (input.includes("acessibilidade"))
            return "Buscamos tornar a plataforma acessível e fácil de utilizar.";

        if (input.includes("privacidade"))
            return "A privacidade dos usuários é muito importante para nossa plataforma.";

        if (input.includes("segurança"))
            return "Nosso objetivo é oferecer uma experiência segura e educativa.";

        if (input.includes("quem criou o site"))
            return "O site foi desenvolvido como projeto educativo de conscientização.";

        if (input.includes("escola sesi"))
            return "O projeto foi desenvolvido com foco educacional e conscientização em saúde.";

        if (input.includes("protótipo"))
            return "O protótipo foi criado para informar e auxiliar na prevenção da toxoplasmose.";

        if (input.includes("apresentação"))
            return "A apresentação do projeto busca conscientizar sobre prevenção e cuidados.";

                if (input.includes("posso comer ovo cru"))
            return "Evite consumir alimentos crus para reduzir riscos de contaminação.";

        if (input.includes("leite cru"))
            return "Prefira leite pasteurizado ou fervido antes do consumo.";

        if (input.includes("faz mal para bebê"))
            return "Durante a gestação, a toxoplasmose pode trazer riscos ao bebê.";

        if (input.includes("como cuidar do gato"))
            return "Mantenha vacinação, alimentação adequada e consultas veterinárias em dia.";

        if (input.includes("meu gato caça rato"))
            return "Gatos que caçam podem ter maior risco de contato com o parasita.";

        if (input.includes("caixa de areia suja"))
            return "A limpeza frequente da caixa de areia é muito importante.";

        if (input.includes("lavar legumes"))
            return "Legumes devem ser bem higienizados antes do preparo.";

        if (input.includes("horta"))
            return "Use luvas ao mexer em hortas ou terra.";

        if (input.includes("praia"))
            return "Mantenha cuidados com higiene e alimentação também durante passeios.";

        if (input.includes("piquenique"))
            return "Proteja os alimentos do contato com sujeira e insetos.";

        if (input.includes("mosca"))
            return "Insetos podem contaminar alimentos expostos.";

        if (input.includes("barata"))
            return "Mantenha o ambiente limpo para evitar pragas.";

        if (input.includes("comida estragada"))
            return "Não consuma alimentos com cheiro, cor ou textura alterados.";

        if (input.includes("dor no braço"))
            return "Observe os sintomas e procure ajuda médica se necessário.";

        if (input.includes("dor na perna"))
            return "Dores persistentes devem ser avaliadas.";

        if (input.includes("tontura"))
            return "Tonturas frequentes merecem atenção médica.";

        if (input.includes("desmaio"))
            return "Procure atendimento médico imediatamente em caso de desmaio.";

        if (input.includes("pressão baixa"))
            return "Mantenha-se hidratado e procure orientação profissional.";

        if (input.includes("pressão alta"))
            return "Monitore sua saúde regularmente com acompanhamento médico.";

        if (input.includes("sede excessiva"))
            return "A sede excessiva pode ter diversas causas.";

        if (input.includes("boca seca"))
            return "Hidrate-se adequadamente e observe outros sintomas.";

        if (input.includes("ar condicionado"))
            return "Ambientes limpos e ventilados ajudam no bem-estar.";

        if (input.includes("lavar roupa"))
            return "A higiene doméstica também contribui para prevenção.";

        if (input.includes("animal doméstico"))
            return "Animais domésticos devem receber cuidados adequados.";

        if (input.includes("pet"))
            return "Pets saudáveis ajudam a manter um ambiente seguro.";

        if (input.includes("ração úmida"))
            return "Armazene corretamente os alimentos dos animais.";

        if (input.includes("consultar veterinário"))
            return "Consultas veterinárias são importantes para a saúde animal.";

        if (input.includes("vida do parasita"))
            return "O parasita pode sobreviver em ambientes contaminados.";

        if (input.includes("solo contaminado"))
            return "Evite contato sem proteção com solo potencialmente contaminado.";

        if (input.includes("areia da praia"))
            return "Lave bem as mãos após contato com areia.";

        if (input.includes("mão suja"))
            return "Lavar as mãos é uma medida preventiva essencial.";

        if (input.includes("lavar depois de cozinhar"))
            return "Higienize superfícies e utensílios após preparar alimentos.";

        if (input.includes("pia da cozinha"))
            return "Mantenha a pia sempre limpa e seca.";

        if (input.includes("esponja"))
            return "Troque esponjas regularmente para evitar contaminações.";

        if (input.includes("detergente"))
            return "Produtos de limpeza ajudam na higienização doméstica.";

        if (input.includes("desinfetante"))
            return "Use produtos adequados para manter ambientes higienizados.";

        if (input.includes("quarto limpo"))
            return "Ambientes organizados ajudam no bem-estar e saúde.";

        if (input.includes("banheiro"))
            return "A limpeza do banheiro é importante para higiene geral.";

        if (input.includes("sabão"))
            return "Lavar as mãos com água e sabão ajuda na prevenção.";

        if (input.includes("álcool em gel") || input.includes("alcool em gel"))
            return "O álcool em gel pode complementar a higienização das mãos.";

        if (input.includes("vacinação"))
            return "Manter vacinas em dia é importante para saúde geral.";

        if (input.includes("consulta médica"))
            return "Consultas regulares ajudam na prevenção de doenças.";

        if (input.includes("check-up"))
            return "Exames de rotina ajudam a monitorar a saúde.";

        if (input.includes("saúde"))
            return "Cuidar da saúde envolve prevenção, higiene e acompanhamento profissional.";

        if (input.includes("bem-estar"))
            return "Hábitos saudáveis contribuem para o bem-estar.";

        if (input.includes("atividade física"))
            return "Atividades físicas ajudam na qualidade de vida.";

        if (input.includes("caminhada"))
            return "Caminhadas podem ajudar na saúde física e mental.";

        if (input.includes("hidratação"))
            return "Beber água regularmente é importante para o organismo.";

        if (input.includes("sono"))
            return "Dormir bem contribui para a saúde e imunidade.";

        if (input.includes("descanso"))
            return "O descanso adequado ajuda na recuperação do corpo.";

        if (input.includes("stress") || input.includes("estresse"))
            return "Tente manter hábitos saudáveis para reduzir o estresse.";

        if (input.includes("rotina"))
            return "Uma rotina equilibrada ajuda na qualidade de vida.";

        if (input.includes("organização"))
            return "Ambientes organizados favorecem hábitos saudáveis.";

        if (input.includes("limpar alimentos"))
            return "Higienize os alimentos antes de consumir.";

        if (input.includes("frango cru"))
            return "Evite contato cruzado entre alimentos crus e cozidos.";

        if (input.includes("carne bovina"))
            return "Cozinhe carnes completamente antes de consumir.";

        if (input.includes("temperatura"))
            return "Armazene alimentos em temperaturas adequadas.";

        if (input.includes("microondas"))
            return "Certifique-se de aquecer os alimentos corretamente.";

        if (input.includes("fogão"))
            return "O cozimento adequado ajuda na segurança alimentar.";

        if (input.includes("panela"))
            return "Mantenha utensílios limpos antes e após o uso.";

        if (input.includes("mercado perto"))
            return "Escolha locais limpos e confiáveis para comprar alimentos.";

        if (input.includes("feira"))
            return "Lave frutas e verduras compradas em feiras.";

        if (input.includes("supermercado"))
            return "Verifique a conservação dos produtos antes de comprar.";

        if (input.includes("embalagem"))
            return "Evite produtos com embalagens danificadas.";

        if (input.includes("congelador"))
            return "Armazene corretamente alimentos congelados.";

        if (input.includes("descongelar carne"))
            return "Descongele alimentos com segurança antes do preparo.";

        if (input.includes("cozinhar"))
            return "O preparo correto dos alimentos ajuda na prevenção.";

        if (input.includes("alimentação balanceada"))
            return "Uma alimentação balanceada fortalece o organismo.";

        if (input.includes("frutas"))
            return "Frutas devem ser higienizadas antes do consumo.";

        if (input.includes("verduras"))
            return "Verduras limpas ajudam a evitar contaminações.";

        if (input.includes("nutrição"))
            return "Boa nutrição contribui para a saúde do corpo.";

        if (input.includes("proteína"))
            return "Proteínas devem ser preparadas corretamente antes do consumo.";

        if (input.includes("cozinheiro"))
            return "Boas práticas de higiene são essenciais no preparo dos alimentos.";

        if (input.includes("restaurante limpo"))
            return "Prefira locais que demonstrem boas condições de higiene.";

        if (input.includes("lanchonete"))
            return "Observe a higiene do local antes de consumir alimentos.";

        if (input.includes("delivery"))
            return "Consuma alimentos de estabelecimentos confiáveis.";

        if (input.includes("comida fria"))
            return "Alimentos devem ser armazenados na temperatura correta.";

        if (input.includes("comida quente"))
            return "Alimentos quentes devem ser consumidos logo após o preparo.";

        if (input.includes("gelado"))
            return "Mantenha alimentos perecíveis refrigerados.";

        if (input.includes("cozinha limpa"))
            return "Uma cozinha limpa ajuda na segurança alimentar.";

        if (input.includes("pia"))
            return "Mantenha a pia higienizada regularmente.";

        if (input.includes("toalha"))
            return "Troque toalhas de cozinha frequentemente.";

        if (input.includes("sabão antibacteriano"))
            return "Produtos de higiene ajudam na limpeza adequada.";

        if (input.includes("lavar antes de comer"))
            return "Sempre lave as mãos antes das refeições.";

        if (input.includes("mesa suja"))
            return "Higienize superfícies antes das refeições.";

        if (input.includes("copo"))
            return "Utilize utensílios limpos para alimentação.";

        if (input.includes("garfo"))
            return "Talheres devem ser higienizados antes do uso.";

        if (input.includes("fome"))
            return "Mantenha uma alimentação equilibrada ao longo do dia.";

        if (input.includes("vitamina"))
            return "Vitaminas são importantes para o funcionamento do organismo.";

        if (input.includes("minerais"))
            return "Minerais ajudam na manutenção da saúde.";

        if (input.includes("energia"))
            return "Uma boa alimentação ajuda a manter energia no dia a dia.";

        if (input.includes("rotina alimentar"))
            return "Ter horários regulares para alimentação pode ajudar na saúde.";

        if (input.includes("comer saudável"))
            return "Alimentos frescos e bem preparados ajudam na qualidade de vida.";

        if (input.includes("saúde preventiva"))
            return "A prevenção é uma das melhores formas de cuidar da saúde.";

        if (input.includes("hábitos"))
            return "Pequenos hábitos saudáveis fazem grande diferença.";

        if (input.includes("cuidado"))
            return "Cuidados diários ajudam na prevenção de doenças.";

        if (input.includes("proteção"))
            return "Medidas preventivas ajudam na proteção da saúde.";

        if (input.includes("orientação"))
            return "Buscar orientação confiável é sempre importante.";

        if (input.includes("informativo"))
            return "Nosso objetivo é fornecer informações educativas.";

        if (input.includes("ajuda rápida"))
            return "Estou aqui para ajudar da melhor forma possível.";

        if (input.includes("obrigado pela atenção"))
            return "😊 Foi um prazer ajudar você!";

        if (input.includes("até amanhã"))
            return "Até amanhã! Cuide-se e volte sempre que precisar.";

        if (input.includes("voltei"))
            return "😄 Que bom ter você de volta! Como posso ajudar?";

        if (input.includes("muito legal"))
            return "😄 Obrigado! Fico feliz que tenha gostado.";

    // Ouvinte para a tecla Enter
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
}});