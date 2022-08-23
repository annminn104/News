import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto text-white bg-black border-t-8 border-amber-300 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 py-4">
          <div className="lg:col-span-4 col-span-1 px-4 lg:px-8">
            <h1 className="text-4xl">text 1</h1>
          </div>
          <div className="lg:col-span-4 col-span-1 px-4 lg:px-8">
            <h1 className="text-4xl">text 2</h1>
          </div>
          <div className="lg:col-span-4 col-span-1 px-4 lg:px-8">
            <ul className="list-group">
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Accessories">Accessories</a>
                <span>1</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Business">Business</a>
                <span>7</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Design">Design</a>
                <span>6</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Entertainment">Entertainment</a>
                <span>3</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Featured">Featured</a>
                <span>5</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Friends">Friends</a>
                <span>8</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Lifestyle">Lifestyle</a>
                <span>8</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/People">People</a>
                <span>5</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Sport">Sport</a>
                <span>3</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Technology">Technology</a>
                <span>4</span>
              </li>
              <li className="flex justify-between">
                <a href="https://anartisis-gaming-fbt.blogspot.com/search/label/Training">Training</a>
                <span>5</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-600 px-4 lg:px-8 py-4">
          <h1>Footer bottom</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Footer };
