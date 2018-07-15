import React, { Component } from 'react';
import { Markdown } from 'react-showdown';
import './Markdown.css';

let defaultText = `Type your markdown on the left and the preview will appear on the right ->`;

export class TextArea extends Component{
    constructor(props) {
        super(props);
        this.state={
            text: '',
            test: 'Some data'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e){
        this.setState(
            {
                text: e.target.value
            }
        );
    }
    //Text go in, preview come out.
    render(){
        return(
            <div id='container'>
                <textarea onChange={this.handleChange} id='text' defaultValue={defaultText}></textarea>
                <div className='markdown-preview'>
                <Markdown markup={ this.state.text } style='min-width: 100%' />
                </div>
            </div>
        )
    }
}