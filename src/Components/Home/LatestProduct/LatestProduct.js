import React from 'react';
import './LatestProduct.css'


const LatestProduct = () => {
    return (
        <div id='latestproduct' className='container'>
            <h1 className='text-primary text-center m-5'>LATEST DESKTOP COMPUTER</h1>
            <div className='products-text'>
                <div className='products'>
                    <h2 className='text-primary m-3'>OMEN 40L Gaming Desktop</h2>
                    <h5 className='m-3'>Windows 11 Home
                        AMD Ryzen™ 7 5800X W/RGB Air Cooling (3.8 GHz up to 4.7 GHz, 32 MB L3 cache, 8 cores)
                        NVIDIA® GeForce RTX™ 3060 (12 GB GDDR6 dedicated) with LHR, Display Connectors: HDMI*1, DP*3
                        HyperX 16 GB DDR4-3733 MHz XMP Heatsink RAM (2 x 8 GB)The OMEN by HP 40L Gaming Desktop is the ultimate companion on your gaming journey. Powered by the latest AMD processor[1] and advanced graphics, the OMEN Desktop has a superior cooling system that prevents overheating. Designed for easy tool-less upgradeability, the OMEN Desktop will give you the top-tier performance to meet your gaming needs.The HP E27m G4 QHD USB-C Conferencing Monitor enhances your video calls with a high-res webcam, dual mics, and powerful stereo speakers, plus the connectivity of a USB-C docking station display and a full range of ergonomic features. Its primitive OSD buttons are our only quibble. </h5>
                </div>
                <div className='products'>
                    <img className="d-block w-100" src={`https://www.linkpicture.com/q/gaming_3.jpg`} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LatestProduct;