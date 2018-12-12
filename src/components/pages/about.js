import React from "react";
import "./about.css"

class About extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                <div class="card shadow-lg rounded" id="about">
                    <div class="card-header">
                        A Life Spent in The Arts/Media
        </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p id="list">* 12 years Film Experience</p>
                            <p id="list">* 4 years Game Experience</p>
                            <p id="list">* 2 years Coding Experience</p>

                        </blockquote>
                    </div>
                </div>
                <div class="card shadow-lg rounded" id="about">
                    <div class="card-header">
                        A Life Spent in The Arts/Media
      </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p id="list">* 12 years Film Experience</p>
                            <p id="list">* 4 years Game Experience</p>
                            <p id="list">* 2 years Coding Experience</p>

                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;