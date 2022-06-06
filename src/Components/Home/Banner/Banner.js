import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/banner4.jpg';
import banner5 from '../../../images/banner/banner5.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Best Motherboards For Gaming, AMD Ryzen and Intel</h2>
                    <p className='text-warning'>Whilst the processor, graphics card, and system memory are all important for a working PC, it's the motherboard that holds everything together and acts as the backbone.It's easy to make the wrong choice with a motherboard, which is why we rounded up some of the best motherboards right here to help you make the right choice.....</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className='text-primary'>The best CPU for gaming </h2>
                    <p>The best CPU for gaming means the fastest chip, with the most cores, in your price range. That might be the lofty Intel Core i9 12900K, or AMD Ryzen 9 5900X, though it could just as well be the bang-for-your-buck Intel Core i5 12400. It's about price to performance, and what you're using your PC for most of the time....</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2>Best RAM for Gaming: DDR4, DDR5</h2>
                    <p>
                        System requirements are always changing, with what was once the recommended amount of RAM to play a game slowly but surely becoming the minimum. And that’s to say nothing of more demanding tasks, like photo and video editing or, well, Chrome tabs. A lack of RAM could be the source of any performance bottleneck you may have, as your gaming PC or laptop struggles to juggle applications on your subpar memory capacity..
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2>Best 4K Gaming Monitors</h2>
                    <p>
                        Gaming has evolved in recent years, with new 4k monitors delivering a more detailed gaming experience. Console and PC gamers alike have embraced this new format, with upgraded consoles that can take advantage of the greater levels of detail these screens provide...
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2>The next Mac Pro: successor to M2 Ultra in testing</h2>
                    <p>
                        Mac Pro will ship in 2023. He does not offer specifics, however. Its possible Apple could reveal the Mac Pro at WWDC in June and then say it wont ship until the beginning of the year, though thats a longer gap between reveal and shipping than Apple usually has....
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;