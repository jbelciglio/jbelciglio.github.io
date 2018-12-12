import React from "react";
import "./home.css"

class Home extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-wrap="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block shadow-lg p-1 mb-5 bg-white rounded" src="data:image/jpeg;base64,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" alt="filmmaking"></img>
                        <div class="carousel-caption rounded d-none d-md-block">
                            <h5>Filmmaking</h5>
                            <p>Films were my first love, and they will always be a big part of my life and career!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block shadow-lg p-1 mb-5 bg-white rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLU6uMcYAy8aRiY16CIn8GLCcnl9R6c8yJ--D5zMyZGFBBO4k" alt="Game Development"></img>
                        <div class="carousel-caption rounded d-none d-md-block">
                            <h5>Video Games</h5>
                            <p>Taking my love for storytelling to the next level, I spent years studying video games and working in the game industry</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block shadow-lg p-1 mb-5 bg-white rounded" src="https://www.nearshoreamericas.com/wp-content/uploads/2018/08/1024px-Coding_Shots_Annual_Plan_high_res-5-480x300.jpg" alt="Web Development"></img>
                        <div class="carousel-caption rounded d-none d-md-block">
                            <h5>Web Development</h5>
                            <p>I am now taking my experience as a creative into the world of full stack web development</p>
                        </div>
                    </div>

                </div>
            </div>

        )

    }
}

export default Home;