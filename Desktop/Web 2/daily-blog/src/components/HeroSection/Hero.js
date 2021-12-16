import React from 'react';
import "./Hero.css";
import LinesEllipsis from 'react-lines-ellipsis';
import { Avatar } from '@mui/material';

const Hero = ({ blog }) => {
    return (
        <div className="hero">
            <div className="hero__info">
                <h1 className="hero__heading">{blog && blog.title}</h1>
                <LinesEllipsis
                    className="hero__description"
                    text={blog && blog.Description}
                    maxLine={4}
                />
                <div className="hero__author">
                    <Avatar className="hero__author__img" src={blog.author && blog.author.profileImgUrl} />
                    <p className="hero__author__name">{blog.author && blog.author.fullName}</p>
                    <p>{blog && new Date(blog.publishDate).toDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
