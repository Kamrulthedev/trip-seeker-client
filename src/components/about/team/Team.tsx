import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTeamMembersQuery } from "../../../redux/features/teamMember/teamMemberApi";
import { ITeamMember } from "../../../types";
import TeamMemberLoader from "../../ui/loader/TeamMemberLoader";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  const { data, isLoading } = useGetTeamMembersQuery({});

  return (
    <div className="container mx-auto grid md:grid-cols-12">
      <article className="md:col-span-4">
        <h1 className="text-3xl font-semibold mb-2">Behind The Brands?</h1>
        <div className="flex gap-2 items-center">
          <div className="w-10 h-0.5 bg-primary"></div>{" "}
          <p className="text-sm text-gray-500">THE HIGH STRESS FAVORITE</p>
        </div>
        <div className="md:mt-10 mt-5 text-gray-500 text-justify md:space-y-4 space-y-2 md:pr-5 ">
          <p>
            We are a female-founded, 100% woman-led team of collaborative
            dreamers who value innovation, curiosity and free-thinking
            fearlessness in everything that we do. We take immeasurable pride in
            our work, intentionally stitching love into the very fiber and
            fabric of our designs.
          </p>
          <p>
            We are small, but we are a mighty group of talented individuals
            dedicated to bringing you otherworldly designs with imagery to
            match.
          </p>
        </div>
      </article>
      <div className="md:col-span-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          {isLoading ? (
            <div className="grid grid-cols-3 gap-x-7">
              {Array.from({ length: 3 }).map((_, index) => (
                <TeamMemberLoader key={index} />
              ))}
            </div>
          ) : (
            data?.data.map((item: ITeamMember) => (
              <SwiperSlide>
                <TeamMemberCard item={item} />{" "}
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
