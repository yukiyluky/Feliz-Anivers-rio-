document.getElementById("abrirPresente").addEventListener("click", () => {
    const mensagens = [
    "Hoje é o seu dia — um marco cheio de luz e significado. Que você desperte com o coração tranquilo, envolvida por uma atmosfera de amor, esperança e gratidão. Que cada detalhe da sua rotina hoje — desde o primeiro bom dia até o último abraço da noite — seja envolvido por alegria verdadeira. Você é uma mulher que inspira, que encanta com sua forma de viver, de cuidar e de sonhar. Que a leveza esteja presente em seus passos, que você dance com a vida, mesmo nas tempestades, e que a esperança nunca te abandone. Feliz aniversário! Que a sua jornada continue linda e cheia de significado.",
    
    "Neste dia sagrado e cheio de simbolismo, que a presença de Deus esteja ainda mais forte na sua vida. Que Ele derrame bênçãos sobre cada desejo do seu coração, acalme suas inquietações e fortaleça sua fé. Que você sinta, em cada gesto de carinho que receber hoje, um reflexo do cuidado divino. Que sua alma se fortaleça na certeza de que tudo tem um tempo, um propósito e uma razão, e que o céu sempre conspira a favor de quem anda com o coração puro. Que seus sonhos mais silenciosos encontrem realização. Feliz aniversário! Que sua vida seja regida por propósito, fé e amor.",
    
    "Desejo que este novo ano seja como um campo fértil, pronto para receber todas as sementes que você plantou com tanto amor, esforço e fé. Que a saúde te acompanhe com generosidade, sendo o alicerce para cada conquista e cada nova aventura. Que o sucesso chegue com o brilho do merecimento — aquele que vem da entrega verdadeira, da dedicação silenciosa e da integridade de quem faz tudo com o coração. E que a paz — essa que vem de dentro e independe das circunstâncias — seja sua aliada nos dias bons e, principalmente, nos mais desafiadores. Que você viva esse novo ciclo com plenitude, alegria e consciência do quanto é incrível.",
    
    "Hoje é uma data sagrada: o dia em que o mundo recebeu um dos seus maiores presentes — você. Que esse seja um dia de celebração completa, com fé no coração, brilho no olhar e gratidão transbordando. Que você se permita viver cada instante como se fosse único, se conectando com tudo aquilo que te faz vibrar por dentro. Dance, cante, abrace, coma seu doce preferido, se emocione com palavras simples. Permita-se ser feliz sem reservas. Você é uma mulher incrível, cheia de vida, sabedoria e luz. Que essa luz se expanda ainda mais neste novo ciclo que começa agora.",
    
    "Você está prestes a começar um novo capítulo — e ele tem tudo para ser inesquecível. Que esta fase traga leveza aos seus dias, conquistas que tragam orgulho e surpresas boas que renovem sua fé na vida. Que você cresça com cada desafio, se emocione com cada vitória e se descubra ainda mais forte e sábia a cada nova experiência. Que o universo te abrace em forma de encontros verdadeiros, portas que se abrem, e caminhos que fazem seu coração pulsar de entusiasmo. Você merece viver momentos incríveis — e este ciclo é a oportunidade perfeita para isso.",
    
    "Hoje é o dia de olhar para si com todo carinho do mundo. De se lembrar da mulher maravilhosa que você é — da sua história, da sua força, das suas escolhas, dos seus sonhos. Receba cada mensagem, cada abraço, cada carinho com o coração aberto. Sinta-se envolvida pelo amor que você inspira nas pessoas. Tire um tempo só para você, para se permitir sorrir à toa, agradecer por estar viva e renovar suas energias para o novo ciclo que chega. Você merece o melhor da vida — não apenas hoje, mas sempre. Que este aniversário seja apenas o primeiro de muitos dias inesquecíveis!",
    
    "Que este novo ciclo tenha a doçura dos momentos simples e a leveza das festas que deixam a alma sorrindo. Que seus dias tenham gosto de alegria genuína, de conquistas pequenas, mas cheias de significado. Que a sua rotina seja leve como confete ao vento — colorida, divertida, cheia de boas surpresas. Que você tenha tempo para rir com quem ama, dançar com a vida e valorizar cada instante, mesmo os mais comuns. Que tudo que chegar até você seja carregado de amor, energia boa e verdade. Que o seu ano seja uma festa contínua, doce, vibrante e cheia de luz!",
    
    "Você é rara — dessas pessoas que encantam com a alma, que tocam com palavras e transformam com gestos. Que sua vida continue refletindo a beleza que você carrega por dentro. Que o amor esteja presente em tudo: nas relações, nas escolhas, nos caminhos. Que você nunca duvide do seu valor e da sua capacidade de fazer a diferença. Que a luz que te guia nunca se apague. Que você brilhe, mesmo nos dias cinzas. E que o propósito que pulsa dentro do seu peito continue te levando adiante, com coragem, ternura e verdade. Você é especial demais — e merece um novo ano absolutamente incrível!",
    
    "Chegou o momento de virar a página e começar uma nova fase — com mais maturidade, mais leveza e ainda mais disposição para viver tudo o que a vida reserva. Que você olhe para frente com confiança, sabendo que já enfrentou muito e venceu. Que esse novo ciclo seja um tempo de reconexão com você mesma, com seus valores e com seus sonhos mais verdadeiros. Você tem força, sabedoria e brilho de sobra para tornar este ano o melhor da sua vida. Que ele venha recheado de realizações que emocionam, pessoas que somam e experiências que transformam!",
    
    "Que este ano que se inicia seja muito mais do que bom — que ele seja extraordinário. Que você descubra novos caminhos, conquiste novos sonhos e sinta, dia após dia, o gosto da realização. Que não falte coragem para ir além, sensibilidade para se ouvir e determinação para seguir mesmo quando o mundo parecer dizer o contrário. Que você se sinta amada em todas as formas: pelo que é, pelo que faz e pelo que sonha ser. Que as boas surpresas te encontrem desprevenida, e que os dias comuns sejam recheados de significado. Feliz novo ciclo! Você é capaz de alcançar o extraordinário — e esse é só o começo."
];

    const mensagemSorteada = mensagens[Math.floor(Math.random() * mensagens.length)];

    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = mensagemSorteada;
    mensagem.classList.remove("hidden");

    const titulo = document.getElementById("titulo");
    titulo.textContent = "Parabéns, feliz aniversário!!!!";

    const musica = document.getElementById("musica");
    if (musica) musica.play();

    confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 }
    });

    document.getElementById("abrirPresente").style.display = "none";
});
