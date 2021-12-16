import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__info">
                <h2>The Daily Blog</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, dolorem! Voluptas sunt quasi pariatur nemo vitae, tempore labore ab voluptatum quaerat doloremque quae aliquid exercitationem est alias magnam ut non accusantium, aspernatur amet atque? Impedit fugiat sit tenetur aspernatur porro veritatis molestias totam, quos nemo sequi repellat, ipsum asperiores unde. </p>
            </div>
            <div className="footer__category">
                <h3>Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About Us</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="footer__contact">
                <h2>Contact Us</h2>
                <input type="text" placeholder="Email Address" />
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Footer
