import React, { useState, useEffect } from 'react';
import './News.css';
import './Sports.css';
const Sports = () => {
  const [wikiLinks, setWikiLinks] = useState({});
  
  const newsData = [
    { type: 'photo', url: 'https://resources.pulse.icc-cricket.com/photo-resources/2023/11/11/2c8a03d5-fa81-43d2-8dc7-1eb4ab52282a/16x9-Semi-finals-confirmed-thumbnail.png?width=640&height=360', text: 'WC Semi-finals' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/kane-williamson-pti-CROP.png?w=640', text: 'Kane Williamsom in WC' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/EDEN-GARDENS-PTI-CROP.png?w=640', text: 'Rain vanishes the semi-final' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/Unnati-Hooda.jpg?w=640', text: 'Unnati Hooda wins gold in badmiton' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/HOCKEY-REFEREES-CROP.png?w=640', text: 'Asian championship trophy' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/10/Vandana-Katariya-will-take-the-field-against-Japan-at-the-Asian-Champions-Trophy-on-Tuesday.-Courtesy-Hockey-India.jpg?w=640', text: 'Vnadana Katraiya in Asian trophy' },
    { type: 'photo', url: 'https://images.indianexpress.com/2021/12/Untitled-design-64-1.jpg?w=640', text: 'India beat Pakistan' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/Hockey-ACT.png?w=640', text: 'India beat japan in ACT' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/Mohammed-Shami-2.jpg?w=640', text: 'Mohammad Shami seam bowling' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/Kohli-Viv.jpg?w=640', text: 'Viv Richards about kohli' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/11/Indian-batting.jpg?w=640', text: 'Fab 5 players of India' },
    { type: 'photo', url: 'https://images.indianexpress.com/2023/10/INDIAN-WOMENS-HOCKEY-TEAM-CROP.png?w=640', text: 'Womens hockey team' },
 
  ];

  useEffect(() => {
    const fetchWikiLinks = async () => {
      const links = {};
      for (const news of newsData) {
        try {
          // Instead of querying the Wikipedia search API, link directly to a Google search for the Wikipedia page
          links[news.text] = `https://www.google.com/search?q=${encodeURIComponent(
            `${news.text} site:wikipedia.org`
          )}`;
        } catch (error) {
          console.error('Error generating Google search link:', error);
        }
      }
      setWikiLinks(links);
    };

    fetchWikiLinks();
  }, [newsData]);

  const chunkedNewsData = [];
  for (let i = 0; i < newsData.length; i += 4) {
    chunkedNewsData.push(newsData.slice(i, i + 4));
  }

  return (
    <div className="news-grid">
      {chunkedNewsData.map((row, rowIndex) => (
        <div key={rowIndex} className="news-row">
          {row.map((news, colIndex) => (
            <div key={colIndex} className="news-box">
              {news.type === 'photo' ? (
                <img src={news.url} alt={`Photo ${colIndex + 1}`} />
              ) : (
                <iframe width=""
                 height="158" 
                 src="https://www.youtube.com/embed/C_ZCd3_dBCE?si=PehY9aeVsMunmj7q" 
                 title="YouTube video player"
                  frameborder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   allowfullscreen></iframe>
                   
              )}
               <p>
                <a href={wikiLinks[news.text]} target="_blank" rel="noopener noreferrer">
                  {news.text}
                </a>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sports;