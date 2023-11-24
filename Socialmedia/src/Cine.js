import React, { useState, useEffect } from 'react';
import './News.css';
import './Sports.css';
const Cine = () => {
  const [wikiLinks, setWikiLinks] = useState({});
  
  const newsData = [
    { type: 'photo', url: 'https://www.hindustantimes.com/ht-img/img/2023/08/14/1600x900/jailer_box_office_record_1691989814157_1691989814408.jpg', text: 'Jailer movie breaks records' },
    { type: 'photo', url: 'https://images.moneycontrol.com/static-mcnews/2022/10/Ponniyin-Selvan-1.jpg?impolicy=website&width=1600&height=900', text: 'PS success rate' },
    { type: 'photo', url: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/12/thunivu-1672496161.jpg', text: 'Thunivu movie rating' },
    { type: 'photo', url: 'https://timesofindia.indiatimes.com/photo/104816083.jpeg', text: 'Japan movie is on hifh success' },
    { type: 'photo', url: 'https://img.onmanorama.com/content/dam/mm/en/entertainment/music/images/2022/2/24/thaman-c.jpg', text: 'S Thaman -Financial status' },
    { type: 'photo', url: 'https://celtalks.com/blog/wp-content/uploads/2023/10/news-post-49.jpg', text: 'Bigg boss this week elimination' },
    { type: 'photo', url: 'https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/09/trisha.gif', text: 'Trisha market rise' },
    { type: 'photo', url: 'https://static.toiimg.com/thumb/msid-100519498,width-1280,resizemode-4/100519498.jpg', text: 'Dhuruva nakshatram movie choice' },
    { type: 'photo', url: 'https://tamil.filmibeat.com/img/2023/11/screenshot25675-down-1700140191.jpg', text: 'Viduthalai movie part 2' },
    { type: 'photo', url: 'https://content.tupaki.com/en/feeds/2023/10/20/176695-loki.webp', text: 'LCU Cinematic universe' },
    { type: 'photo', url: 'https://www.ritzmagazine.in/wp-content/uploads/2021/09/Actor-Surya-appeals-to-students-to-be-bold-and-confident.jpg', text: 'Surya contribution to society' },
    { type: 'photo', url: 'https://cinereporters.com/wp-content/uploads/2023/06/mgr-sivaji.jpg', text: 'Womens hockey team' },
 
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

export default Cine;