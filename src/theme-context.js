import React from 'react';

export const themes = {
    light: {
        color: '#111',
        background: '#EEE',
        padding: '5px',

        a: { color: '#9f0dcd' }
    },

    dark: {
        color: '#FFF',
        background: '#222',
        padding: '5px',
        a: { color: '#faf697', },
    },

}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;