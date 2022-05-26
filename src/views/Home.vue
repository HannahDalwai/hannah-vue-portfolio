<template>
  <Landing/>
  <Navbar/>
   <section id="about" class="about-mf sect-pt4 route">
    <About/>
    </section><!-- End About Section --><br>
    <section id="resume" class="resume"> 
      <div class="section-title">
          <h1 class="display-5">Resume</h1>
          <div class="line-mf"></div>
        </div><br>
      <div class="container box-shadow-full">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Experience</h3>
            <div class="resume-project">
              <h4>Assistant Lecturer</h4>
              <h5>Apr 2022 - Present</h5>
              <p><em>Life Choices Coding Academy </em></p>
              <p>Assisting students with issues in their code as well as explaining concepts.
                 Managing the learning management system. 
                 Marking projects and code review.
                 Overseeing hardware pre and post lessons.
                 Administration.
                 Remote learner support when needed.
              </p>
            </div>
            <div class="resume-project">
              <h4>Lifesaver in Training</h4>
              <h5>2017-2018</h5>
              <p><em>Strandfontein LifeSaving Club</em></p>
              <p>Occasional on duty work as a lifeguard in training</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Education</h3>
            <div class="resume-project">
              <h4>Student</h4>
              <h5>20th Sept 2021 - March 2022</h5>
              <p><em>Life Choices Academy</em></p>
              <ul>
                <li>Studying various coding languages and skills. .</li>
                <li>Both front end and back end over a 6 month period</li>
                <li>As well as working with different softwares such as Linux and Windows.</li>
                <li>Partook in Personal Development training.</li>
                <p>021 696 4157</p>
              </ul>
            </div>
            <div class="resume-project">
              <h4>Student</h4>
              <h5>2016 - 2020</h5>
              <p><em>Bergvliet High School</em></p>
              <ul>
                <li>NQF-level-4. Graduated with a bachelors pass.</li>
                <li>Part of the girls soccer team in the year 2019.</li>
                <li>Swam for three years on the schools swimming team</li>
                <li>Member of the Public Speaking club.</li>
                <p>021 712 0284</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Resume Section -->
      <br>
 <section id="services">
 <section id="services" class="services-mf pt-5 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Services
              </h3>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class='bx bx-palette'></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Web Design</h2>
                <p class="s-description text-center">
                 Cultivating memorable user experiences on websites/web apps. Includes appearance, layout, and content of a website.<br> <br><br>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class='bx bx-code-alt'></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Web Development</h2>
                <p class="s-description text-center">
                  web development encompasses all the actions, updates, and operations required to build, maintain and manage a website to ensure its performance, user experience, and speed are optimal..
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class='bx bxs-devices'></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Responsive Design</h2>
                <p class="s-description text-center">
                 Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes.
               <br><br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Services Section -->
    </section><br>
 <!-- <NewNav/> -->
<section id="project" >
                     <h1 id="project-title" class="display-5">
                     My Work
                      </h1>
  <div v-if="projects.length">
