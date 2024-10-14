import React from 'react';
import './Service.css';

const services = [
  { icon: '🔧', title: 'IT Support' },
  { icon: '💻', title: 'Web Development' },
  { icon: '📱', title: 'Mobile Apps' },
  { icon: '🛡️', title: 'Cybersecurity' },
  { icon: '☁️', title: 'Cloud Services' },
  { icon: '⚙️', title: 'Tech Consulting' },
];

const Service = () => {
  return (
    <div className="service">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
