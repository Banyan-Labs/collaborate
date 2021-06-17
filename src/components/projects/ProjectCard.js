import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SITE_DATA } from '../../site-data';
import { Card } from 'react-bootstrap';
import '../card.css';

function ProjectCard(props) {
  return (
    <div>
      <div className='card-group'>
        {SITE_DATA.projects.map((item) => {
          return (
            <Card text='white' className=' mr-3 mb-5 ml-5 mt-5 cards'>
              <div style={{ backgroundColor: ' rgb(155, 148, 148)' }}>
                <Card.Img
                  style={{
                    width: '95%',
                    height: '250px',
                    borderRadius: '10%',
                    marginLeft: '12px',
                  }}
                  className='.img-thumbnail cardImg'
                  variant='top'
                  src={item.thumbnailImage}
                  alt='...'
                  responsive
                />
              </div>
              <Card.Body className='cardB'>
                <Card.Title as='h2' style={{ color: 'white' }}>
                  <h2>{item.projectName}</h2>
                </Card.Title>
                <Card.Text>
                  <p style={{ color: 'white' }}>{item.projectDescription}</p>
                </Card.Text>
              </Card.Body>
              <Card.Body
                style={{
                  color: 'white',
                  backgroundColor: ' rgb(155, 148, 148) ',
                }}
                className='linkHolder'
              >
                <a
                  style={{ color: 'white', backgroundColor: 'lime' }}
                  className='btn btn-secondary mr-5 ml-1'
                  href={item.githubUrl}
                >
                  View Code
                </a>

                <a
                  style={{
                    color: 'white',
                    backgroundColor: 'navy',
                    marginLeft: '150px',
                    float: 'right',
                  }}
                  className='btn btn-secondary ml-5'
                  href={item.liveSiteUrl}
                >
                  View Live
                </a>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
