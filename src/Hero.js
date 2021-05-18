import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Button } from '@adobe/react-spectrum'
import Image from 'react-bootstrap/Image'


export default class Hero extends Component {

    render() {
        return (
            <div>
                <Image src="./images/hero1.jpg/100px250" fluid />
            </div>
        )
    }
}

