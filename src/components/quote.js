import React, {Component} from 'react';


const Quote = (props) => {
    return(
        <div className='quote'>
            <div id="text" dangerouslySetInnerHTML={{__html: props.quote.data[0].content}}>
                {/*{props.quote.data[0].content}*/}
            </div>
            <div id="author">
                {props.quote.data[0].title}

            </div>

        </div>
    )
}

export default Quote;