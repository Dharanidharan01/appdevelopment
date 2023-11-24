import React, { useState, useEffect } from 'react';
import './News.css';
const News = () => {
  const [wikiLinks, setWikiLinks] = useState({});
  const newsData = [
    { type: 'photo', url: 'https://www.livemint.com/lm-img/img/2023/11/16/600x338/ISRAEL-PALESTINIANS-GAZA-BORDER-3_1700116991209_1700117032349.JPG', text: 'Gaaza war' },
    { type: 'video', url: 'https://www.youtube.com/shorts/oMqsD_DHF1E', text: 'World affairs' },
    { type: 'photo', url: 'https://www.hindustantimes.com/ht-img/img/2023/11/15/550x309/Kohli_50_graphic_1700047560702_1700047565365.jpeg', text: 'King Kohli ' },
    { type: 'photo', url: 'https://www.livemint.com/lm-img/img/2023/11/15/600x338/Capture_1700036959210_1700036965278.PNG', text: 'Bus accident in J&K' },
    { type: 'video', url: 'https://youtu.be/M9thea6jgKQ?feature=shared', text: 'Al Shifa in Gaaza' },
    { type: 'photo', url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1D94/production/_131727570_tunnel.jpg.webp', text: 'Uttarkhand tunnel collapse' },
    { type: 'photo', url: 'https://www.livemint.com/lm-img/img/2023/11/15/600x338/PTI11-14-2023-000130A-0_1700022856961_1700022879832.jpg', text: 'Tamil nadu weather' },
    { type: 'photo', url: 'https://static.toiimg.com/thumb/msid-105239866,imgsize-21694,width-400,resizemode-4/105239866.jpg', text: 'Zica virus' },
    { type: 'photo', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4-chdpURAyxiys1bQaoBoxIGgx605fh76A&usqp=CAU', text: 'PM Modi Rajastan concert' },
    { type: 'photo', url: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3fc12950-1615-41e0-9d8f-4825c3777f2d.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1', text: 'Russia-Ukraine war' },
    { type: 'photo', url: 'https://www.hindustantimes.com/ht-img/img/2023/11/16/550x309/jaishankar_modi_1700126414094_1700126414358.png', text: 'India helps in oil markets' },
    { type: 'photo', url: 'https://static.toiimg.com/thumb/msid-59694143,width-1070,height-580,imgsize-551648,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', text: 'Wildlife census begins' },
 
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
                <iframe width="400"
                 height="206" 
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

export default News;