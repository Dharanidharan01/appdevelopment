import React, { useState, useEffect } from 'react';
import './News.css';
import './Sports.css';
const Shopping = () => {
  const [wikiLinks, setWikiLinks] = useState({});
  
  const newsData = [
    { type: 'photo', url: 'https://images.freekaamaal.com/featured_images/149158_Untitleddesign(13).png', text: 'Diwali shopping sale' },
    { type: 'photo', url: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/11/12/Pictures/china-economy-ecommerce-shopping-singles-day_85a22c32-24cc-11eb-8924-93a7f7a2e27c.jpg', text: 'China single day sales festival' },
    { type: 'photo', url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/ip6.jpeg?VersionId=9WSea3NMHJ9uelHekRZ9xY.vk1ZpL3Jh&size=690:388', text: 'iphone online shopping' },
    { type: 'photo', url: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/QDU2POZVTFJVRCQPSL6ZL6Y4CE.jpg', text: 'European stock market' },
    { type: 'photo',url :'https://www.livemint.com/lm-img/img/2023/10/01/1600x900/Sectoral_Index_change_1696146869322_1696146869610.jpg', text: 'Stock market scenerio' },
    { type: 'photo', url: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/news-crypto-strong-quarter-sixteen_nine.jpg?size=948:533', text: 'Bit coin value today' },
    { type: 'photo', url: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1699430542%2Fd7u69d9u7kwlqy8lbgxj.jpg', text: 'India international trade fair' },
    { type: 'photo', url: 'https://static.tnn.in/thumb/msid-98808155,thumbsize-32220,width-1280,height-720,resizemode-75/98808155.jpg', text: 'Tamil nadu budget 2023' },
    { type: 'photo', url: 'https://dazeinfo.com/wp-content/uploads/2016/12/retail-ecommerce-india-2016-2020-1.png', text: 'Retail e-commerce sales' },
    { type: 'photo', url: 'https://i0.wp.com/s3.ap-south-1.amazonaws.com/img.paisawapas/images/2021/07/05102414/bestonlineshoppingsitesinIndia.jpg?fit=889%2C503&ssl=1', text: 'Top shopping apps in India' },
    { type: 'photo', url: 'https://images.livemint.com/img/2022/09/27/1600x900/Reliance-Retail_1664281692285_1664281692535_1664281692535.jpg', text: 'Reliance launches centro' },
    { type: 'photo', url: 'https://i0.wp.com/www.indiaretailing.com/wp-content/uploads/2023/09/Lulu-mall-tvm.jpg?resize=696%2C422&ssl=1', text: 'Largest shopping malls in India' },
 
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

export default Shopping;