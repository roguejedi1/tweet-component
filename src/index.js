import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import moment from "moment"
import PropTypes from "prop-types"

function Tweet({tweet}){
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <Author author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

Tweet.propTypes = {
    tweet: PropTypes.shape({
        Avatar: {
            hash: PropTypes.string
        },
        Author: PropTypes.shape({
            name: PropTypes.string,
            handle: PropTypes.string
        }),
        Message: {
            text: PropTypes.string
        },
        LikeButton: {
            count: PropTypes.number
        }
    })
}

function Avatar({hash}){
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img 
            src={url}
            className="avatar"
            alt="avatar"
        />
    )
}

Avatar.propTypes = {
    hash: PropTypes.string
}

function Message({text}){
    return (
        <div className="message">
            {text}
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string
}

function Author({author}){
    const {name, handle} = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string,
        handle: PropTypes.string
    }).isRequired
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow()
    return (
        <span className="time">{timeString}</span>
    )
}

Time.propTypes = {
    time: PropTypes.string
}

const ReplyButton = ({count}) => (
    <span>
        <i className="fa fa-reply reply-button"/>
    </span>
)

const RetweetButton = ({count}) => (
    <span className="retweet-button">
    <i className="fa fa-retweet"/>
    {getRetweetCount(count)}
    </span>
)

RetweetButton.propTypes = {
    count: PropTypes.number
}

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>
        }
    </span>
)

LikeButton.propTypes = {
    count: PropTypes.number
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
)

const testTweet = {
    message: 'This is a tweet',
    gravatar: 'xyz',
    author: {
        handle: 'tweeter',
        name: 'Elon Musk'
    },
    likes: 2,
    retweets: 10,
    timestamp: '2022-07-10 21:24:30'
}

function getRetweetCount(count){
    if(count > 0) {
        return (
        <span className="retweet-count">
            {count}
        </span>
        )
    } else {
        return null
    }
}

ReactDOM.render(
    <Tweet tweet={testTweet} />,
    document.querySelector('#root')
)