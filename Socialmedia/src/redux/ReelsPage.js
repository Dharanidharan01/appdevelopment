import React, { useState, useEffect, useRef } from 'react';
import './ReelsPage.css';

const reelsData = [
  {
    id: 1,
    videoSrc: 'assets/video1.mp4',
    likes: 100,
  },
  {
    id: 2,
    videoSrc: 'assets/video2.mp4',
    likes: 75,
  },
  {
    id: 3,
    videoSrc: 'assets/video3.mp4',
    likes: 120,
  },
  {
    id: 4,
    videoSrc: 'assets/video4.mp4',
    likes: 90,
  },
  {
    id: 5,
    videoSrc: 'assets/video5.mp4',
    likes: 110,
  },
];

const ReelsPage = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [currentLikes, setCurrentLikes] = useState(reelsData[currentReelIndex].likes);

  const videoRef = useRef(null);

  useEffect(() => {
    // Simulate fetching comments from an API or database
    setTimeout(() => {
      setComments([
        { id: 1, text: 'This is amazing!', user: 'user1' },
        { id: 2, text: 'Great content!', user: 'user2' },
        { id: 3, text: 'Love it!', user: 'user3' },
      ]);
    }, 1000);
  }, [currentReelIndex]);

  const handleLike = () => {
    // Logic to handle liking a Reel
    setCurrentLikes(currentLikes + 1);
  };

  const handleComment = () => {
    if (newComment.trim() !== '') {
      // Simulate adding a new comment
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        user: 'user4', // Assume the current user is user4
      };

      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  const handleShare = () => {
    // Logic to share the Reel
  };

  const handleVideoEnd = () => {
    if (currentReelIndex < reelsData.length - 1) {
      setCurrentReelIndex(currentReelIndex + 1);
      setCurrentLikes(reelsData[currentReelIndex + 1].likes);
    }
  };

  return (
    <div className="reels-container">
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        controls
        src={reelsData[currentReelIndex].videoSrc}
      ></video>
      <div className="actions">
        <button className="like-button" onClick={handleLike}>
          Like ({currentLikes})
        </button>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="comment-button" onClick={handleComment}>
          Comment
        </button>
        <button className="share-button" onClick={handleShare}>
          Share
        </button>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <span className="user">{comment.user}:</span>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;
