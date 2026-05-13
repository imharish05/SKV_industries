import React from 'react';

export default class VideoSection extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.sectionRef = React.createRef();
        this.observer = null;
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = this.videoRef.current;
                    if (!video) return;
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.4 }
        );

        if (this.sectionRef.current) {
            this.observer.observe(this.sectionRef.current);
        }
    }

    componentWillUnmount() {
        if (this.observer && this.sectionRef.current) {
            this.observer.unobserve(this.sectionRef.current);
        }
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const videoPath = ''; // Add your path here

        return (
            <>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

                    .skv-container {
                        max-width: 1200px;
                        margin: 60px auto;
                        font-family: 'Inter', sans-serif;
                        padding: 0 20px;
                    }

                    .skv-card {
                        display: grid;
                        grid-template-columns: 1.1fr 0.9fr;
                        background: #fff;
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                        border: 1px solid #f0f0f0;
                    }

                    /* Video Side */
                    .skv-video-wrap {
                        position: relative;
                        background: #1a1a1a;
                        min-height: 500px;
                    }

                    .skv-video-wrap video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .skv-overlay-tag {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        background: rgba(6, 5, 253,0.9);
                        color: white;
                        padding: 6px 12px;
                        font-size: 10px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        border-radius: 4px;
                        z-index: 2;
                    }

                    /* Content Side */
                    .skv-content {
                        padding: 60px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .skv-label {
                        color: #0605fd;
                        font-weight: 600;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        margin-bottom: 12px;
                        display: block;
                    }

                    .skv-title {
                        font-size: 36px;
                        color: #1a1a1a;
                        font-weight: 700;
                        line-height: 1.2;
                        margin-bottom: 24px;
                    }

                    .skv-title span {
                        color: #0605fd;
                    }

                    .skv-description {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #555;
                        margin-bottom: 30px;
                    }

                    /* Stats Grid */
                    .skv-stats-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 30px;
                        border-top: 1px solid #eee;
                        padding-top: 30px;
                    }

                    .skv-stat-item h4 {
                        font-size: 24px;
                        color: #1a1a1a;
                        margin: 0;
                        font-weight: 700;
                    }

                    .skv-stat-item p {
                        font-size: 12px;
                        color: #888;
                        text-transform: uppercase;
                        margin: 4px 0 0;
                        letter-spacing: 1px;
                    }

                    /* Responsive */
                    @media (max-width: 992px) {
                        .skv-card { grid-template-columns: 1fr; }
                        .skv-content { padding: 40px; }
                        .skv-video-wrap { min-height: 350px; }
                    }
                `}</style>

                <div className="skv-container" ref={this.sectionRef}>
                    <div className="skv-card">
                        
                        {/* Video Pane */}
                        <div className="skv-video-wrap">
                            <div className="skv-overlay-tag">Industrial Excellence</div>
                            <video
                                ref={this.videoRef}
                                src={videoPath ? publicUrl + videoPath : undefined}
                                muted loop playsInline
                                poster="https://via.placeholder.com/800x600/1a1a1a/FFFFFF?text=SKV+Engineering+In+Motion"
                            />
                        </div>

                        {/* Content Pane */}
                        <div className="skv-content">
                            <span className="skv-label">RDSO Approved</span>
                            <h2 className="skv-title">
                                Engineering The <br/>
                                <span>Infrastructure</span> Of Tomorrow
                            </h2>
                            
                            <p className="skv-description">
                                Based in Namakkal, SKV Industriees specializes in high-precision heavy steel 
                                fabrication. From Bowstring Girders to complex Bridge Launching, we deliver 
                                structural integrity trusted by India's leading organizations.
                            </p>

                            <div className="skv-stats-grid">
                                <div className="skv-stat-item">
                                    <h4>15,000+</h4>
                                    <p>Tons Fabricated</p>
                                </div>
                                <div className="skv-stat-item">
                                    <h4>20+ Years</h4>
                                    <p>Industry Presence</p>
                                </div>
                                <div className="skv-stat-item">
                                    <h4>50+</h4>
                                    <p>Global Projects</p>
                                </div>
                                <div className="skv-stat-item">
                                    <h4>ISO Cert</h4>
                                    <p>9001:2015 Quality</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}