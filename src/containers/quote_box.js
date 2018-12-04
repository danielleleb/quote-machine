import React, {Component} from 'react';
import {connect} from 'react-redux';
import Quote from '../components/quote';
import NewQuoteButton from '../components/new_quote';
import { fetchQuote } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import TweetQuote from '../components/TweetQuote';


class QuoteBox extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.fetchQuote()
    }
    handleClick = (event) => {
        event.preventDefault()
        console.log('click')
        this.props.fetchQuote()
    }
    render() {
        if (!this.props.quote) {
            return( <div>Loading</div>)
        }

        return (
            <div id="quote-box" className="quote-box">
                <Quote quote={this.props.quote}/>
                <NewQuoteButton handleOnClick={this.handleClick}/>
                <TweetQuote/>
            </div>
        )
    }
}

function mapPropsToState(state) {
    return {
       quote: state.quote[0]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchQuote}, dispatch)
}


export default connect(mapPropsToState, mapDispatchToProps)(QuoteBox);