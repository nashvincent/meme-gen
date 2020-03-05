import React from "react"
import FinalMeme from "../components/FinalMeme"

class MemeHandler extends React.Component {
    constructor() {
        super()
        this.state = {
            allMemes: [],
            selectedMeme: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState( {allMemes: memes} )
            })
    }

    handleClick(template) {
        this.setState({selectedMeme: template})
    }

    render() {
        const imgList = this.state.allMemes.map(item => <img
            style={{ width:400, height:500, padding:"6px 10px" }}
            key={item.id} 
            src={item.url} 
            alt={item.name} 
            onClick={() => {
                this.handleClick(item)
            }}
            />)

        return (
            <div>
                {this.state.selectedMeme && <FinalMeme template={this.state.selectedMeme}/>}
                {!this.state.selectedMeme && imgList}
            </div>
        )
    }
}

export default MemeHandler