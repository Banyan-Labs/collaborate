import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup, Image } from 'react-bootstrap';
import ProfilePicture from "../images/userProfile.png";

class ProfileCard extends React.Component {
    state = {
        userName: 'Jane Doe ',
        aboutUser: " This is a user profile card about section. Which tells about the user.",
        userPic: " ",
    }

    render() {
        return (
            <div>
                <div className="mb-5">
                    <h1 style={{ textAlign: 'center' }}>Profile Page</h1>
                </div>
                {/* // <Button type='submit' onClick={() => this.AddCard()}>Add Profile</Button> */}
                <CardGroup>
                    <Card className="mr-3 mb-5">
                        <Card.Img variant="top" src={ProfilePicture} responsive />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.state.userName}</Card.Title>
                            <Card.Text>
                                {this.state.aboutUser}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: 'center' }}>
                            <small className="text-muted" >Edit Profile</small>
                        </Card.Footer>
                    </Card>
                    <Card className="mr-3 mb-5">
                        <Card.Img variant="top" src={ProfilePicture} responsive />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.state.userName}</Card.Title>
                            <Card.Text>
                                {this.state.aboutUser}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: 'center' }}>
                            <small className="text-muted" >Edit Profile</small>
                        </Card.Footer>
                    </Card>
                    <Card className="mr-3 mb-5">
                        <Card.Img variant="top" src={ProfilePicture} responsive />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.state.userName}</Card.Title>
                            <Card.Text>
                                {this.state.aboutUser}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: 'center' }}>
                            <small className="text-muted" >Edit Profile</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </div>

        )
    }
}

export default ProfileCard;