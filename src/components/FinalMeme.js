import React from "react"

class FinalMeme extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]:value }) 
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>{this.props.template.name}</h1>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                </form>
                <div className="meme">
                    <img 
                        src={this.props.template.url} 
                        alt={this.props.template.name}
               
                    />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>

                <footer>
                    <h4 style={{textAlign: "center"}}>Take a screenshot to save your meme!</h4>
                </footer>
            </div>
        )
    }
}

export default FinalMeme