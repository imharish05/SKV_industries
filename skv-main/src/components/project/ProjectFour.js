import React from 'react';
export default class ProjectFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            activeMedia: null
        };
    }

    openModal = (e, item) => {
        e.preventDefault();
        this.setState({
            isModalOpen: true,
            activeMedia: item
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
            activeMedia: null
        });
    };

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

const projectData = [
    {
        img: "assets/images/project/project12.png",
        mediaUrl: "assets/images/project/project_12.mp4",
        type: "video",
        title: "FOB — Hassan"
    },
    {
        img: "assets/images/project/Composite-grider.jpeg",
        type: "image",
        title: "Composite Girder — Patchur",
        content: "Bowstring Girder"
    },
    {
        img: "assets/images/project/project11.png",
        mediaUrl: "assets/images/project/project_11.mp4",
        type: "video",
        title: "FOB — Mangalore"
    },
    {
        img: "assets/images/project/project13.jpeg",
        type: "image",
        title: "Vennandur",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project10.png",
        mediaUrl: "assets/images/project/project_10.mp4",
        type: "video",
        title: "FOB"
    },
    {
        img: "assets/images/project/project14.jpeg",
        type: "image",
        title: "Chennagiri",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project9.png",
        mediaUrl: "assets/images/project/project_9.mp4",
        type: "video",
        title: "Arch Erction"
    },
    {
        img: "assets/images/project/project15.jpeg",
        type: "image",
        title: "Chennagiri",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project8.png",
        mediaUrl: "assets/images/project/project_8.mp4",
        type: "video",
        title: "Bow String"
    },
    {
        img: "assets/images/project/project16.jpeg",
        type: "image",
        title: "Chennagiri",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project7.png",
        mediaUrl: "assets/images/project/project_7.mp4",
        type: "video",
        title: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project17.jpeg",
        type: "image",
        title: "Chennagiri",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project6.png",
        mediaUrl: "assets/images/project/project_6.mp4",
        type: "video",
        title: "Gas Metal Arc Welding"
    },
    {
        img: "assets/images/project/project18.jpeg",
        type: "image",
        title: "Vennandur",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project5.png",
        mediaUrl: "assets/images/project/project_5.mp4",
        type: "video",
        title: "Launcher"
    },
    {
        img: "assets/images/project/project19.jpeg",
        type: "image",
        title: "Vennandur",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project4.png",
        mediaUrl: "assets/images/project/project_4.mp4",
        type: "video",
        title: "Launching"
    },
    {
        img: "assets/images/project/project3.png",
        mediaUrl: "assets/images/project/project_3.mp4",
        type: "video",
        title: "Bow String Arc"
    },
    {
        img: "assets/images/project/project2.png",
        mediaUrl: "assets/images/project/project_2.mp4",
        type: "video",
        title: "Shot Blasting"
    },
    {
        img: "assets/images/project/project1.png",
        mediaUrl: "assets/images/project/project_1.mp4",
        type: "video",
        title: "Metalizing"
    }
];

        return (
            <>
                <style>{`
                    /* ── Grid uniform-height fix ── */
                    .project-one__single {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }

                    .project-one__single-img {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }

                    /*
                     * KEY FIX: fixed height container + object-fit: cover
                     * Every card thumbnail is exactly 280px tall regardless of
                     * the source image's aspect ratio.
                     * Adjust the height value to suit your design.
                     */
                    .project-one__single-img .inner {
                        position: relative;
                        width: 100%;
                        height: 280px;          /* ← uniform height */
                        overflow: hidden;
                        flex-shrink: 0;
                    }

                    .project-one__single-img .inner img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;      /* ← fills the box, crops edges */
                        object-position: center;
                        display: block;
                        transition: transform 0.4s ease;
                    }

                    /* Subtle zoom on hover keeps the interaction alive */
                    .project-one__single:hover .inner img {
                        transform: scale(1.05);
                    }

                    /* ── Modal styles (unchanged) ── */
                    .custom-media-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0, 0, 0, 0.85);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 99999;
                        padding: 20px;
                        backdrop-filter: blur(5px);
                    }
                    .custom-media-content {
                        position: relative;
                        max-width: 900px;
                        width: 100%;
                        max-height: 85vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #000;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    }
                    .custom-media-content img,
                    .custom-media-content video {
                        max-width: 100%;
                        max-height: 85vh;
                        object-fit: contain;
                        outline: none;
                    }
                    .custom-modal-close {
                        position: absolute;
                        top: -40px;
                        right: 0;
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 35px;
                        cursor: pointer;
                        line-height: 1;
                        transition: 0.3s;
                    }
                    .custom-modal-close:hover {
                        color: #ff5722;
                    }
                    .media-icon {
                        width: 24px;
                        height: 24px;
                        fill: #ff5722 !important;
                    }
                    .media-icon:hover {
                        color: #ff5722 !important;
                    }
                    .modal-wrapper {
                        position: relative;
                        width: 100%;
                        max-width: 900px;
                    }
                `}</style>

                <section className="project-one-sec project-one-sec--three">
                    <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>OUR PROJECTS</h6> <span className="right"></span>
                            </div>
                      <h2 className="sec-title__title" style={{color : "black"}}>Our Overall Projects </h2>
                        </div>
                    <div className="container">
                        <div className="row">
                            {projectData.map((item, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 p-2" key={index}>
                                    <div
                                        className="project-one__single wow fadeInUp"
                                        data-wow-delay={`${index * 100}ms`}
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="project-one__single-img">
                                            <div className="inner">
                                                <img src={publicUrl + item.img} alt={item.title} />

                                                <div className="project-one__link">
                                                    <a
                                                        href="#!"
                                                        onClick={(e) => this.openModal(e, item)}
                                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >
                                                        {item.type === 'video' ? (
                                                            <svg className="media-icon" viewBox="0 0 384 512">
                                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                            </svg>
                                                        ) : (
                                                            <svg className="media-icon" viewBox="0 0 576 512">
                                                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 92.9-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.8-35.7-46.1-87.7-92.9-131.1C433.5 68.8 368.8 32 288 32zM128 256a160 160 0 1 1 320 0 160 160 0 1 1 -320 0zm160-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z"/>
                                                            </svg>
                                                        )}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="content-box">
                                                <h2 style={{ color: "white" }}>
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {this.state.isModalOpen && this.state.activeMedia && (
                    <div className="custom-media-modal" onClick={this.closeModal}>
                        <div className="modal-wrapper">
                            <button className="custom-modal-close" onClick={this.closeModal}>&times;</button>
                            <div className="custom-media-content" onClick={(e) => e.stopPropagation()}>
                                {this.state.activeMedia.type === 'video' ? (
                                    <video
                                        src={publicUrl + (this.state.activeMedia.mediaUrl || this.state.activeMedia.img)}
                                        controls
                                        autoPlay
                                        style={{ width: '100%' }}
                                    />
                                ) : (
                                    <img
                                        src={publicUrl + (this.state.activeMedia.mediaUrl || this.state.activeMedia.img)}
                                        alt={this.state.activeMedia.title}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}