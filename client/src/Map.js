import React from "react";

const Map = () => {
  return (
    <div className="mapBlock">
      <ul>
        <li>
          <span style={{fontSize:"bold", color:"#759078",display:"inline"}}>營業時間：</span><p><span>星期一公休</span><span>周二到周六16:30-22:00</span><span>週日16:30-23:00</span></p>
        </li>
        <li><span style={{fontSize:"bold", color:"#759078"}}>電話：</span><a href="tel:+88647389719">04-7389719 （連假期間歡迎來電預約）</a></li>
      </ul>
      
      <h2 className="title"><i class="fa-solid fa-map-location-dot"></i> Google Map導航</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.5314396503795!2d120.58532131498697!3d24.047582984443736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469387e08a943e5%3A0x702d9447ea914710!2z5ZOI6Iy26K6a!5e0!3m2!1szh-TW!2stw!4v1680460181573!5m2!1szh-TW!2stw"
        width="500"
        height="350"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
