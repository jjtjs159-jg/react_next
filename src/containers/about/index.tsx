import { Component } from 'react';
import { Header } from 'components/headers';
import { ThemeContext, themes, Theme } from 'contexts/Theme/ThemeContext';
// import classnames from 'classnames/bind';
// import styles from './index.module.scss';

// const cx = classnames.bind(styles);

interface Props {
    data: {
        name?: string;
        id?: number;
    };
}

interface State {
    theme: Theme;
    toggleTheme: () => void;
}

class Index extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            theme: themes.light,
            toggleTheme: () => {
                this.setState({
                    theme:
                        this.state.theme === themes.light
                            ? themes.dark
                            : themes.light,
                });
            },
        };
    }
    render() {
        const { data } = this.props;

        return (
            <ThemeContext.Provider value={this.state}>
                <ThemeContext.Consumer>
                    {({ theme, toggleTheme }) => (
                        <div style={{ ...theme }}>
                            <Header />
                            <div>어어어어</div>
                            {data.name} ABOUT
                            <br />
                            <button onClick={toggleTheme}>Change Theme</button>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        );
    }
}

export default Index;
