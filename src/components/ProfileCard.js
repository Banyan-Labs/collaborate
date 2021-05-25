import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup, Image } from 'react-bootstrap';


class ProfileCard extends React.Component {
    state = {
        userName: 'Jane Doe ',
        aboutUser: " This is a user profile card about section. Which tells about the user.",
        userPic: " ",
    }

    render() {
        return (
            <div>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Profile Page</h1>
                </div>
                {/* // <Button type='submit' onClick={() => this.AddCard()}>Add Profile</Button> */}
                <CardGroup>
                    <Card>
                        <Image src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" responsive />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.state.userName}</Card.Title>
                            <Card.Text>
                                {this.state.aboutUser}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Edit Profile</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Image src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" responsive />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.state.userName}</Card.Title>
                            <Card.Text>
                                {this.state.aboutUser}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Edit Profile</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Image src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" responsive />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{this.state.userName}</Card.Title>
                            <Card.Text>
                                {this.state.aboutUser}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Edit Profile</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                {/* <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup> */}
            </div>

        )
    }
}

export default ProfileCard;