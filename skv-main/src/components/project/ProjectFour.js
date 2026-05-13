import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
              var id = parseInt($(this).attr("data-group"), 10);
        
              if (!groups[id]) {
                groups[id] = [];
              }
        
              groups[id].push(this);
            });
        
            $.each(groups, function () {
              $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                  enabled: true,
                },
              });
            });
        }
          
    }
    render(){

        const projectData = [
    {
        img: "assets/images/project/project-v1-img1.jpg",
        title: "Bowstring Girder — Patchur",
        content: "Bowstring Girder"
    },
    {
        img: "assets/images/project/project-v1-img2.jpg",
        title: "ROB — Perungalathur",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project-v1-img3.jpg",
        title: "ROB — Paranur",
        content: "Road Over Bridge"
    },
    {
        img: "assets/images/project/project-v1-img4.jpg",
        title: "HAL Helicopter Plant",
        content: "PEB Structure"
    },
    {
        img: "assets/images/project/project-v1-img5.jpg",
        title: "ISRO Crane Girder — Kerala",
        content: "Special Structure"
    },
    {
        img: "assets/images/project/project-v1-img6.jpg",
        title: "Loco Paint Shop — Chennai",
        content: "PEB Structure"
    },
    {
        img: "assets/images/project/project-v1-img7.jpg",
        title: "Loco Paint Shop — Chennai",
        content: "PEB Structure"
    },
    {
        img: "assets/images/project/project-v1-img8.jpg",
        title: "Loco Paint Shop — Chennai",
        content: "PEB Structure"
    },
    {
        img: "assets/images/project/project-v1-img9.jpg",
        title: "Loco Paint Shop — Chennai",
        content: "PEB Structure"
    },
    {
        img: "assets/images/project/project-v1-img10.jpg",
        title: "Loco Paint Shop — Chennai",
        content: "PEB Structure"
    },
    {
        img: "assets/images/project/project-v1-img11.jpg",
        title: "Loco Paint Shop — Chennai",
        content: "PEB Structure"
    },
];

        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="project-one-sec project-one-sec--three">
                    <div className="container">
                        <div className="row">
                           {projectData.map((item, index) => (
    <div className="col-xl-4 col-lg-4" key={index}>
        <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="project-one__single-img">
                <div className="inner">
                    <img src={publicUrl + item.img} alt={item.title} />
                    <div className="project-one__link">
                        <a className="img-popup" href={publicUrl + item.img}>
                            <span className="icon-plus-sign"></span>
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
            </>
        )
    }
}