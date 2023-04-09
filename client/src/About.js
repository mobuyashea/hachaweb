import React from "react";
import Slidershow from "./Slidershow";

const About = () => {
  return (
    <section className="wapper">
      <section className="wapper-content">
        <div className="noRow">
          <h1 className="title">關於我們ABOUT</h1>
          <ul className="tags">
            <li>#呷飯</li>
            <li> #泡茶</li>
            <li>#喝咖啡</li>
            <li>#卡拉ok</li>
            <li> #彰化在地古早味美食</li>
          </ul>
        </div>
        <p className="mainDes">
          在繁忙的都市生活中，我們提供一個悠閒、輕鬆的休閒場所，讓大家可以享受美食、音樂和歡笑。
          老闆與老闆娘本著這樣的心情，開始經營哈茶讚。這是一間卡拉OK餐廳，呷飯、泡茶、喝咖啡一應具全。
          我們供應美味的台式熱炒家常菜、炸物、飲品，讓您歡唱不餓肚子，聚餐不無聊，
          歡迎邀請家人、朋友一同聚餐、聊天、唱歌。此處環境清幽，讓您可以遠離市區的喧囂，放慢腳步，享受悠閒的時光。
        </p>
      </section>
      <Slidershow />
    </section>
  );
};

export default About;
