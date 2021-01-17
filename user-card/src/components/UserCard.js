import React from "react";

export const UserCard = (props) => {
  return (
    <div>
      <div>
        <img src={props.user.avatar_url} alt={props.user.name} />
        <br />
        <h3>{props.user.name}</h3>
        <p>{props.user.login}</p>
      </div>

      <div>
        {props.user.location !== null && (
          <p>
            <span>Location:</span> {props.user.location}
          </p>
        )}
        <p>
          <span>Followers:</span> {props.user.followers}
        </p>
        <p>
          <span>Following:</span> {props.user.following}
        </p>
        {props.user.bio !== null && (
          <p>
            <span>Bio:</span> {props.user.bio}
          </p>
        )}
      </div>
      <div>
        <h3>Contributions</h3>
        <img
          src={`https://ghchart.rshah.org/eb4d4b/${props.user.login}`}
          alt="cont chart"
        />
      </div>
    </div>
  );
};
