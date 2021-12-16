
import { Avatar } from "@mui/material";
import "./PopularBlog.css";
import { Link } from "react-router-dom";

const PopularBlog = ({ id, date, title, profileImg, author }) => {

    return (
        <div className="popularBlog__card">
            <p><b>Article</b> on {new Date(date).toDateString()}</p>
            <Link to={`/blog/${id}`} className="popularBlog__card__title">{title}</Link>
            <div className="popularBlog__card__info">
                <Avatar src={profileImg} className="popularBlog__card__author" />
                <p>{author}</p>
            </div>
        </div>
    )
}

export default PopularBlog
