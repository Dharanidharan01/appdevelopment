// import React from 'react';
import React, { useEffect, useState } from 'react';
import './Posts.css';

const Posts = () => {
  const postImages = [
    'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4340792/pexels-photo-4340792.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1983036/pexels-photo-1983036.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3833098/pexels-photo-3833098.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/15127741/pexels-photo-15127741/free-photo-of-close-up-of-a-camera-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7872631/pexels-photo-7872631.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7872633/pexels-photo-7872633.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const captions = [
    "Embracing the beauty of simplicity. 🌿",
    "Lost in the world of books and coffee. ☕📚",
    "Making memories one click at a time. 📷✨",
    "Sunsets are proof that no matter what happens, every day can end beautifully. 🌅",
    "Exploring new horizons and chasing dreams. 🌍✨",
    "Weekend mode: Activated! 💃🕺",
    "Life is short, buy the shoes! 👠🛍️",
    "Home is where the heart is. 🏡❤️",
    "Adventures await just around the corner. 🌄",
    "Sundays are for brunch and good company. 🍳🥂",
    "Dancing through life with a smile. 💃😊",
    "In the mood for some wanderlust. 🌎✈️",
    "Coffee and kindness to start the day. ☕💕",
    "Chasing dreams and catching flights. ✈️🌟",
    "Life is short, eat dessert first. 🍰🍦",
    "Weekend vibes: Relax, recharge, repeat. 🌟",
    "Happiness is homemade. 🏡😄",
    "Adventure is calling, and I must go. 🌄🌿",
    "Live life in full bloom. 🌸🌼",
    "Every sunset is an opportunity to reset. 🌅🙌",
  ];

  const posts = postImages.map((imageUrl, index) => ({
    id: index + 1,
    imageUrl: imageUrl,
    caption: captions[index % captions.length],
  }));   const [visiblePosts, setVisiblePosts] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalPosts = posts.length;
      const postsPerScroll = 3; 

    
      const newVisiblePosts = Math.min(
        Math.ceil((scrollY + windowHeight) / (windowHeight / postsPerScroll)),
        totalPosts
      );

      if (newVisiblePosts > visiblePosts) {
        setTimeout(() => {
          setVisiblePosts(newVisiblePosts);
        }, 5); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visiblePosts, posts]);

  return (
    <div className="posts-container">
      <h1 className="posts-heading">My Posts</h1>
      <div className="posts">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <div
            key={post.id}
            className={`post post-${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="post-image"
            />
            <p className="post-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;