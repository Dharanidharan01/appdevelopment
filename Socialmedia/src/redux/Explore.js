// ExplorePage.js
import React from 'react';
import './Explore.css';
const ExplorePage = () => {
    // Sample data for photos with captions (replace with your data)
    const photosWithCaptions = [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 123,
          comments: 45,
          caption: 'Beautiful sunset at the beach.',
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/755405/pexels-photo-755405.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 87,
          comments: 20,
          caption: 'Exploring the great outdoors.',
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/4451423/pexels-photo-4451423.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 65,
          comments: 15,
          caption: 'City lights at night.',
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/3617633/pexels-photo-3617633.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 98,
          comments: 32,
          caption: 'Mountains and serenity.',
        },
        {
          id: 5,
          src: 'https://images.pexels.com/photos/13937503/pexels-photo-13937503.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 72,
          comments: 18,
          caption: 'Morning coffee with a view.',
        },
        {
          id: 6,
          src: 'https://images.pexels.com/photos/18444656/pexels-photo-18444656/free-photo-of-canon-ae-1-analog-photo-camera-hanging-on-a-leather-strap.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 154,
          comments: 63,
          caption: 'A walk in the park.',
        },
        {
          id: 7,
          src: 'https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 42,
          comments: 8,
          caption: 'Sunrise over the mountains.',
        },
        {
          id: 8,
          src: 'https://images.pexels.com/photos/4761376/pexels-photo-4761376.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 101,
          comments: 27,
          caption: 'Adventures in the wilderness.',
        },
        {
          id: 9,
          src: 'https://images.pexels.com/photos/13857977/pexels-photo-13857977.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 61,
          comments: 21,
          caption: 'The beauty of the forest.',
        },
        {
          id: 10,
          src: 'https://images.pexels.com/photos/14401744/pexels-photo-14401744.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 33,
          comments: 12,
          caption: 'Sunset on the lake.',
        },
        {
          id: 11,
          src: 'https://images.pexels.com/photos/13580636/pexels-photo-13580636.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 78,
          comments: 29,
          caption: 'Art in the city.',
        },
        {
          id: 12,
          src: 'https://images.pexels.com/photos/12624096/pexels-photo-12624096.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 93,
          comments: 35,
          caption: 'A day at the beach.',
        },
        {
          id: 13,
          src: 'https://images.pexels.com/photos/12601544/pexels-photo-12601544.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 59,
          comments: 17,
          caption: 'Rural tranquility.',
        },
        {
          id: 14,
          src: 'https://images.pexels.com/photos/13409660/pexels-photo-13409660.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 121,
          comments: 48,
          caption: 'Urban exploration.',
        },
        {
          id: 15,
          src: 'https://images.pexels.com/photos/2799834/pexels-photo-2799834.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 68,
          comments: 24,
          caption: 'Countryside serenity.',
        },
        {
          id: 16,
          src: 'https://images.pexels.com/photos/11048540/pexels-photo-11048540.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 112,
          comments: 37,
          caption: 'Hiking in the mountains.',
        },
        {
          id: 17,
          src: 'https://images.pexels.com/photos/12725055/pexels-photo-12725055.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 55,
          comments: 14,
          caption: 'The joy of travel.',
        },
        {
          id: 18,
          src: 'https://images.pexels.com/photos/16304368/pexels-photo-16304368/free-photo-of-nike-off-white-jordan-1-university-blue.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 46,
          comments: 11,
          caption: 'Sunset on the coast.',
        },
        {
          id: 19,
          src: 'https://images.pexels.com/photos/4477169/pexels-photo-4477169.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 87,
          comments: 26,
          caption: 'Rooftop views of the city.',
        },
        {
          id: 20,
          src: 'https://images.pexels.com/photos/5978371/pexels-photo-5978371.jpeg?auto=compress&cs=tinysrgb&w=600',
          likes: 69,
          comments: 19,
          caption: 'Adventures in the wilderness.',
        },
      ];
      
  
      return (
        <div className="explore-page">
          <div className="explore-header">
            <h1>Explore</h1>
            {/* Add professional features like filters, search, etc. here */}
          </div>
    
          <div className="photo-grid">
            {photosWithCaptions.map((photo) => (
              <div className="photo-card" key={photo.id}>
                <img src={photo.src} alt={`Photo ${photo.id}`} />
                <div className="photo-caption">{photo.caption}</div>
                <div className="photo-stats">
                  <div className="likes">
                    <i className="fas fa-heart"></i> {photo.likes} Likes
                  </div>
                  <div className="comments">
                    <i className="fas fa-comment"></i> {photo.comments} Comments
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default ExplorePage;