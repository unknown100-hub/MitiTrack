import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landingpage.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="logo-box">
                    <div className="logo-text">
                        <span>MITI</span>
                        <span>TRACK</span>
                    </div>
                </Link>
                <div className="nav-links">
                    <Link to="/map">MAP</Link>
                    <a href="#dashboard">DASHBOARD</a>
                    <a href="#about">ABOUT</a>
                    <a href="#blog">BLOG</a>
                </div>
            </div>
            <div className="nav-right">
                <span className="lang-select">ENGLISH ▾</span>
                <div className="nav-icons">
                    <div className="icon-circle"></div>
                    <div className="icon-circle"></div>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Forest Monitoring Designed for Action</h1>
                <p>
                    MitiTrack leverages AI and satellite imagery to identify
                    degraded land and verify tree survival for global carbon markets.
                </p>
                <button className="btn-action">
                    SUBSCRIBE TO THE MITITRACK NEWSLETTER
                </button>
            </div>
        </section>
    );
};

const Features = () => {
    return (
        <section className="features-section">
            <div className="feature-grid">
                <div className="feature-card">
                    <h2>Discover the world’s forests through data</h2>
                    <p>Explore multispectral datasets to learn about conservation, land use, and plantable zones.</p>
                    <button className="btn-outline">EXPLORE OUR DATA</button>
                </div>
                <div className="feature-card">
                    <h2>Be the first to see survival analytics</h2>
                    <p>View, analyze, and subscribe to weekly AI alerts showing where tree cover is successfully growing.</p>
                    <button className="btn-outline">VIEW SURVIVAL ALERTS</button>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-nav">
                <div className="footer-links">
                    <Link to="/map">MAP</Link>
                    <a href="#dashboards">DASHBOARDS</a>
                    <a href="#topics">TOPICS</a>
                    <a href="#about">ABOUT</a>
                    <a href="#help">HELP</a>
                </div>
                <button className="btn-action">SUBSCRIBE TO THE NEWSLETTER</button>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <span>MITI</span>
                    <span>TRACK</span>
                </div>
                <div className="footer-info">
                    <p>© 2026 MitiTrack System Status</p>
                </div>
            </div>
        </footer>
    );
};

const LandingPage = () => {
    return (
        <div className="landing-container">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default LandingPage;