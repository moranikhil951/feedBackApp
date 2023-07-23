// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {reacted: false}

  feedBackButton = () => {
    this.setState({reacted: true})
  }

  render() {
    const {reacted} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="container">
        {reacted ? (
          <div className="thankyou-con">
            <img
              alt="love emoji"
              className="love-and-support-img"
              src={loveEmojiUrl}
            />
            <h1>Thank You</h1>
            <p className="para-suuport">
              We use your feedback to improve our customer support performances
            </p>
          </div>
        ) : (
          <div className="reaction-con">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="unordered-list">
              {emojis.map(eachReaction => (
                <li className="listed-items" key={eachReaction.id}>
                  <button
                    className="button"
                    type="button"
                    onClick={this.feedBackButton}
                  >
                    <img
                      alt={eachReaction.name}
                      src={eachReaction.imageUrl}
                      className="emojiReaction"
                    />
                    <p>{eachReaction.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
