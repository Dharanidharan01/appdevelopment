import React, { useState, useEffect } from 'react';
import './Feed.css';

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const initialFeedPosts = [
    {
      id: 1,
      username: 'Dharani',
      text: 'Hello, world!',
      timestamp: '1 hour ago',
      image: 'https://images.pexels.com/photos/18646032/pexels-photo-18646032/free-photo-of-parliament-of-budapest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 2,
      username: 'Aiswarya',
      text: 'Enjoying my vacation 😎',
      timestamp: '2 hours ago',
      image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      username: 'Abinaya',
      text: 'Enjoying my vacation 😎',
      timestamp: '2 hours ago',
      image: 'https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      username: 'Dharshan',
      text: 'Enjoying my vacation 😎',
      timestamp: '2 hours ago',
      image: 'https://images.pexels.com/photos/755405/pexels-photo-755405.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setFeedPosts(initialFeedPosts);
    }, 1000);
  }, []);

  const handlePostSubmit = () => {
    if (newPostText.trim() !== '' || selectedFile) {
      const newPost = {
        id: feedPosts.length + 1,
        username: 'yourusername',
        text: newPostText,
        timestamp: 'just now',
        image: selectedFile ? URL.createObjectURL(selectedFile) : null,
      };

      setFeedPosts([newPost, ...feedPosts]);
      setNewPostText('');
      setSelectedFile(null);
    }
  };

  return (
    <div className="feed">
      <div className="post-input">
        <textarea
          placeholder="What's on your mind?"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          className="post-textarea"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="post-file-input"
        />
        <button onClick={handlePostSubmit} className="post-button">
          Post
        </button>
      </div>

      {selectedFile && (
        <div className="post-preview">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Image Preview"
            className="post-preview-image"
          />
        </div>
      )}

      {feedPosts.map((post) => (
        <div className="feed-post" key={post.id}>
          <div className="post-header">
            <div className="post-avatar">
              {/* Display user avatar */}
            </div>
            <div className="post-user-info">
              <p className="post-username">{post.username}</p>
              <p className="post-timestamp">{post.timestamp}</p>
            </div>
          </div>
          <p className="post-text">{post.text}</p>
          {post.image && (
            <img src={post.image} alt="Posted Image" className="post-image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
