import "./BlogCard.css";
import LinesEllipsis from 'react-lines-ellipsis';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const LongCard = ({ id, headerImage, title, description, author }) => {
    return (
        <div className="longcard">
            <div className="longcard__top" style={{ padding: 0 }}>
                <img
                    src={headerImage}
                    alt="Blog Url"
                />
            </div>
            <div className="longcard__categories">

            </div>
            <div className="longcard__title">
                <Link to={`/blog/${id}`}>{title}</Link>
            </div>
            <div className="longcard__description">
                <LinesEllipsis
                    maxLine={6}
                    text={description}
                />
            </div>
            <div className="longcard__author">
                <Avatar
                    src={author.profileImgUrl}
                />
                <p><b>{author.fullName}</b></p>
            </div>
        </div>
    )
}

export default LongCard
