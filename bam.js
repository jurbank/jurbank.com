var rework    = require('rework'),
    pureGrids = require('rework-pure-grids');

// Creates a 12ths-based Grid.
var css = rework('').use(pureGrids.units(12, {
    mediaQueries: {
        sm  : 'screen and (min-width: 30em)',
        med : 'screen and (min-width: 48em)',
        lrg : 'screen and (min-width: 64em)',
        xlrg: 'screen and (min-width: 75em)'
    }
})).toString();