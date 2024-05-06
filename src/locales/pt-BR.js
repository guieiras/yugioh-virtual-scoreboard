const ptBR = {
  metadata: {
    country: 'BR',
    name: 'Português (Brasil)'
  },
  AppMenu: {
    remote: 'Controle Remoto',
    show: 'Apresentação',
    title: 'Yu-Gi-Oh! Virtual Scoreboard'
  },
  Command: {
    descriptionAdd: 'Jogador {{player}} ganha {{value}} pontos de vida',
    descriptionClean: 'Limpa os pontos de vida de ambos os jogadores',
    descriptionDivide: 'Divide os pontos de vida do jogador {{player}} por {{value}}',
    descriptionDraw: 'Empate no jogo atual',
    descriptionInvalid: 'O comando não é válido',
    descriptionSet: 'Altera os pontos de vida do jogador {{player}} por {{value}}',
    descriptionSubtract: 'Jogador {{player}} perde {{value}} pontos de vida',
    descriptionWin: 'Vitória do Jogador {{player}} no jogo atual',
    title: 'Editor de comando'
  },
  CommandHelp: {
    action: 'Ação',
    actions: 'Ações',
    actionAdd: 'Aumentar os pontos de vida',
    actionClean: 'Limpar os pontos de vida de ambos os jogadores',
    actionDraw: 'Declarar empate',
    actionDivide: 'Dividir os pontos de vida (se nenhum valor é usado, divide por 2)',
    actionSet: 'Alterar os pontos de vida para o valor',
    actionSubtract: 'Reduzir os pontos de vida',
    actionWin: 'Declarar vitória para o jogador',
    close: 'Fechar',
    description1: `Os comandos são uma forma fácil de controlar os pontos de vida usando apenas o teclado.
    É uma alternativa mais prática do que a calculadora, que funciona melhor com dispositivos móveis.`,
    description2: 'Um comando é composto por 3 partes: <b>{{player}}</b>, <b>{{action}}</b> e <b>{{value}}</b>.',
    description3: `Vamos supor o seguinte comando: <l>1-1500</l>. Neste exemplo, o jogador é <l>1</l>,
    a ação é o <l>-</l> (subtração) e o valor é <l>1500</l>`,
    description4: 'Ao apertar <kbd>Enter</kbd>, os pontos de vida do jogador 1 serão reduzidos em 1500.',
    globalActions: 'Ações Globais',
    globalActionsDescription: `As ações abaixo afetam ambos os jogadores, mas seus comandos precisam seguir o mesmo padrão
      (pode usar tanto 1 quanto 2 antes do caracter de ação, o resultado será o mesmo).`,
    howToUse: 'Como usar o modo de comando',
    player: 'Jogador',
    players: 'Jogadores',
    playerReference: 'Usa o Jogador {{count}} como referência',
    value: 'Valor'
  },
  Footer: {
    developedBy: 'Criado e desenvolvido por <lk>{{name}}</lk>',
    link: 'https://me.guieiras.dev'
  },
  Game: {
    actionAdd: 'Adicionar',
    actionClean: 'Redifinir pontos de vida',
    actionDivide: 'Dividir',
    actionSet: 'Alterar',
    actionSubtract: 'Subtrair',
    clock: 'Relógio',
    commandEditor: 'Editor de comando',
    deck: 'Deck',
    deckName: 'Nome do deck',
    desktopMode: 'Modo Desktop',
    desktopModeDescription: 'O modo desktop é otimizado para ser operado do computador',
    draw: 'Empate',
    globalActions: 'Ações Globais',
    language: 'Idioma',
    match: 'Match',
    noDeckFound: 'Nenhum deck encontrado',
    player: 'Jogador {{count}}',
    playerName: 'Nome do jogador',
    reset: 'Redefinir',
    sync: 'Sincronizar tela',
    syncDescription: 'Digite o código de pareamento para sincronizar a tela',
    syncSubmit: 'Sincronizar',
    timerPause: 'Pausar',
    timerStop: 'Zerar',
    timerResume: 'Retomar',
    timerStart: 'Iniciar',
    whoWon: 'Quem venceu o game atual?'
  },
  Landing: {
    description: 'Um widget interativo com informações para livestreams e duelos remotos de Yu-Gi-Oh! controlável através do computador ou smartphone.',
    configuring: 'Como configurar?',
    configuring1: 'Você pode usar um programa que exiba um navegador ou abrir diretamente o link no seu navegador.',
    configuring2: 'Use um desses tutoriais para iniciar. Configure a fonte usando a seguinte URL:',
    open: 'Abrir',
    app: 'Programa',
    link: 'Link'
  },
  Lobby: {
    header: 'Modo de apresentação',
    info: 'Entre usando o QR Code acima ou através da seguinte URL',
    mirrorDescription: 'Digite o código abaixo no dispositivo em modo de controle',
    mirrorHeader: 'Código de pareamento'
  },
  MatchOptions: {
    0: 'Sem Match',
    3: 'Melhor de 3',
    5: 'Melhor de 5'
  },
  MatchTimeOptions: {
    0: 'Nenhum',
    '-1': 'Progressivo',
    30: '30 minutos',
    40: '40 minutos',
    45: '45 minutos',
    50: '50 minutos',
    60: '1 hora'
  },
  Presentation: {
    unsupportedLayout: 'Esse Layout não é compatível'
  },
  Remote: {
    title: 'Controle Remoto',
    description: 'Digite o código de pareamento da sua tela para obter o controle',
    sync: 'Sincronizar'
  }
}

export default ptBR
