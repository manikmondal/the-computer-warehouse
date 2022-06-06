import React from 'react';


const Upcoming = () => {
    return (
        <div id='upcoming' className='container'>

            <h1 className='text-primary text-center m-5'>UPCOMING MACBOOK PRO M2 CHIP</h1>
            <div className='products-text'>
                <div className='product-up'>
                    <img className="d-block w-100" src={`https://www.linkpicture.com/q/mac1-1.jpg`} alt="" />
                </div>
                <div className='product-up'>
                    <h2 className='text-primary m-3'>MACBOOK PRO M2 CHIP</h2>
                    <h5 className='m-3'>The so-called M2 is being bandied about as an update to Apple's first-gen M1 entry-level version, although we've heard no details beyond that. AppleTrack and others have said that the aforementioned specs would take away everything that makes a MacBook Pro a "pro" model, especially in light of speculation about a revamped Air, but that might not be the case. If the rumored M2 chip has specs somewhere between the M1 and M1 Max, say eight cores (with six or eight P cores), support for 32GB RAM, 14 GPU cores and no ProRes accelerator, it could serve quite well as a less expensive Pro for low-end content creation, such as most photo editing. Not everyone is editing video. And that still leaves room for a light, less powerful Air.
                        This is corroborated by the rumor from 9to5Mac, which says the expected new models of the MacBook Pro and MacBook Air will be powered by the M2:... </h5>
                </div>

            </div>


        </div>
    );
};

export default Upcoming;