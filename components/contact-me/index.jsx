/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "next/image";

const ContactMe = ({ socials }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-black mb-8">
        <h3 className="text-lg font-bold uppercase text-white bg-black inline-block px-4 mb-4">Contact me</h3>
        <ul>
          {socials.map((social) => (
            <li key={social.node.id} className="mb-2">
              <a href={social.node.link} target="_blank" className="flex gap-4 items-center" style={{ backgroundColor: social.node.color.hex }}>
                <div className="w-8 h-8 relative">
                  <Image src={social.node.icon.url} layout="fill" alt={social.node.name} />
                </div>
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
