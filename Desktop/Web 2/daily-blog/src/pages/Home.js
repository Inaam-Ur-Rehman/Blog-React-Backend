import Popular from '../components/Popular/Popular';
import BlogCard from '../components/Blog/BlogCard';
import Hero from '../components/HeroSection/Hero';
import { useEffect, useState } from "react";
const axios = require('axios').default;

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        document.title = "The Daily Blog";
        async function getAllBlogs() {
            const { data } = await axios.get("http://localhost:8000/blogs");
            setBlogs(data);
            setBlog(data[data.length - 1]);
        }
        getAllBlogs();

    }, [])
    return (
        <div className="app">
            <Hero blog={blog} />
            <Popular blogs={blogs} />
            <BlogCard blogs={blogs} />
            <Popular blogs={blogs} />
        </div>
    )
}

export default Home
