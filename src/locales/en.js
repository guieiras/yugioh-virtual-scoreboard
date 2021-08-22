const en = {
  metadata: {
    country: 'US',
    name: 'English'
  },
  AppMenu: {
    remote: 'Remote Control',
    show: 'Presentation',
    title: 'Remote Duels Show'
  },
  Command: {
    descriptionAdd: 'Increase Player {{player}} life points by {{value}}',
    descriptionClean: 'Reset both players life points to 8000',
    descriptionDivide: 'Divide Player {{player}} life points by {{value}}',
    descriptionDraw: 'End current game as Draw',
    descriptionInvalid: 'Invalid command',
    descriptionSet: 'Change Player {{player}} life points to {{value}}',
    descriptionSubtract: 'Reduce Player {{player}} life points by {{value}}',
    descriptionWin: 'End current game as a Player {{player}} win',
    title: 'Command editor'
  },
  CommandHelp: {
    action: 'Action',
    actions: 'Actions',
    actionAdd: 'Increase life points',
    actionClean: 'Reset both players life points',
    actionDraw: 'End current game as Draw',
    actionDivide: 'Divide life points (if no value is used, it will divide by half)',
    actionSet: 'Change life points to given value',
    actionSubtract: 'Reduce life points',
    actionWin: 'End current game as win',
    close: 'Close',
    description1: `Commands are an easy way to control life points using only a keyboard.
     It's a better alternative to the calculator, which is made to be used with mobile devices.`,
    description2: 'A command is built with 3 parts: <b>{{player}}</b>, <b>{{action}}</b> and <b>{{value}}</b>.',
    description3: `Let's see the following command: <l>1-1500</l>. On this example, we are using Player <l>1</l>,
    the <l>-</l> (reduction) action and <l>1500</l> on value`,
    description4: 'After pressing <kbd>Enter</kbd>, Player 1 life points will be reduced by 1500.',
    globalActions: 'Global Actions',
    globalActionsDescription: `The actions below will affect both players, but their commands must follow the same pattern.
      (you can use either 1 or 2 before the action, the result will be the same).`,
    howToUse: 'How to use Command mode',
    player: 'Player',
    players: 'Players',
    playerReference: 'Use Player {{count}} as reference',
    value: 'Value'
  },
  Game: {
    actionAdd: 'Increase',
    actionClean: 'Reset life points',
    actionDivide: 'Divide',
    actionSet: 'Change to',
    actionSubtract: 'Reduce',
    clock: 'Clock',
    commandEditor: 'Command mode',
    deck: 'Deck',
    desktopMode: 'Desktop mode',
    desktopModeDescription: 'Desktop mode works better using Mouse and Keyboard',
    draw: 'Draw',
    globalActions: 'Global actions',
    player: 'Player {{count}}',
    playerName: 'Player name',
    match: 'Match',
    noDeckFound: 'No deck found',
    reset: 'Reset',
    sync: 'Sync screen',
    syncDescription: 'Type pairing code below to control a screen',
    syncSubmit: 'Sync',
    timerPause: 'Pause',
    timerStop: 'Stop',
    timerResume: 'Resume',
    timerStart: 'Start',
    whoWon: 'Who won current game?'
  },
  Landing: {
    description: 'Interative widget with info to your Yu-Gi-Oh! Remote Duels. You can control it using your computer or smartphone.',
    configuring: 'How to configure?',
    configuring1: 'You can use a browser source on your favorite broadcast software or open link directly on your browser.',
    configuring2: 'The links on table below can help you to setup a browser source on famous broadcast softwares. Use the following URL:',
    open: 'Open',
    app: 'Software',
    link: 'Link'
  },
  Lobby: {
    header: 'Presentation mode',
    info: 'To control this screen, use shown QR Code or enter the following URL',
    mirrorDescription: 'Use code below to pair this screen with a remote',
    mirrorHeader: 'Remote pairing mode'
  },
  MatchOptions: {
    0: 'No Match',
    3: 'Best of 3',
    5: 'Best of 5'
  },
  MatchTimeOptions: {
    0: 'No time',
    '-1': 'Progressive',
    30: '30 minutes',
    40: '40 minutes',
    50: '50 minutes',
    60: '1 hour'
  },
  Presentation: {
    unsupportedLayout: 'This layout is not supported'
  },
  Remote: {
    title: 'Sync remote',
    description: 'Type pairing code below to control a screen',
    sync: 'Sync'
  }
}

export default en
