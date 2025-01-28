import React, { useState } from "react";
import Thumb from "@mui/icons-material/ThumbUpOutlined";
import Reply from "@mui/icons-material/ReplyOutlined";
import Share from "@mui/icons-material/ShareOutlined";
import posts from "./dummyData";

function MainCard() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-10 max-w-screen-xl">
        {posts.map((post, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-4 bg-blue-100 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition duration-300 hover:scale-105"
          >
            {post.images && (
              <img
                src={post.images.length>0!=""?post.images[0]:"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"}
                alt="Post"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
            )}
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg font-semibold text-gray-800">{post.name}</h1>
              <p className="text-xs text-gray-500">Posted by: {post.postedBy}</p>
            </div>
            {post.date && (
              <p className="text-xs text-gray-400 mb-2">Date: {post.date}</p>
            )}
            <p className="text-sm font-light text-gray-700 mb-4">
              {expandedCard === index
                ? post.content
                : `${post.content.slice(0, 80)}...`}
            </p>
            <button
              onClick={() => handleReadMore(index)}
              className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-medium shadow-md transition duration-300 hover:bg-pink-500"
            >
              {expandedCard === index ? "Show Less" : "Read More"}
            </button>
            <div className="flex justify-between items-center pt-4">
              <button
                className="flex items-center px-3 py-1 rounded-md bg-white text-blue-500 border border-blue-500 text-xs hover:bg-blue-500 hover:text-white transition duration-200"
                onClick={() => alert(`Liked post: ${post.name}`)}
              >
                <Thumb className="mr-1" fontSize="small" />
                {post.likes}
              </button>
              <button
                className="flex items-center px-3 py-1 rounded-md bg-white text-green-500 border border-green-500 text-xs hover:bg-green-500 hover:text-white transition duration-200"
                onClick={() => alert(`Replied to post: ${post.name}`)}
              >
                <Reply className="mr-1" fontSize="small" />
                {post.replies}
              </button>
              <button
                className="flex items-center px-3 py-1 rounded-md bg-white text-purple-500 border border-purple-500 text-xs hover:bg-purple-500 hover:text-white transition duration-200"
                onClick={() => alert(`Shared post: ${post.name}`)}
              >
                <Share className="mr-1" fontSize="small" />
                {post.shared}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCard;
