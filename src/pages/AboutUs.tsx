import about1 from "../assets/images/about/about1.1.jpg";
import about2 from "../assets/images/about/about1.2.jpg";
import Contact from "../components/about/contact/Contact";
import Map from "../components/about/map/Map";
import Team from "../components/about/team/Team";

import Testimonial from "../components/about/testimonial/Testimonial";
import PageCover from "../components/pageCover/PageCover";
const AboutUs = () => {
  return (
    <div>
      <PageCover title="About Us" />
      <section className="md:px-[20%] px-5 md:my-20 my-10 grid md:grid-cols-2 gap-10">
        <article>
          <h1 className="text-3xl font-semibold mb-2">Our Story</h1>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-0.5 bg-primary"></div>{" "}
            <p className="text-sm text-gray-500">THE HIGH STRESS FAVORITE</p>
          </div>
          <div className="md:mt-10 mt-5 text-gray-500 text-justify md:space-y-4 space-y-2">
            <p>
              Praesent metus tellus, elementum eu, semper a, adipiscing nec,
              purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
              lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
              Aenean massa.
            </p>
            <p>
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Vivamus consectetuer hendrerit lacus. In hac habitasse platea
              dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
          </div>
        </article>
        <img
          src={about1}
          className="w-full h-full hover:scale-95 transition-all duration-500 "
        />
      </section>
      <section className="md:px-[20%] px-5 md:my-20 my-10 grid md:grid-cols-2 gap-10">
        <img
          src={about2}
          className="w-full h-full hover:scale-95 transition-all duration-500 "
        />
        <article>
          <h1 className="text-3xl font-semibold mb-2">Who We Are ?</h1>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-0.5 bg-primary"></div>{" "}
            <p className="text-sm text-gray-500">THE HIGH STRESS FAVORITE</p>
          </div>
          <div className="md:mt-10 mt-5 text-gray-500 text-justify md:space-y-4 space-y-2">
            <p>
              Praesent metus tellus, elementum eu, semper a, adipiscing nec,
              purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
              lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
              Aenean massa.
            </p>
            <p>
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Vivamus consectetuer hendrerit lacus. In hac habitasse platea
              dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
          </div>
        </article>
      </section>
      <Team />
      <Testimonial />
      <Map />
      <Contact />
    </div>
  );
};

export default AboutUs;
