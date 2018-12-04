import React, {Component} from 'react';

export default class NewQuoteButton extends Component {
    render() {
        return (
                <a href=""id="new-quote" onClick={this.props.handleOnClick}>
                    New Quote
                </a>
        )
    }

}