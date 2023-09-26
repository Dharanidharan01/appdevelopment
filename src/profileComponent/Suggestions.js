import React from 'react';
import './Suggestions.css';

const Suggestions = () => {
  const users = [
    { id: 1, username: 'deepak', image: 'https://cdn.inflact.com/media/266672197_296205429086460_5562778889071328334_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F266672197_296205429086460_5562778889071328334_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.frba4-3.fna.fbcdn.net%26_nc_cat%3D100%26_nc_ohc%3DYHepzxABUgcAX-S1_d0%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDyOdOkkw8CzmS7jtMWkjf6zlt3shPrrJMofXd1VdkLPA%26oe%3D65154A8F%26_nc_sid%3D8b3546&time=1695574800&key=8ab52b202860bc9cc60f8bb7a3341542' },
    { id: 2, username: 'dharshan', image: 'https://cdn.inflact.com/media/279559280_680380319843633_3490938042267707803_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F279559280_680380319843633_3490938042267707803_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.flca1-1.fna.fbcdn.net%26_nc_cat%3D105%26_nc_ohc%3DlwxJlVDdYawAX_pJOCm%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfA8wDrZpH3WgKaCvMyntldVv35LKaFInKEpureTzJ7-QQ%26oe%3D65163DAF%26_nc_sid%3D8b3546&time=1695574800&key=dfaf0ed3e51147b03aa8d85c1b041fde' },
    { id: 3, username: 'aiswarya', image: 'https://cdn.inflact.com/media/372964667_1458815364964989_2157070479641601162_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F372964667_1458815364964989_2157070479641601162_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fblj1-2.fna.fbcdn.net%26_nc_cat%3D109%26_nc_ohc%3DbeAn5En-5FYAX8raIiq%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDIRnZ7remMuvEY-wq4oE7NSD66cE3idKcBsMuPjgTYyQ%26oe%3D65147C49%26_nc_sid%3D8b3546&time=1695574800&key=a28467ab3b2b96140793e25a467965be' },
    { id: 4, username: 'abirami', image: 'https://cdn.inflact.com/media/372536449_843979970524397_832213429669037840_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F372536449_843979970524397_832213429669037840_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fcai20-4.fna.fbcdn.net%26_nc_cat%3D105%26_nc_ohc%3DsNwY2k2gafUAX-qY1u0%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfCLAFsiEhyXK0YncFGub53csR6cq-avwHZvLvYUYnjahg%26oe%3D6515406F%26_nc_sid%3D8b3546&time=1695574800&key=8e132ad7e9fd4d719059a07b7beee946' },
    { id: 5, username: 'abinaya', image: 'https://cdn-s2.toolzu.com/media/359601306_1299376934335763_2188714729269273189_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F359601306_1299376934335763_2188714729269273189_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dscontent-cdg4-3.cdninstagram.com%26_nc_cat%3D111%26_nc_ohc%3Dm9Aj9tuCRccAX-pbSFK%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfAIwis_gPTs-KDiXQA850EmO6X1Zx-ewIOrmCuP1K9ekw%26oe%3D65165043%26_nc_sid%3D8b3546&time=1695574800&key=d3fb9c0c717f7373df6bfa3573fc23cf' },
    { id: 6, username: 'dhiyanesh', image: 'https://cdn-s2.toolzu.com/media/294447584_625427481971975_3464074563304062011_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F294447584_625427481971975_3464074563304062011_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fhyd4-1.fna.fbcdn.net%26_nc_cat%3D111%26_nc_ohc%3DuWkHN1V9-LgAX-p-3Tc%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfCb8fH69fQH3gi52ZgX20dP7LVSqXiUQAri7GNpgVRSlA%26oe%3D65165066%26_nc_sid%3D8b3546&time=1695574800&key=8862a43a9407e80c0fd6f768817a8794' },
    { id: 7, username: 'gautham', image: 'https://cdn-s2.toolzu.com/media/367007136_2398186313717983_7023478944569504882_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F367007136_2398186313717983_7023478944569504882_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.feoh3-1.fna.fbcdn.net%26_nc_cat%3D107%26_nc_ohc%3Ds8ea6rLyQH4AX_PJAiM%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfBU8mnYJnfaHb-4DrIxAJhswcX6gbWeYdVs1XxWo0jXtg%26oe%3D65157BFA%26_nc_sid%3D8b3546&time=1695574800&key=668ba13c3e2f286ceaadd95395371568' },
    { id: 8, username: 'abisu', image: 'https://cdn-s2.toolzu.com/media/334016187_759705279111086_1615210360712553568_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F334016187_759705279111086_1615210360712553568_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fjed5-2.fna.fbcdn.net%26_nc_cat%3D102%26_nc_ohc%3DWcOnj2_rzVEAX8QBe2f%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDFyfdwKOlfgb7aBlpm3MuqW2Y83Q9N1nzI0fy0Jy4mcw%26oe%3D6515506C%26_nc_sid%3D8b3546&time=1695574800&key=9d3897d91e62bf46ea818b0c617168b3' },
    { id: 9, username: 'adi', image: 'https://scontent.cdninstagram.com/v/t51.2885-19/376918983_617026723922186_4697194685656136241_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fh91gsnKHVEAX-9dobQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAB1PiCHbTv_gA7LP9pq4ItgxdmK05xmqdzmfosOR49_w&oe=65148140' },
    { id: 10, username: 'guhan', image: 'https://scontent.cdninstagram.com/v/t51.2885-19/306933206_2405883109620803_3077962577972349475_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=0n_VVjpSIVoAX9psWKE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD_gWL8jRbXBRNF3ALjHDVn-VjOabG-_ROb8WLovCo8Qw&oe=65148852' },
    { id: 11, username: 'jashwanth', image: 'https://scontent.cdninstagram.com/v/t51.2885-19/343613430_247682371129592_7031601885861677204_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=rSEUoMhYtcYAX_Ftl7U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDrHDaP-BB-hzMJ72FvWSHN09ukVoAPu2MzHqPPS9Qj_Q&oe=6514926B' },
  ];

  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <ul className="suggestions-list">
        {users.map((user) => (
          <li key={user.id}>
            <div className="suggestion-item">
              <img src={user.image} alt={user.username} className="profile-image" />
              <span className="user-name">@{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
