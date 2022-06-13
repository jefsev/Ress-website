import React from 'react'

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="container mx-auto flex flex-col justify-center items-center px-3">
                <h1>{props.acf.title_start} <span className="yellow-bg">{props.acf.title_yellow}</span><br />{props.acf.title_end}</h1>
                <p>{props.acf.subtitle}</p>
            </div>
        </div>
    )
}

export default Hero