document.addEventListener('DOMContentLoaded', () => {

    const messagesContainer = document.getElementById('chat-messages');
    const userInput = document.getElementById('chat-input-field');
    const sendBtn = document.getElementById('send-btn');

    if (!messagesContainer || !userInput || !sendBtn) {
        console.error('Elementos do chat não encontrados.');
        return;
    }

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerText = text;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function sendMessage() {
        const text = userInput.value.trim();

        if (!text) return;

        appendMessage(text, 'user');
        userInput.value = '';

        setTimeout(() => {
            const response = getBotResponse(text.toLowerCase());
            appendMessage(response, 'bot');
        }, 600);
    }

    function getBotResponse(input) {

        if (input.includes("oi") || input.includes("olá") || input.includes("ola"))
            return "Olá! Seja bem-vindo ao ToxoBot. 😊";

        if (input.includes("boa tarde"))
            return "Boa tarde! Estou aqui para tirar suas dúvidas sobre toxoplasmose.";

        if (input.includes("boa noite"))
            return "Boa noite! Como posso ajudar você hoje?";

        if (input.includes("bom dia"))
            return "Bom dia! Estou aqui para ajudar você com informações sobre toxoplasmose.";

        if (input.includes("tudo bem") || input.includes("como vai") || input.includes("como você está"))
            return "Estou bem, obrigado! E você?";

        if (input.includes("qual é o seu nome") || input.includes("como você se chama"))
            return "Eu sou a Iasmim, sua assistente virtual sobre toxoplasmose.";

        if (input.includes("o que é toxoplasmose") || input.includes("o que é toxo"))
            return "A toxoplasmose é uma doença causada pelo protozoário Toxoplasma gondii. Ela pode ser adquirida por contato com fezes de gatos infectados, consumo de carne mal passada ou contato com solo contaminado.";

        if (input.includes("quais são os sintomas") || input.includes("sintomas da toxoplasmose") || input.includes("sintomas toxoplasmose"))
            return "Os sintomas da toxoplasmose podem incluir febre, dor de cabeça, fadiga, dores musculares e, em casos mais graves, problemas neurológicos. Muitas pessoas podem ser assintomáticas.";

        if (input.includes("como prevenir") || input.includes("prevenção") || input.includes("prevenir toxoplasmose"))
            return "Para prevenir a toxoplasmose, evite contato com fezes de gatos, cozinhe bem a carne, lave bem frutas e verduras e use luvas ao trabalhar com solo.";

        if (input.includes("posso pegar toxoplasmose com meu gato") || input.includes("meu gato tem toxoplasmose") || input.includes("gato e toxoplasmose"))
            return "Sim, os gatos são os hospedeiros definitivos do Toxoplasma gondii. Eles podem eliminar o parasita nas fezes, mas a transmissão para humanos geralmente ocorre por contato direto com as fezes ou ingestão de alimentos contaminados.";

        if (input.includes("posso pegar toxoplasmose comendo carne") || input.includes("carne e toxoplasmose") || input.includes("carne mal passada"))
            return "Sim, a toxoplasmose pode ser adquirida por consumo de carne mal passada contendo cistos do parasita.";

        if (input.includes("posso pegar toxoplasmose comendo frutas ou verduras") || input.includes("frutas e toxoplasmose") || input.includes("verduras e toxoplasmose"))
            return "Sim, a toxoplasmose pode ser adquirida por frutas ou verduras contaminadas. Lave bem os alimentos antes de consumi-los.";

        if (input.includes("posso pegar toxoplasmose comendo alimentos contaminados") || input.includes("alimentos contaminados e toxoplasmose"))
            return "Sim, a toxoplasmose pode ser adquirida por alimentos contaminados com o parasita.";

        if (input.includes("posso pegar toxoplasmose comendo alimentos crus") || input.includes("alimentos crus e toxoplasmose"))
            return "Sim, alimentos crus ou mal cozidos podem transmitir a toxoplasmose.";

        if (input.includes("posso pegar toxoplasmose comendo alimentos mal passados") || input.includes("alimentos mal passados e toxoplasmose"))
            return "Sim, alimentos mal passados podem conter cistos do parasita.";

        if (input.includes("duvida") || input.includes("dúvida") || input.includes("dúvidas"))
            return "Para dúvidas detalhadas, acesse a seção 'Dúvidas' ou inicie sua avaliação.";

        if (input.includes("avaliação") || input.includes("avaliacao") || input.includes("iniciar avaliação") || input.includes("iniciar avaliacao") || input.includes("iniciar teste"))
            return "Ótimo! Para iniciar sua avaliação, acesse a seção 'Avaliação' no menu principal.";

        if (input.includes("ver sintomas") || input.includes("onde posso ver os sintomas"))
            return "Você pode encontrar informações sobre sintomas na seção de Toxoplasmose do site.";

        if (input.includes("ver prevenção") || input.includes("ver prevencao") || input.includes("onde posso ver a prevenção"))
            return "As informações sobre prevenção estão disponíveis na página principal e nas páginas informativas.";

        if (input.includes("ver dúvidas") || input.includes("ver duvidas") || input.includes("onde posso ver as dúvidas"))
            return "Acesse a seção 'Dúvidas' para encontrar respostas frequentes.";

        if (input.includes("onde posso iniciar a avaliação"))
            return "Você pode iniciar sua avaliação pela página 'Avaliação'.";

        if (input.includes("ver tratamento") || input.includes("ve tratamento") || input.includes("onde posso ver o tratamento"))
            return "As informações sobre tratamento estão disponíveis na página 'Tratamentos'.";

        if (input.includes("obrigado") || input.includes("obrigada") || input.includes("obrigadx") || input.includes("valeu") || input.includes("vlw") || input.includes("brigado") || input.includes("brigada") || input.includes("brigadx"))
            return "De nada! Estou aqui para ajudar. 😊";

        if (input.includes("tchau") || input.includes("até mais") || input.includes("ate mais") || input.includes("adeus") || input.includes("falou"))
            return "Tchau! Foi um prazer ajudar você. 👋";

        return "Desculpe, não entendi sua pergunta. Tente reformular ou consulte as informações do site.";
    }

    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

});