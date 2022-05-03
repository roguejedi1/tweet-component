import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import PropTypes from "prop-types"
import Avatar from "./Avatar"
import Author from "./Author"
import {ReplyButton, RetweetButton, LikeButton, MoreOptionsButton} from "./Buttons"
import Time from "./Time"
import Message from "./Message"

function TimeLine({tweets}){
    return (
        <>
        {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet}/>
        ))}
        </>
    )
}

TimeLine.propTypes = {
    tweets: PropTypes.array
}

function Tweet({tweet}){
    return (
        <>
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
        </>
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

const testTweet = [
    {
        message: 'This is a tweet',
        gravatar: 'xyz',
        author: {
            handle: 'tweeter',
            name: 'Elon Musk'
        },
        likes: 2,
        retweets: 10,
        timestamp: '2022-07-10 21:24:30'
    },
    {
        message: 'This is a tweet',
        gravatar: 'xyz',
        author: {
            handle: 'tweeter',
            name: 'Elon Musk'
        },
        likes: 2,
        retweets: 10,
        timestamp: '2022-07-10 21:24:30'
    },
    {
        message: 'This is a tweet',
        gravatar: 'xyz',
        author: {
            handle: 'tweeter',
            name: 'Elon Musk'
        },
        likes: 2,
        retweets: 10,
        timestamp: '2022-07-10 21:24:30'
    },
    {
        message: 'This is a tweet',
        gravatar: 'xyz',
        author: {
            handle: 'tweeter',
            name: 'Elon Musk'
        },
        likes: 2,
        retweets: 10,
        timestamp: '2022-07-10 21:24:30'
    },
    {
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
]

const demoTweet = {
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

ReactDOM.render(
    <TimeLine tweets={testTweet} />,
    document.querySelector('#root')
)