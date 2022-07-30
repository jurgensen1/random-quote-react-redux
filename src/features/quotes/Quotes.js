import React from 'react';
import { connect } from 'react-redux';
import { LeftArrow, RightArrow, QuoteNumber } from '../counter/Counter';
import styles from './Quotes.module.scss';
import {
    setStateData
} from './quotesSlice';


export class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
          input: event.target.value
        });
    }
    componentDidMount() {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true,
                    input: ''
                });
            });
    }
    submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({
          input: ''
        });
    }
    // componentDidUpdate() {
    //     this.props.submitMessage;
    // }
    render() {
        const { DataisLoaded } = this.state;
        if (!DataisLoaded)
            return (
                <div id={styles.quotes}>
                    <div className={styles.textError}>Please Wait :)</div>
                    <div id={styles.quoteInfo}><LeftArrow /><p>Quote <QuoteNumber value={this.props.value} /> of {this.state.items.length}</p><RightArrow /></div>
                </div>
            );
        if (this.props.value > 1642 || this.props.value < 0) {
            return (
                <div id={styles.quotes}>
                    <div id={styles.textError}>Numbers 1 - 1642 Only</div>
                    <div id={styles.quoteInfo}><LeftArrow /><p>Quote <QuoteNumber value={this.props.value} /> of {this.state.items.length}</p><RightArrow /></div>

                </div>);
        } else {
            return (
                <div id={styles.quotes}>
                    <a
                        id="tweet-quote"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                            encodeURIComponent('"' +
                                this.state.items[this.props.value].text
                                + '" '
                                + (this.state.items[this.props.value].author !== null
                                    ? this.state.items[this.props.value].author
                                    : "Anonymous"))}
                    >
                        <button
                            id={styles.tweetButton}
                            title="tweet this quote">
                            <i class="fa-brands fa-twitter fa-2x"></i>
                        </button>
                    </a>
                    <div id={styles.text}><p>{this.state.items[this.props.value].text}</p></div>
                    <div id={styles.author}><p>— {this.state.items[this.props.value].author !== null ? this.state.items[this.props.value].author : "Anonymous"}</p></div>
                    <div id={styles.quoteInfo}><LeftArrow /><p>Quote <QuoteNumber value={this.props.value} id={styles.quoteNumberInput} /> of {this.state.items.length}</p><RightArrow /></div>
                </div>
            );
        }
    }
}
const mapDispatchToProps = { setStateData };

const mapStateToProps = (state) => {
    return {
        quote: state.quotes.quote,
        author: state.quotes.author
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);