import React, { Component } from 'react'

export class BackInfo extends Component {
    render() {
        return (
            <section className="back-info-section">
                <div className="back-info-data">
                    <div className="back-info">
                        <h3 className="back-main-info">
                            $89,914
                        </h3>
                        <h4 className="back-sub-info">
                            of $100,000 backed
                        </h4>
                    </div>
                    <div className="back-info">
                        <h3 className="back-main-info">
                            5,007
                        </h3>
                        <h4 className="back-sub-info">
                            total backers
                        </h4>
                    </div>
                    <div className="back-info">
                        <h3 className="back-main-info">
                            56
                        </h3>
                        <h4 className="back-sub-info">
                            days left
                        </h4>
                    </div>
                </div>
                <div className="back-objective">
                    <input className="" type="range" value="68" min="1" max="100" disabled />
                </div>
            </section>
        )
    }
}

export default BackInfo
