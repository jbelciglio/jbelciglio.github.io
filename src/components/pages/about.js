import React from "react";
import "./about.css"

class About extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
            <div className="col-md-6">
                <div class="card shadow-lg rounded" id="years">
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
                <div className="col-md-6">
                <div class="card shadow-lg rounded" id="dreams">
                    <div class="card-header">
                        Eyes on the Horizon
      </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p id="list">* Building new sites</p>
                            <p id="list">* Brainstorming new ideas</p>
                            <p id="list">* Breaking from the norms</p>

                        </blockquote>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;