import { Grid, Tooltip, Typography } from '@material-ui/core';
import React from 'react'
import Navbar from '../common/Navbar';
import VerticalTabs from '../common/VerticalTabs';
import '../styles/Home.css'
import intellimedmedia from '../assets/images/intellimedmedia-logo.png'
import qucoon from '../assets/images/Qucoon-Logo.jpeg'
import Stickies from '../common/Stickies';
import ProjectCard from '../common/ProjectCard';
const Home = () => {
  return (
    <>
        <Navbar />
        <div className='homepage'>
        <Stickies />
        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} style={{height: '100vh'}}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <div className='intro'>
                <h6 className='intro-text'>Hi 👋 my name is</h6>
                <h1 className='big-heading white'>
                Oghenekaro Brume Israel.
                </h1>
                <h1 className='big-heading grey'>I build things for the Web, Desktop and Mobile.</h1>
                <p className='intro-p'>
                I’m a fullstack developer skillful in implementing the design, architectural and algorithmic aspects of a system.
                Currently focused on building and launching new projects that solve problems.
            </p>
            </div>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
        </Grid>

        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={5}>
            <div className='section-headings'><h3>About Me</h3></div>
            <div className='about'>
                <p className='about-p'>
                Hello 😃 My name is Brume Israel and I enjoy creating things on the web, mobile devices and computers. My interest in fullstack development originally didn't start of till i was grounded but my love for frontend started back in 2014. I guess you could say i have always wanted to build systems capable of solving problems.

                <br /><br />
                Fast-forward to today, and I’ve had the privilege of working with <a href='http://intellimedmedia.com'>An IT Firm</a>, a <a href='http://qucoon.com'>Fintech</a>, a <a href='http://google.com'> and a small community of developers</a>. My main focus these days is building accessible, inclusive products and digital experiences for varoius clients.

                <br /><br />
                {/* I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React. */}

                <br /><br />
                Here are a few technologies I’ve been working with recently:
            </p>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }}>
              <Grid item xs={12} md={6}>
              <h4 className='stack-title'>Backend</h4>
                <ul class="skills-list">
                  <li>Kotlin</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>Django</li>
                  <li>Node.js</li>
                  <li>Express JS</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
              <h4 className='stack-title'>Frontend</h4>
                <ul class="skills-list">
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavasSript</li>
                  <li>Boostrap</li>
                  <li>Material UI</li>
                </ul>
              </Grid>
            </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={3} className='worked-at'>
            <img src={intellimedmedia} className='img' />
            <img src={qucoon} className='img' />
          </Grid>
          <Grid item xs={12} md={2}></Grid>
        </Grid>
        
        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',  alignItems: 'center', height: ' 90vh'}}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <div className='section-headings'><h3>Where I've Worked</h3></div>
            <VerticalTabs />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>


        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',  alignItems: 'center', height: ' 90vh'}}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={10}>
            <div className='section-headings'><h3>Some Stuff I've Built</h3></div>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }}>
              <Grid item xs={12} md={4}>
                <ProjectCard caption="Med Assistant HMS" description="A Hospital Management System with nine working modules (Doctor, Nurse, Laboratory, Pharmacy, Frontdesk, Account, Accident and Emergency, Operations, and Admin)" stack={['PHP','HTML','CSS','JS','SQL', 'Bootstrap']}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectCard caption="Medpay Hospital accounting software" description="A Hospital Account Management System that used accept payment for services rendered by the doctors, nurses and other departments of the hospital and show financial reports. It also manage stock and supervises operations via the Super Admin Module." stack={['PHP','HTML','CSS','JavaScript','Bootstrap', 'SQL']}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectCard caption="Bollore's Competency Assessment Tool" description="A Tool developed to aid competency Assessments by staff and supervisors and keeps track of gaps and organizational ratings." link="btlnigeria.com" stack={['React Js','Redux','MSSQL','C#']}/>
              </Grid>
            </Grid>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }}>
              <Grid item xs={12} md={4}>
                <ProjectCard caption="CME Trax V2" description="A mobile application developed to help aid medical professionals keep track of their CME courses and required credits in different cour=ntries and states" stack={['Django','MongoDb','Python','React Native','Redux',]}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectCard caption="A Facial Recognition Based E-Voting System API" description="An API to aid voting with facial recognition for verifying voters to ensure they are the ones actually voting and cannot vote more than once." stack={['Django','Sql Lite','Python']} github="github.com/oghenekaroisrael/votingBackend"/>
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectCard caption="An Online Exeat Management Tool" description="A Tool developed to aid students apply for exeats and notify appropriate Authorities about their requests, logs time of exits and reentry to the campus, gives detailed reports and ensures staff accountability." github="github.com/oghenekaroisrael/exeat_ms" stack={['PHP','HTML','SQL','CSS','JavaScript']}/>
              </Grid>
            </Grid>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1,md: 2}}>
              <Grid item xs={12} md={5}></Grid>
              <Grid item xs={12} md={2}>
                <Tooltip title='More Projects To Come Soon'>
                  <a href='#' className='btn btn-primary'>Show More</a>
                </Tooltip>
              </Grid>
              <Grid item xs={12} md={5}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
        </Grid>


        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} >
              <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center', height: '100vh', marginTop: '20vh'}}>
              <div className='section-headings'><h4>04. What's Next?</h4></div>
                <Typography variant='h3' style={{color: '#ffffff', padding: '20px 0', fontWeight: '800'}}>Get In Touch</Typography>
                <Typography variant='p' style={{color: '#ffffff', padding: '4% 0',fontSize: '1.4rem', fontWeight: '400'}}>
                  My inbox is always open. <br />
                  Whether you have a question or just want to say hi, <br />
                  I’ll will definitely get back to you!
                </Typography>
                <a className="btn btn-primary btn-large" href={`mailto:oghenekaroisrael089@gmail.com`}>
                  Say Hello
                </a>
              </Grid>
        </Grid>
        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }}>
              <Grid item xs={12} md={12}>
                <Typography style={{textAlign: 'center', color: '#ffffff', padding: '20px 0', fontWeight: '100'}}>Designed & Built By Oghenekaro Brume Israel</Typography>
              </Grid>
        </Grid>
        </div>
    </>
  )
}

export default Home;