<div class="container">
  <div class="row">
    <div class="col " v-for="project in projects" :key="project.id">
  <div class="card" style="width: 18rem;">
  <img :src="project.imgURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}e</h5>
    <h5> {{ project.person}}</h5>
    <h5>{{ project.techStack}}</h5>
    <p class="card-text">{{ project.desc }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
  </div>
</section><br> <br> <br> 
<section id="testimonials">
    <h1 class="display-5" >References</h1>
    <div class="line-mf"></div><br><!-- <div v-for="testimonial in testimonials" :key="testimonial._id" > -->
<div class="container">
  <div class="row">
    <div class="col-sm-3 col-lg-4 col-md-6" v-for="testimonial in testimonials" :key="testimonial._id" >
<div class="card" style="width: 18rem;">
<img class="testi-img" :src="testimonial.imgURL" alt="" srcset="">
  <div class="card-body">
    <p>{{ testimonial.title }}</p>
    <h5 class="card-title">{{ testimonial.person }}</h5>
    <p class="card-text">{{ testimonial.description }}</p>
  </div>
</div>
    </div>
  </div>
</div><!-- </div> -->
</section>
<br><br><br><br>
  <section id="contact"> 
    <h1 class="display-5" >Get in touch</h1>
        <div class="line-mf"></div>
          <br>
            <Contact/>
</section>
</template>
<script>
import Contact from '../components/Contact.vue'
import Landing from '../components/Landing.vue'
import Navbar from '../components/Navbar.vue'
import About from '../components/About.vue'
export default {
components:{
  Landing,
  Navbar,
  About,
  Contact,
  },
data() {
  return {
    testimonials:[],
    projects:[]
  }
},
mounted(){
 fetch('https://h-portfolio-api.herokuapp.com/testimonials')
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      this.testimonials = data
    })
  .catch(err => console.log(err.message))
   fetch('https://h-portfolio-api.herokuapp.com/projects')
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      this.projects = data
    })
},
methods: {
  fixArrayID(arr) {
  return arr.forEach((item, index) => item.id = index + 1)
},
},
}
</script>
<style scoped>
.social-links a {
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
.social-links a:hover {
  background: #f2f282;
  color: #fff;
  text-decoration: none;
}
/* .cards { */
  /* display: flexbox; */
  /* grid-template-columns: auto auto auto;  */
  /* max-width: 1170px; */
  /* margin: 0 auto; */
  /* grid-gap: 9px; */
  /* align-items: center; */
  /* width: 100%; */
/* } */
.card {
  max-width: 100%;
  height: 450px;
  /* overflow: hidden; */
  border-radius: 12px;
  position: relative;
  box-shadow: 0 0 9px #eee;
  transition: all ease .6s;
  margin-inline: auto;
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
}
.pic img:hover {
  transform: scale(1.2);
}
.pic img {
  width: 100%;
}
.ttl {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin-bottom: -36px;
  text-align: center;
  transition: all ease .3s;
  transform: trasnlateX(12px);
  z-index: 3;
}
.ttl:after {
  content: '';
  background: linear-gradient(to top, black, transparent);  
  top:0;right:0;bottom:0;left:0;
  position: absolute;
  z-index: -1;
  margin-bottom: -27px;
}
.ttl:hover {
  transform: translateY(-12px);
}
.ttl .h2 {
  font-size: 21px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
}
.ttl .h2:after {
  content: '';
  width: 27px;
  border-top: 3px solid #fff;
  display: block;
  margin: 0 auto;
  margin-top: 21px;
}
@media (min-width: 0) and (max-width: 575px) {
  .cards {
    grid-template-columns: 100%;
  }
  .card {
    max-width: 100%;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .cards {
    grid-template-columns: auto auto auto;
  }
  .card:nth-child(1) {
    grid-column: 1 / 3;
  }
  .card:nth-child(2) {
    grid-column: 3 / 5;
  }
  .card:nth-child(3) {
    grid-column: 1 / 5;
  }  
    .card:nth-child(4) {
    grid-column: 1 / 3;
  }
  .card:nth-child(5) {
    grid-column: 3 / 5;
  }
  .card:nth-child(6) {
    grid-column: 1 / 5;
  }  
}
@media (min-width: 768px) and (max-width: 991px) {
  .card:nth-child(1) {
    grid-column: 1 / 3;
  }
  .card:nth-child(2) {
    grid-column: 3 / 4;
  }
  .card:nth-child(3) {
    grid-column: 1 / 4;
  }  
    .card:nth-child(4) {
    grid-column: 1 / 3;
  }
  .card:nth-child(5) {
    grid-column: 3 / 5;
  }
  .card:nth-child(6) {
    grid-column: 1 / 5;
  }  
}
@media (min-width: 576px) and (max-width: 991px) {
  .cards {
    grid-template-columns: auto auto;
  }
  .card {
    max-width: 100%;
  }
}
#logomi{
height: 60%;
width: 50%;
object-fit: contain;
}
#infolist{
  margin-left: 25%;
}
/*--/ Title A /--*/
.title-box {
  margin-bottom: 4rem;
}
.title-a {
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
}
.subtitle-a {
  text-decoration: none;
  color: #4e4e4e;
}
.line-mf {
  width: 40px;
  height: 5px;
  background-color: #0d7988;
  margin: 0 auto;
}
.paralax-mf {
  position: relative;
  padding: 8rem 0;
}
/*--/ Title Left /--*/
.title-box-2 {
  margin-bottom: 3rem;
}
.title-left {
  font-size: 2rem;
  position: relative;
}
.title-left:before {
  content: "";
  position: absolute;
  height: 3px;
  background-color: #a2c0c0;
  width: 100px;
  bottom: -12px;
}
.box-pl2 {
  padding-left: 2rem;
  margin-top: 100px;
}
.box-shadow-full {
  padding: 3rem 1.25rem;
  position: relative;
  background-color: #fff;
  margin-bottom: 3rem;
  z-index: 2;
  /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2); */
}
@media (min-width: 768px) {
  .box-shadow-full {
    padding: 3rem;
  }
}
.table-cell {
  display: table-cell;
  vertical-align: middle;
}
/* LandingAbout */
 #profile{
  width:100% ;
  height:100% ;
    border: 1px solid #008080;
 }
