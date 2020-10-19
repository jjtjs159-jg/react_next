import { createContext } from 'react';

export type Theme = {
    color: string;
    background: string;
};

export const themes = {
    light: {
        color: '#000000',
        background: '#EEEEEE',
    },
    dark: {
        color: '#FFFFFF',
        background: '#222222',
    },
};

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
