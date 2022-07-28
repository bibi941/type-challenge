{

    type MyLength<T extends any[]> = T['length']

    type tesla = ['tesla', 'model 3', 'model X', 'model Y']
    type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

    type teslaLength = MyLength<tesla> // expected 4
    type spaceXLength = MyLength<spaceX> // expected 5
}