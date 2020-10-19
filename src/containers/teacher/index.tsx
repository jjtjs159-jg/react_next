import { FunctionComponent, Fragment, useContext, useState } from 'react';
import { Header } from 'components/headers';
import { ThemeContext, themes } from 'contexts/Theme/ThemeContext';

interface Props {
    data: {
        name: string;
    };
}

const Index: FunctionComponent<Props> = ({ data }) => {
    const context = useContext(ThemeContext);
    console.log(context);
    const [theme, setTheme] = useState(context.theme);

    context.toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <Fragment>
            <Header />
            <div style={{ ...theme }}>
                <br />
                TEACHER
                <br />
                {data.name}
                <br />
                <button onClick={context.toggleTheme}>Change Theme</button>
            </div>
        </Fragment>
    );
};

export default Index;
