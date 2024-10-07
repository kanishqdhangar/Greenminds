import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import khushi from './Khushi.jpg';
import kanishq from './Kanishq.jpg';
import mittal from './Mittal.jpg';
import kshitiz from './Kshitiz.jpg';

export default function About() {
  return (
    <div>
      <div className='top '>
            <div className='header'>
                <div className='title'><h1><Link to="/home">Green Minds</Link></h1></div>
                <div className='navigation'><tr>
                    {/* <td><a><Link to="/about">About us</Link></a></td> */}
                    <td><a href="#team">Meet our team</a></td>
                    <td><a href="#contactus">Contact Us</a></td>
                    </tr></div>
            </div>
            {/* <div className='moto'>
                <p className='line1'>From Fields to Shields - Guarding Yields</p>
                <p className='line2'>Circular Growth, Sustainable tommorow</p>
            </div> */}
      </div>
      <div className='second'>
        <div className='greenminds'>
            <p>At GreenMinds, we are revolutionising the way agricultural waste is managed by transforming 
                it into valuable products and integrating it back into the economy, all while minimising 
                environmental harm. Our vision goes beyond simply reducing waste we are creating a circular 
                economy that not only benefits the environment but also generates new opportunities for farmers, 
                industries, and communities.</p>
            <p>At GreenMinds, we've developed an innovative model that turns agricultural waste from a problem 
                into a profitable resource. Here's how we do it:</p>
            <ul>
                <li>Waste Collection and Repurposing: We collect stubble and other agricultural residues 
                    directly from farms and channel them to industries that need these raw materials. 
                    This waste is transformed into valuable products like ethanol, biochar, bioplastics, 
                    and biodegradable packaging.
                </li>
                <br></br>
                <li>QR Code Lifecycle Tracking: To ensure transparency and consumer trust, we attach a QR code 
                    to each product we help produce. This allows consumers to trace the entire lifecycle of the 
                    product from waste collection, processing, and production, to disposal reinforcing the 
                    sustainable nature of the process.
                </li>
                <br></br>
                <li>Closing the Loop with Black Soldier Fly Larvae (BSFL): Once biodegradable products, such as 
                    packaging or bioplastics, reach the end of their life, we ensure they are properly disposed of. 
                    We facilitate collection at nearby drop-off points, where the waste is processed using BSFL, 
                    which efficiently breaks it down into manure. This nutrient-rich compost is then sold back 
                    to farmers, completing the cycle and enhancing soil health.
                </li>
            </ul>
        </div>
      </div>
      <div className='fourth'>
        <div className='team' id="team">
            <p className='heading2'>Our Team</p>
            <div className='box'>
                <div className='images1'>
                    <img src={kshitiz} />
                </div>
                <div className='ins1'>
                    <div className='heading3'>Kshitiz Sikriwal</div>
                    <p>Passionate about front-end development, project management, and leading teams. He has 
                        explored technologies like blockchain, data analysis, and web development, and I enjoy 
                        carrying projects forward from start to finish. At Green Minds, he is leading brainstorming 
                        sessions, project analysis, goal setting, and also contributing to the software development 
                        team.
                    </p>
                </div>
            </div>
            <div className='box'>
                <div className='ins1'>
                    <div className='heading3'>Nikita Mittal</div>
                    <p>Hello, I'm Nikita Mittal. I'm passionate about driving innovation through software development,
                        with a keen interest in cloud computing. At Green Minds, I take the lead in ideation, 
                        project presentations, and shaping the direction of our initiatives. ensuring ideas turn 
                        into actionable results.</p>
                </div>
                <div className='images2'>
                    <img src={mittal} />
                </div>
            </div>
            <div className='box'>
                <div className='images1'>
                    <img src={kanishq} />
                </div>
                <div className='ins2'>
                    <div className='heading4'>Kanishq Kumar Dhangar</div>
                    <p>Kanishq is highly focused on web development and team management. playing a crucial role in 
                        Green Minds' website development. He led the process from concept to completion, ensuring a 
                        user-friendly and effective online platform. His blend of technical expertise and leadership 
                        has been key to our digital success.</p>
                </div>
            </div>
            <div className='box'>
                <div className='ins1'>
                    <div className='heading3'>Khushi Kumari</div>
                    <p>She is on a journey into data analytics, with plans to advance into data science, Al, and 
                        machine learning. Alongside her technical focus, she brings strong soft skills in management, 
                        leadership, and communication, enabling her to effectively collaborate and drive results in 
                        data-driven projects and team projects.</p>
                </div>
                <div className='images2'>
                    <img src={khushi} />
                </div>
            </div>
        </div>
      </div>
      <div className='footer'>
        <div className='contactus' id='contactus'>
            <div className='heading2'>Contact Us</div>
            <p>If you have any questions, feel free to reach out to us!</p>
            <div className='office'>
                <div className='heading3'>Our Office</div>
                <p>+91 8700970128</p>
                <p>greenminds@gmail.com</p>
                <p>Central University of Haryana 
                    <br></br>Mahendragarh, Haryana
                    <br></br>123029
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}