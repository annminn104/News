/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "next/image";

const ContactMe = ({ socials }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-black mb-8 dark:border-white">
        <h3 className="text-lg font-bold uppercase text-white bg-black inline-block px-4 mb-4 dark:text-black dark:bg-white">Contact me</h3>
        <ul>
          {socials.map((social) => (
            <li key={social.node.id} className="mb-2">
              <a href={social.node.link} target="_blank" className="flex gap-4 h-8 items-center" style={{ backgroundColor: social.node.color.hex }}>
                <div className="h-8 w-8">
                  <Image src={social.node.icon.url} layout="fixed" width={32} height={32} alt={social.node.name} />
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
