import "./Popular.css";
import PopularBlog from "./PopularBlog";

const Popular = ({ blogs }) => {
    return (
        <div className="popular">
            <div className="popular__card">
                <div className="popular__card__inner">
                    <h1 className="popular__heading">Popular this month</h1>
                </div>
            </div>
            <div className="popular__container">
                {
                    blogs && blogs.map(blog =>
                        <PopularBlog key={blog._id} id={blog._id} title={blog.title} date={blog.publishDate} profileImg={blog.author && blog.author.profileImgUrl} author={blog.author && blog.author.fullName} />
                    )
                }
            </div>
        </div>
    )
}

export default Popular
