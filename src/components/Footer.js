import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return (
        <div className="main-footer" id="footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Tamara's Great Footer - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;