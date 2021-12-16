import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Description/Header";
import Info from "../components/Description/Info";
const axios = require('axios').default;
const Description = () => {

    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {

        async function getAllBlogs() {

            axios.get(`http://localhost:8000/blog/${blogId}`).then((res) => {
                if (res.status === 200) {
                    setBlog(res.data);
                }
                else if (res.status === 400) {
                    console.log("Not found");
                }
            }).catch((e) => {
                console.log("ID is badlly formated")
            })
        }
        getAllBlogs();

    }, [blogId])
    document.title = blog.title;
    return (

        <div>
            <Header title={blog && blog.title} />
            <Info description={blog && blog.Description} />
        </div>
    )
}

export default Description
