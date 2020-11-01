import { Component, Fragment } from 'react';
import { Header } from 'components/headers';
import { ThemeContext, themes, Theme } from 'contexts/Theme/ThemeContext';
import BaseDialog from 'components/dialogs/BaseDialog';
import Button from '@material-ui/core/Button';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface Props {
    data: {
        name?: string;
        id?: number;
    };
    error: any;
}

interface State {
    theme: Theme;
    toggleTheme: () => void;
    isOpenDialog: boolean;
}

class Index extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            theme: themes.light,
            toggleTheme: () => {
                this.setState({
                    theme: this.state.theme === themes.light ? themes.dark : themes.light,
                });
            },
            isOpenDialog: false,
        };
    }

    handleDialog = () => {
        this.setState({
            isOpenDialog: !this.state.isOpenDialog,
        });
    };

    render() {
        const { data } = this.props;
        const { isOpenDialog } = this.state;

        return (
            <Fragment>
                <ThemeContext.Provider value={this.state}>
                    <ThemeContext.Consumer>
                        {({ theme, toggleTheme }) => (
                            <div style={{ ...theme }}>
                                {/* <Header /> */}
                                <div>어어어어aa</div>
                                {data.name} ABOUT
                                <br />
                                <button onClick={toggleTheme}>Change Theme</button>
                                <button onClick={this.handleDialog}>Open Dialog</button>
                                <div className={cx('content-box')}>내용1</div>
                                <br />
                                <div className={cx('border-box')}>내용2</div>
                            </div>
                        )}
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
                {isOpenDialog && (
                    <BaseDialog onClose={this.handleDialog}>
                        <h1>Dialog Title</h1>
                        <div style={{ textAlign: 'center' }}>
                            Contents
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => alert('버튼클릭')}
                            >
                                Click
                            </Button>
                        </div>
                    </BaseDialog>
                )}
            </Fragment>
        );
    }
}

export default Index;
