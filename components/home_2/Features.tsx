import Link from 'next/link';
import React from 'react';

const Features = () => {
    return (
        <section className="section features-section-1">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-xxl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Exciting New Phase In The Development Of IT Solutions{" "}
                </span>
                <h2 className="mt-5 mb-5">
                  {" "}
                  Let's work together to turn your ideal business into a
                  profitable reality.{" "}
                </h2>
                <p className="max-text-60">
                  {" "}
                  We see our ideas through from the very beginning to the very
                  end.We provide solutions with the aim of establishing
                  trustworthy connections.Making Arrangements in Anticipation of
                  Your Achievements Provide Best IT Solutions{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-secondary circle">
                  <img src="/images/icon-28.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Top Flexibility</h5>
                <p className="mb-5">
                  {" "}
                  We provide the most responsive and functional IT solution to
                  enterprises and businesses all around the globe.{" "}
                </p>
                <Link href="service-1" className="t-link t-link--base fw-md">
                  {" "}
                  Read More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-danger circle">
                  <img src="/images/icon-29.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Time Saving</h5>
                <p className="mb-5">
                  {" "}
                  We provide the most responsive and functional IT solution to
                  enterprises and businesses all around the globe.{" "}
                </p>
                <Link href="service-1" className="t-link t-link--base fw-md">
                  {" "}
                  Read More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-success circle">
                  <img src="/images/icon-30.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Management</h5>
                <p className="mb-5">
                  {" "}
                  We provide the most responsive and functional IT solution to
                  enterprises and businesses all around the globe.{" "}
                </p>
                <Link href="service-1" className="t-link t-link--base fw-md">
                  {" "}
                  Read More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-warning circle">
                  <img src="/images/icon-31.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">Collaborative</h5>
                <p className="mb-5">
                  {" "}
                  We provide the most responsive and functional IT solution to
                  enterprises and businesses all around the globe.{" "}
                </p>
                <Link href="service-1" className="t-link t-link--base fw-md">
                  {" "}
                  Read More{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Features;