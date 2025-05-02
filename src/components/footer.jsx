import react from 'react';

const currentYear = new Date().getFullYear();
function Footer(){
    return (
        <div className='Footer'>
            <p>Copyright {currentYear}</p>
        </div>
        
    )
}

export default Footer;

