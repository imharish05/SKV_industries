import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    name: "Steel Bridge Fabrication",
    slug: "steel-bridge-fabrication",
    image: "assets/images/services/steel-bridge-fabrication.jpg",
    description:
      "Fabrication of Road Over Bridges using composite and plate girders, compliant with RDSO standards. We deliver precision-engineered girders across spans ranging from 14 to 53 meters, trusted by Southern Railway and NHAI.",
  },
  {
    id: 2,
    name: "Bowstring Arch Girder",
    slug: "bowstring-arch-girder",
    image: "assets/images/services/bowstring-arch-girder.jpg",
    description:
      "Design and fabrication of bowstring arch girders for railway bridges. We have delivered 42-meter RDSO-approved spans for South Western Railway with in-house trial assembly and CNC precision cutting.",
  },
  {
    id: 3,
    name: "Foot Over Bridge (FOB)",
    slug: "foot-over-bridge",
    image: "assets/images/services/foot-over-bridge.jpg",
    description:
      "Fabrication and erection of Foot Over Bridges for Southern Railway across Trichy, Madurai, and Villupuram divisions. We cover single and multi-span configurations up to 102 meters, built to RDSO specifications.",
  },
  {
    id: 4,
    name: "Pre-Engineered Buildings (PEB)",
    slug: "pre-engineered-buildings",
    image: "assets/images/services/pre-engineered-buildings.jpg",
    description:
      "Turnkey PEB structures from hatchery plants and spinning mills to government warehouses and HAL manufacturing facilities. Completed 25+ projects ranging from 400 sq.m to 11,250 sq.m for private and government clients.",
  },
  {
    id: 5,
    name: "Crane Girder Fabrication",
    slug: "crane-girder-fabrication",
    image: "assets/images/services/crane-girder.jpg",
    description:
      "Precision crane girders for critical applications including ISRO's VSSC facility in Thumba, Kerala, executed through TATA Projects. Fabricated with strict dimensional tolerances for overhead crane systems.",
  },
  {
    id: 6,
    name: "CNC Cutting & Steel Processing",
    slug: "cnc-cutting-steel-processing",
    image: "assets/images/services/cnc-cutting.jpg",
    description:
      "High-precision structural steel cutting using CNC plasma machines capable of handling up to 300mm thickness. In-house CNC drilling, beam welding, and warpage correction ensure consistent quality across all components.",
  },
  {
    id: 7,
    name: "Grit Blasting & Surface Treatment",
    slug: "grit-blasting-surface-treatment",
    image: "assets/images/services/grit-blasting.jpg",
    description:
      "Complete surface protection including grit blasting, zinc metalizing, and zinc chromate painting — all performed in-house. Ensuring long-term corrosion resistance for railway bridges and industrial structures per RDSO standards.",
  },
  {
    id: 8,
    name: "Structural Steel Erection & Launching",
    slug: "structural-steel-erection",
    image: "assets/images/services/steel-erection.jpg",
    description:
      "Full erection and launching of steel bridge girders using mobile cranes up to 25 tonnes. Our experienced site teams have successfully launched girders over live railway tracks across multiple Southern Railway zones.",
  },
  {
    id: 9,
    name: "Warehouse & Storage Structures",
    slug: "warehouse-storage-structures",
    image: "assets/images/services/warehouse.jpg",
    description:
      "Civil supply warehouses built for Tamil Nadu Government at Edappadi, Vazhapadi, and Omallur with storage capacities from 1,500 MT to 5,000 MT. Cost-effective, structurally sound storage solutions for government and private clients.",
  },
];

export default class ServiceFour extends React.Component {
  render() {
    const publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <>
        <section className="services-one-sec services-one-sec--services">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>Our Services</h6>
                <span className="right"></span>
              </div>
              <h2 className="sec-title__title">Our Professional Services</h2>
            </div>

            <div className="row align-items-stretch">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay={`${index * 100}ms`}
                  data-wow-duration="1500ms"
                  style={{ display: 'flex' }}
                >
                  <div className="services-one__single" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <div
                      className="services-one__single-img"
                      style={{ height: '220px', overflow: 'hidden', flexShrink: 0 }}
                    >
                      <img
                        src={publicUrl + service.image}
                        alt={service.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="services-one__single-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div className="services-one__single-content-title">
                        <h2>
                         
                            {service.name}
                      
                        </h2>
                      </div>

                      <div className="services-one__single-content-bottom" style={{ flex: 1 }}>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
      </>
    );
  }
}