.about-mf .box-shadow-full {
  padding-top: 4rem;
}
/* RESUME */
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #050d18;
}
.resume .resume-project {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #008080;
  position: relative;
}
.resume .resume-project h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #050d18;
  margin-bottom: 10px;
}
.resume .resume-project h5 {
  font-size: 16px;
  background: #fcfcfc;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 10px;
}
.resume .resume-project ul {
  padding-left: 20px;
}
.resume .resume-project ul li {
  padding-bottom: 10px;
}
.resume .resume-project:last-child {
  padding-bottom: 0;
}
.resume .resume-project::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #008080;
}
/* SERVICES */
.service-box {
  background-color: #fff;
  padding: 2.5rem 1.3rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  text-align: center;
}
.service-box:hover .ico-circle {
  transition: all 500ms ease;
  color: #fff;
  background-color: #008080;
  /* box-shadow: 0 0 0 10px #a2c0c0; */
}
.service-box .service-ico {
  margin-bottom: 1rem;
  color: #1e1e1e;
}
.service-box .ico-circle {
  transition: all 500ms ease;
   display: inline-flex;
  align-items: center;
   justify-content: center;  
}
.service-box .ico-circle i {
  line-height: 0;
  font-size: 40px;
}
.service-box .s-title {
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  padding: 0.4rem 0;
}
.service-box .s-description {
  color: #4e4e4e;
}
.ico-circle {
  height: 100px;
  width: 100px;
  font-size: 2rem;
  border-radius: 50%;
  line-height: 1.55;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 0 0 10px #008080;
  display: block;
}
.list-ico {
  line-height: 2;
}
.list-ico span {
  color: #008080;
  margin-right: 10px;
}

.box-shadow, .card-blog, .work-box, .service-box, .paralax-mf {
  box-shadow: 0 13px 8px -10px rgba(0, 0, 0, 0.1);
}
/* project */

/* testimonials new */
.testimonial-box {
  color: #fff;
  text-align: center;
  align-self: center;
}
.testimonial-box .author-test {
  margin-top: 1rem;
}
.testimonial-box .author-test img {
  margin: 0 auto;
}
.testimonial-box .author {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 1rem 0;
  display: block;
  font-size: 1.4rem;
}
.testimonial-box .comit {
  font-size: 2rem;
  color: #0078ff;
  background-color: #fff;
  width: 52px;
  height: 52px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  line-height: 1.6;
}
@media (min-width: 768px) {
  .testimonial-box .description {
    padding: 0 5rem;
  }
}
@media (min-width: 992px) {
  .testimonial-box .description {
    padding: 0 8rem;
  }
}
</style>