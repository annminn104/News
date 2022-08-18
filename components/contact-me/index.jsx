/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "next/image";

const ContactMe = ({ socials }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-black mb-8">
        <h4 className="text-lg font-bold uppercase text-white bg-black inline-block px-4 mb-4">Contact me</h4>
        <ul>
          {socials.map((social) => (
            <li key={social.node.id} className="mb-2">
              <a href={social.node.link} target="_blank" className="flex gap-4 items-center" style={{ backgroundColor: social.node.color.hex }}>
                <Image src={social.node.icon.url} width="34px" height="34px" alt={social.node.name} />
                <p className="text-white">{social.node.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export { ContactMe };
