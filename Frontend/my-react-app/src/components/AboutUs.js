import React from 'react';
import '../pages/styles/AboutUs.scss';
import person1 from '../pages/pictures/Person1.png';
import person2 from '../pages/pictures/Person2.png';
import person3 from '../pages/pictures/Person3.png';

const AboutUs=() => {
    return (
        <div className='about-us'>
            <header className='header'>
                <h5>About Us</h5>
            </header>
            <div className='text-container'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna. In convallis diam volutpat libero tincidunt semper. Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie. In id elementum turpis. Curabitur quis tincidunt mauris. </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna. In convallis diam volutpat libero tincidunt semper. Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie. In id elementum turpis. Curabitur quis tincidunt mauris. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna. In convallis diam volutpat libero tincidunt semper. Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie. In id elementum turpis. Curabitur quis tincidunt mauris. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna. In convallis diam volutpat libero tincidunt semper. Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie. In id elementum turpis. Curabitur quis tincidunt mauris. </p>
            </div>
            <div className='image-container'>
                <div className='top-image'>
                    <img src={ person1 } alt='Person 1' />
                </div>
                <div className='bottom-images'>
                    <img src={ person2 } alt='Person 2' />
                    <img src={ person3 } alt='Person 3' />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
