import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                padding: "20px",
                backgroundColor: "rgb(17,24,39)",
                color: "white",
            }}
        >
            <div style={{ marginBottom: "20px" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                    Social Media Links
                </h2>
                <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" , color: "white", textDecoration: "none"}}>
                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com"
                            target="_blank">
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com"
                            target="_blank">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com"
                            target="_blank">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                    User Support
                </h2>
                <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2", color: "white", textDecoration: "none"  }}>
                    <li>
                        <a href="/faq">
                            FAQ Section</a>
                    </li>
                    <li>
                        <a href="/report-issues">
                            Report Issues
                        </a>
                    </li>
                    <li>
                        <a href="/help-center">
                            Help Center
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
