import React from "react";
import Data from './dummyData';

function homepage() {
  return (
    <div className=" min-h-screen font-serif">
      {Data.map((post)=>(
        <div className="bg-slate-500 h-20  z-40 m-5">
          {post.name}
          {post.likes}
          {post.content}
          {post.replies}
        </div>
      ))}
    </div>
  );
}

export default homepage;

