import React, { Component, Fragment } from 'react'

// const Index: FunctionComponent = () => {
//     return <Fragment>메인페이지</Fragment>;
// };

interface Props {}

interface State {
    loaded: boolean
}

class Index extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loaded: false,
        }
    }

    static getDerivedStateFromProps() {
        console.log('zz')
        return null
    }

    handleClick = () => {
        this.setState({
            loaded: true,
        })
    }

    render() {
        return <div onClick={this.handleClick}>azz</div>
    }
}

export default Index
