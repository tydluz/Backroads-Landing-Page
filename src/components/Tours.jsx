import React from "react";
import Title from "./Title";
import { tours } from "../data";

function Tours() {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle=" tours" />
            <div className="section-center featured-center">
                {tours.map((tourgrades) => {
                    const {
                        id,
                        image,
                        date,
                        title,
                        info,
                        location,
                        duration,
                        cost,
                    } = tourgrades;
                    return (
                        <article className="tour-card">
                            <div className="tour-img-container" key={id}>
                                <img src={image} className="tour-img" alt="" />
                                <p className="tour-date">{date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{title}</h4>
                                </div>
                                <p>{info}</p>
                                <div className="tour-footer">
                                    <p>
                                        <span>
                                            <i className="fas fa-map"></i>
                                        </span>{" "}
                                        {location}
                                    </p>
                                    <p>{duration}</p>
                                    <p>from ${cost}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Tours;
