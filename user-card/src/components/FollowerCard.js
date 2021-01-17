import React from 'react'

export const FollowerCard = (props) => {
    return (
        <li id={`follower-${props.user.id}`}>
            <img srd={props.user.avatar_url} alt={props.user.name} />
            <div>
                <div>
                    <p>{props.user.login}</p>
                </div>
                <hr/>
                <a href={props.user.html_url} target='blank' rel='noreferrer'>Visit Profile</a>
            </div>
        </li>
    )
}
