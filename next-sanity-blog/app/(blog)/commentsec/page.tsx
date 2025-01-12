"use client"

import React, { useState, useEffect } from "react";

const CommentsSec: React.FC = () => {
  const [comments, setComments] = useState<{ username: string; comment: string }[]>([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment = { username, comment };
      setComments([...comments, newComment]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white-900 text-black rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 mb-2 border border-gray-700 rounded bg-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          className="w-full p-2 border border-gray-700 rounded bg-white-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Comment
        </button>
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div
              key={index}
              className="p-2 mb-2 border-b border-gray-700 last:border-none"
            >
              <h3 className="font-semibold">{c.username}</h3>
              <p>{c.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentsSec;
