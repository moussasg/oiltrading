import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

const Testimonial_slider_1 = () => {
    return (
        <>
           <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base"> The Opinions of Our Customers </span>
                <h2 className="mt-5 mb-5"> Don’t take our word for it. See what our clients say </h2>
                <p className="mx-auto t-short-para"> What follows are some of the comments made by our clients. Don't take it on faith that we said it. Check out what some of our previous customers had to say. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-md-0">
        <div className="row g-md-0">
          <div className="col-12">
            <Swiper
            dir='ltr'
            slidesPerView="auto"
            autoplay={true}
            centeredSlides={true}
            spaceBetween={32}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev', 
            }}
            centeredSlidesBounds={true}
            breakpoints={{
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                  },
                  1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 32,
                  },
                  1920: {
                    slidesPerView: 3.5
                  }
            }}
            modules={[Navigation,Autoplay]}
            className='testimonial-slider-1'
            >             
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-8.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> Tony Stark </h5>
                        <p className="sm-text"> Biffco Ltd. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-7.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> Karen Aabye </h5>
                        <p className="sm-text"> Nv. & travel </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-1.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> Bertus Aafjes </h5>
                        <p className="sm-text"> YA Ltd. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-6.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> Patricia Aakhus </h5>
                        <p className="sm-text"> Biffco Ltd. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-5.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> Jane Aaron </h5>
                        <p className="sm-text"> Biffco Ltd. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-4.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> Hans Aanrud </h5>
                        <p className="sm-text"> Biffco Ltd. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning size-32"> star </span>
                      </li>
                    </ul>
                    <p> Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team! </p>
                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img src="/images/team-3.png" alt="image" className="user__img-is" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> David Aaron </h5>
                        <p className="sm-text"> Biffco Ltd. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>             
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>    
        </>
    );
};

export default Testimonial_slider_1;