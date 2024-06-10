import Link from "next/link";
import React from "react";
import { useGetSharedQuery } from "../../lib/redux/services/api";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
const SocialLinks = ({ customeStyle }) => {
  const { data: shared } = useGetSharedQuery();
  const sharedData = shared?.data?.shared;
  const social = [
    {
      icon: <FaFacebook className=" text-xl sm:text-2xl" color="white" />,
      url: sharedData?.facebookLink ? sharedData?.facebookLink : "",
    },
    {
      icon: <FaInstagram className="text-xl sm:text-2xl" color="white" />,
      url: sharedData?.instagramLink ? sharedData?.instagramLink : "",
    },
    {
      icon: <FaLinkedin className="text-xl sm:text-2xl" color="white" />,
      url: sharedData?.linkedinLink ? sharedData?.linkedinLink : "",
    },
  ];
  return (
    <div className={`flex ${customeStyle} items-center gap-2`}>
      {social.map((e, i) => {
        return (
          <Link key={i} href={e.url}>
            {e.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
