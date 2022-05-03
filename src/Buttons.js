import React from "react"
import PropTypes from "prop-types"

export const ReplyButton = ({ count }) => (
    <span>
        <i className="fa fa-reply reply-button" />
    </span>
)

export const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />
        {getRetweetCount(count)}
    </span>
)

RetweetButton.propTypes = {
    count: PropTypes.number
}

export const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
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

function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        )
    } else {
        return null
    }
}

export const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
)