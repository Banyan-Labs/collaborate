import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';
import './PostPreview.css'

function PostPreview({ dataSet }) {
    const { title, author, date } = dataSet

    return (
        <CardGroup className='container'>
            <Card.Body className=" border border-info border-4">

                <Card.Title className="border-primary border-bottom-4" style={{ textAlign: 'left', color: 'navy', width: '400px' }}>
                {title}
                </Card.Title>

                <div className='author-date-row'>
                <div>
                <h5>Author</h5>
                <Card.Text>
                    {author}
                </Card.Text>
                </div>

                <div>
                <h5>Date</h5>
                <Card.Text>
                    {date}
                </Card.Text>
                </div>
                </div>
                

            </Card.Body>
        </CardGroup>
    )
}

export default PostPreview;
