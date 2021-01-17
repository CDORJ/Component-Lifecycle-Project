import React from 'react'
import FollowerCard  from './FollowerCard'

export const Followers = (props) => {
    return (
        <div>
            <h2>{props.followers.length > 0 ? `${props.followers.length} Followers` : "No Followers"}</h2>
            <ul>
                {props.followers.length > 0 && props.followers.map((user) => {
                    return <FollowerCard user={user} key={user.id} />
                })}
            </ul>
        </div>
    )
}
