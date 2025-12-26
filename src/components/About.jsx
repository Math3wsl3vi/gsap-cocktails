import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words',
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02,
      })
      .from(
        '.top-grid div, .bottom-grid div',
        {
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
          stagger: 0.04,
        },
        '-=0.5'
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Specialty Coffee</p>
            <h2>
              Where every bean tells a story{' '}
              <span className="text-white">-</span> from farm to cup
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cup we brew begins long before it reaches your hands. From
              responsibly sourced beans to precise roasting and careful
              extraction, our craft is focused on bringing out the true
              character of coffee — rich, balanced, and unforgettable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.8</span>/5
              </p>
              <p className="text-sm text-white-100">
                Loved by 15,000+ coffee lovers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/coffee7.jpg" alt="freshly roasted beans" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/coffee1.jpg" alt="barista brewing coffee" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/coffee5.jpg" alt="espresso shot pouring" className='object-bottom' />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/coffee2.jpg" alt="latte art" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/coffee6.png" alt="coffee beans on table" className='object-bottom' />
        </div>
      </div>
    </div>
  );
};

export default About;
