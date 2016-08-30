import React, { Component, PropTypes } from 'react';
import Codemirror from 'react-codemirror';
require('codemirror/mode/haskell/haskell');

class Editor extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            code: "// Code"
        };

        this.updateCode = this.updateCode.bind(this);
    }
    
    updateCode(newCode) {
        this.setState({ code: newCode });
        console.log(this.state);
    }

    render() {
        var options = {
            lineNumbers: true,
            mode: 'haskell',
            theme: 'base16-dark'
        };
        return <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
    }
}

export default Editor;