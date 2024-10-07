import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image from './images.jpg';


export default function Home() {
  return (
    <div className='body'>
      <div className='first'>
        <div className='background-image'>
            <div className='header'>
                <div className='title'><h1>Green Minds</h1></div>
                <div className='navigation'><tr>
                    <td><a><Link to="/about">About us</Link></a></td>
                    <td><a href="#services">Services</a></td>
                    <td><a href="#contactus">Contact Us</a></td>
                    </tr></div>
            </div>
            <div className='moto'>
                <p className='line1'>From Fields to Shields - Guarding Yields</p>
                <p className='line2'>Circular Growth, Sustainable tommorow</p>
            </div>
        </div>
      </div>
      <div className='second'>
        <div className='content'>
            <p>At GreenMinds, we are dedicated to transforming agricultural waste, such as stubble and straw, 
                into sustainable, biodegradable packaging solutions. Our mission is to address environmental 
                challenges by providing eco-friendly alternatives while promoting a circular bio-economy.
                <br></br><br></br>Through our *Circular Bio-Economy-Enabled System*, we ensure that farmers, manufacturers, 
                and consumers can trace the entire lifecycle of agricultural waste. Using blockchain technology,
                every step from collection to the creation of biodegradable products is tracked transparently. 
                This system not only reduces waste but also empowers consumers to participate in sustainable 
                practices. By returning used packaging, consumers earn rewards such as points, tax waivers, or
                discounts, creating a closed-loop system that benefits both the environment and society.<br></br>
                <br></br>
                At GreenMinds, we are committed to building a cleaner, greener future, one package at a time.</p>
        </div>
        <div className='img'>
            <img src={image} />
            <p>A contribution to sustainable environment.</p>
        </div>
      </div>
      <div className='third'>
        <div className='services' id='services'>
            <p className='heading1'>Services</p>
            <div className='content-services'>
                <div className='con1'>
                    <h2>Scan QR</h2>
                    <p>Discover the Journey of Your Product! Scan the QR code to explore the full life cycle, 
                        from stubble-based raw materials to eco-friendly packaging. Trace sustainability every 
                        step of the way!</p>
                </div>
                <div className='con2'>
                    <h2>Sell Stubble</h2>
                    <p>Turn Crop Waste into Cash! Sell your stubble easily and contribute to a sustainable future.
                         Connect with buyers and turn agricultural residue into a valuable resource today!</p>
                </div>
                <div className='con3'>
                    <h2>Buy Products</h2>
                    <p>Eco-friendly Packaging Made from Crop Stubble! Choose sustainable, biodegradable packaging
                         solutions that reduce waste and protect the planet.
                         Shop now and make a green choice for your business!</p>
                </div>
            </div>
        </div>
      </div>
      <div className='fourth'>
        <div className='Insights'>
            <p className='heading2'>Insights</p>
            <div className='ins1'> 
                <div className='heading3'>Precision Agriculture and Waste collection optimization</div>
                <p>GreenMind uses Al and IoT to help farmers monitor agricultural waste production.
                    The system predicts waste quantities and types for each harvest cycle and optimizes
                    truck collection routes for fuel efficiency across multiple farms, reducing costs and 
                    carbon emissions.</p>
            </div>
            <div className='ins1'>
                <div className='heading3'>Localized waste processing at Micro-Refiniries</div>
                <p>Traditional waste processing relies on centralized plants, leading to high logistics costs 
                    and increased emissions. GreenMind disrupts this by establishing small-scale micro-refineries 
                    in agricultural hubs. These modular plants process waste on-site, cutting transportation needs 
                    and converting waste into valuable by-products like biochar, biofuels, and compost. This keeps 
                    resources local, benefiting both farmers and the environment.</p>
            </div>
            <div className='ins1'>
                <div className='heading3'>Production of Biodegradable Packaging and Consumer Goods</div>
                <p>Through innovative material science, waste is converted into biopolymers for biodegradable 
                    packaging, providing a sustainable alternative to traditional plastics. GreenMind uses 
                    decentralized manufacturing hubs with 3D printers and injection molding machines to produce 
                    packaging and products near raw material sources, reducing emissions further.</p>
            </div>
            <div className='ins1'>
                <div className='heading3'>Blockchain-Enabled Circular System</div>
                <p>We use blockchain technology to make the entire process clear and accountable. This system lets 
                    farmers, manufacturers, and consumers easily track agricultural waste from collection to its 
                    use in eco-friendly products. We encourage consumers to return used biodegradable packaging by 
                    offering rewards like points, tax breaks on purchase, or discounts. This approach helps ensure 
                    that each product completes its lifecycle efficiently.</p>
            </div>
            <div className='ins1'>
                <div className='heading3'>Black Soldier Fly Larvae (BSFL) composting for localized waste 
                    management</div>
                <p>At the end of biodegradable packaging's lifecycle, GreenMind employs Black Soldier Fly Larvae
                    (BSFL) for efficient composting. These larvae quickly break down organic matter, yielding 
                    protein-rich larvae and nutrient-dense compost. This approach is both effective and sustainable,
                    providing a valuable source of livestock feed and high-quality fertilizer for</p>
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
