import React, { useEffect } from 'react';
import { Row, Col, Dropdown, Button } from 'react-bootstrap';
import Circularprogressbar from '../../Components/Circularprogressbar';

//apexcharts
import Chart from "react-apexcharts";

// AOS
import AOS from 'aos';
import 'aos';
import '../../../node_modules/aos/dist/aos.css';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// install swiper
SwiperCore.use([Navigation]);

const Dashboard = (props) => {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      disable: function () {
        var maxWidth = 996;
        return window.innerWidth < maxWidth;
      },
      throttleDelay: 10,
      once: true,
      duration: 700,
      offset: 10
    })
  }, []);


  const chart1 = {
    options: {
      chart: {
        fontFamily: '"Poppins", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: false,
        }
      },
      colors: ['#ffac00', '#515252', '#3E98C7'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false  //or just here to disable only x axis grids
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"]
      },
      grid: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: .4,
          opacityTo: .1,
          stops: [0, 50, 80],
          colors: ['#ffac00', '#515252', '#3E98C7']
        }
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [{
      name: 'Anime',
      data: [94, 80, 94, 80, 94, 80, 94]
    }, {
      name: 'Cartoons',
      data: [72, 60, 84, 60, 74, 60, 78]
    }, {
      name: 'Kids',
      data: [82, 70, 64, 80, 44, 50, 88]
    }]
  }
  return (
    <>
      <Row>
        <Col md="12" xl="12">
          <Row className="row-cols-1">
            <div className="overflow-hidden d-slider1 ">
              <Swiper className="p-0 m-0 mb-2 list-inline "
                slidesPerView={5}
                spaceBetween={32}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },
                  1500: { slidesPerView: 5 },
                  1920: { slidesPerView: 6 },
                  2040: { slidesPerView: 7 },
                  2440: { slidesPerView: 8 }
                }} data-aos="fade-up" data-aos-delay="700"
              >
                <SwiperSlide className="card card-slide" >
                  <div className="card-body">
                    <div className="progress-widget" >
                      <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" Linecap='rounded' trailstroke='#ddd' strokewidth="4px" style={{ width: 60, height: 60, }} value={90} id="circle-progress-01" >
                        <svg className="" width="24" height="24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">Views</p>
                        <h4 className="counter">158K</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide" >
                  <div className="card-body">
                    <div className="progress-widget">
                      <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{ width: 60, height: 60, }} value={60} id="circle-progress-02" >
                        <svg className="" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">App Rating</p>
                        <h4 className="counter">275K</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide" >
                  <div className="card-body">
                    <div className="progress-widget">
                      <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{ width: 60, height: 60, }} value={70} id="circle-progress-03" >
                        <svg className="" width="24" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">Downloaded</p>
                        <h4 className="counter">1M+</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide" >
                  <div className="card-body">
                    <div className="progress-widget">
                      <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{ width: 60, height: 60, }} value={60} id="circle-progress-04" >
                        <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">Visitors</p>
                        <h4 className="counter">742K</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide" >
                  <div className="card-body">
                    <div className="progress-widget">
                      <Circularprogressbar stroke={props.colorprimarymode} width="60px" height="60px" trailstroke='#ddd' strokewidth="4px" Linecap='rounded' style={{ width: 60, height: 60, }} value={50} id="circle-progress-05" >
                        <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">Total Earning</p>
                        <h4 className="counter">$150</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide" >
                  <div className="card-body">
                    <div className="progress-widget">
                      <Circularprogressbar stroke={props.cololrinfomode} width="60px" height="60px" trailstroke='#ddd' Linecap='rounded' strokewidth="4px" value={40} style={{ width: 60, height: 60, }} id="circle-progress-06">
                        <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">Active Users</p>
                        <h4 className="counter">4600</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide">
                  <div className="card-body">
                    <div className="progress-widget">
                      <Circularprogressbar stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="60px" height="60px" value={30} style={{ width: 60, height: 60, }} id="circle-progress-07" >
                        <svg className="" width="24px" height="24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                        </svg>
                      </Circularprogressbar>
                      <div className="progress-detail">
                        <p className="mb-2">Subscribers</p>
                        <h4 className="counter">11.2M</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
              </Swiper>
            </div>
          </Row>
        </Col>
        <Col md="12" lg="8">
          <Row>
            <Col md="12">
              <div className="card" data-aos="fade-up" data-aos-delay="800">
                <div className="flex-wrap card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Top Categories</h4>
                  </div>
                </div>
                <div className="card-body">
                  <Chart series={chart1.series}
                    options={chart1.options}
                    type={'area'}
                    height={350}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md="12" lg="4">
          <div className="card" data-aos="fade-up" data-aos-delay="600">
            <div className="flex-wrap card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="mb-2 card-title">Activity overview</h4>
                <p className="mb-0">
                  <svg className="me-2" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                  </svg>
                  16% this month
                </p>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-2 d-flex profile-media align-items-top">
                <div className="mt-1 profile-dots-pills border-primary"></div>
                <div className="ms-4">
                  <h6 className="mb-1 ">$2400, Purchase</h6>
                  <span className="mb-0">11 JUL 8:10 PM</span>
                </div>
              </div>
              <div className="mb-2 d-flex profile-media align-items-top">
                <div className="mt-1 profile-dots-pills border-primary"></div>
                <div className="ms-4">
                  <h6 className="mb-1 ">New order #8744152</h6>
                  <span className="mb-0">11 JUL 11 PM</span>
                </div>
              </div>
              <div className="mb-2 d-flex profile-media align-items-top">
                <div className="mt-1 profile-dots-pills border-primary"></div>
                <div className="ms-4">
                  <h6 className="mb-1 ">Affiliate Payout</h6>
                  <span className="mb-0">11 JUL 7:64 PM</span>
                </div>
              </div>
              <div className="mb-2 d-flex profile-media align-items-top">
                <div className="mt-1 profile-dots-pills border-primary"></div>
                <div className="ms-4">
                  <h6 className="mb-1 ">New user added</h6>
                  <span className="mb-0">11 JUL 1:21 AM</span>
                </div>
              </div>
              <div className="mb-1 d-flex profile-media align-items-top">
                <div className="mt-1 profile-dots-pills border-primary"></div>
                <div className="ms-4">
                  <h6 className="mb-1 ">Product added</h6>
                  <span className="mb-0">11 JUL 4:50 AM</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;