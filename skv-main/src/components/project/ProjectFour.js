import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            activeMedia: null
        };
    }

    // Handlers for opening and closing the modal
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

        // Updated Data: Added 'type' (image/video) and 'mediaUrl' (the actual file to open in the popup)
        // If mediaUrl is not provided, it falls back to using the 'img' thumbnail.
        const projectData = [
            {
                img: "assets/images/project/project-v1-img1.jpg",
                mediaUrl: "assets/images/project/project-v1-img1.jpg",
                type: "image",
                title: "Bowstring Girder — Patchur",
                content: "Bowstring Girder"
            },
            {
                img: "assets/images/project/project-v1-img2.jpg",
                mediaUrl: "assets/videos/sample-video.mp4", // Replace with your actual video path
                type: "video",
                title: "ROB — Perungalathur",
                content: "Road Over Bridge"
            },
            {
                img: "assets/images/project/project-v1-img3.jpg",
                type: "image",
                title: "ROB — Paranur",
                content: "Road Over Bridge"
            },
            {
                img: "assets/images/project/project-v1-img4.jpg",
                mediaUrl: "assets/videos/hal-plant.mp4", // Replace with your actual video path
                type: "video",
                title: "HAL Helicopter Plant",
                content: "PEB Structure"
            },
            {
                img: "assets/images/project/project-v1-img5.jpg",
                type: "image",
                title: "ISRO Crane Girder — Kerala",
                content: "Special Structure"
            },
            {
                img: "assets/images/project/project-v1-img6.jpg",
                type: "image",
                title: "Loco Paint Shop — Chennai",
                content: "PEB Structure"
            }
        ];

        return (
            <>
                {/* CSS for the Custom React Modal */}
                <style>{`
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
                        color: #ff5722; /* Change to your brand color */
                    }
                    .media-icon {
                        width: 24px;
                        height: 24px;
                        fill: #ff5722 !important;;
                    }
                         .media-icon:hover{
                         color :  #ff5722 !important;
                         }
                    /* Wrapper for the close button to ensure it sits above the media frame */
                    .modal-wrapper {
                        position: relative;
                        width: 100%;
                        max-width: 900px;
                    }
                `}</style>

                <section className="project-one-sec project-one-sec--three">
                    <div className="container">
                        <div className="row">
                            {projectData.map((item, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                    <div className="project-one__single wow fadeInUp" data-wow-delay={`${index * 100}ms`} data-wow-duration="1500ms">
                                        <div className="project-one__single-img">
                                            <div className="inner">
                                                {/* Thumbnail Image */}
                                                <img src={publicUrl + item.img} alt={item.title} />
                                                
                                                <div className="project-one__link">
                                                    <a 
                                                        href="#!" 
                                                        onClick={(e) => this.openModal(e, item)}
                                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                                    >
                                                        {/* Conditional Rendering: Play Icon for Video, Eye Icon for Image */}
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
                                                <h2>
                                                    <Link to={process.env.PUBLIC_URL + `/portfolio-details`}>
                                                        {item.title}
                                                    </Link>
                                                </h2>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* React Modal Portal */}
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