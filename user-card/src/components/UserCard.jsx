import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "reactstrap";

const UserCard = ({ user, following }) => {
  return (
    <div>
      <Card>
        <CardImg top width="150px" src={user.avatar_url} alt="Chad Diaz" />
        <CardBody>
          <CardTitle>Name: {user.name}</CardTitle>
          <CardSubtitle>User Name: {user.login}</CardSubtitle>
          <CardText>{user.bio}</CardText>
          <CardLink href={user.url}>GitHub User Page</CardLink>
        </CardBody>
      </Card>{" "}
      <br />
      <div>
        {following.map((item, i) => (
          <Card>
            <CardImg
              top
              width="100px"
              src={item.avatar_url}
              alt="follower image"
            />
            <CardTitle>Name: {item.name}</CardTitle>
            <CardSubtitle>User Name: {item.login}</CardSubtitle>
            <CardLink href={item.url}>GitHub User Page</CardLink>
          </Card>
        ))}{" "}
        <br />
      </div>
    </div>
  );
};

export default UserCard;
