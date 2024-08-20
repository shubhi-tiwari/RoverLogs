import React from 'react';
import '../styles/home.css';

import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';

import crudbar from './../shared/crudbar';
import SearchBar from './../shared/crudbar';

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <h1>Turn your <span className="highlight"> Moments </span> into <span className="highlight">Memories</span></h1>
                <p>
                At RoverLogs, we believe that every journey is worth sharing. Whether you’re exploring bustling cities or tranquil landscapes, your adventures have the power to inspire others. Our platform is a vibrant community of travelers from all walks of life, coming together to share their experiences, tips, and insights.
                Dive into our collection of travel blogs, each filled with personal stories, stunning photos, and practical advice. From solo backpackers to family vacationers, our contributors offer unique perspectives on destinations around the globe. You too can share your travel tales—upload your own blogs, connect with fellow explorers, and help others plan their next adventure.
                Join us in celebrating the spirit of travel. Let’s explore the world, together!
                </p>
            </div>
          </Col>
          <Col lg = '2'>
            <div className="hero__img-box">
              <img src ={heroImg} alt="" />
            </div>
          </Col>
          <Col lg = '2'>
            <div className="hero__img-box mt-4">
              <video src ={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg = '2'>
            <div className="hero__img-box mt-5">
              <img src ={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar/>  
        </Row>
      </Container>
    </section>
    {/*=====hero section start ======== */}
  </>
}

export default Home
