import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import moment from "moment"

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

function Message({text}){
    return (
        <div className="message">
            {text}
        </div>
    )
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

const Time = ({time}) => {
    const timeString = moment(time).fromNow()
    return (
        <span className="time">{timeString}</span>
    )
}

const ReplyButton = ({count}) => (
    <span>
        <i className="fa fa-reply reply-button"/>
        {getRetweetCount(count)}
    </span>
)

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
)

const LikeButton = ({count}) => (
    <span>
        <i className="fa fa-heart like-button"/>
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>
        }
    </span>
)

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
    retweets: 0,
    timestamp: '2022-07-10 21:24:30'
}

function getRetweetCount(count){
    if(count > 0) {
        <span className="retweet-count">
            {count}
        </span>
    } else {
        return null
    }
}

ReactDOM.render(
    <Tweet tweet={testTweet} />,
    document.querySelector('#root')
)