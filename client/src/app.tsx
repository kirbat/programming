import * as React from 'react'

const message = 'my BUM'

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>{message}</div>
                <img width = {400} src="https://wallpapercave.com/wp/LW6Txh0.jpg" alt=""/>
            </div>
        )
    }
}