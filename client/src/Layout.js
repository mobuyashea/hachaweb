import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img className="logoIMG" src="img/hacha_logo.webp" alt="logo" />
        </Link>
        <nav>
          <ul className="mainMenu">
            <li>
              <Link to="/about">關於哈茶讚</Link>
            </li>
            <li>
              <Link to="/menu">所有產品</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <div>©2023 哈茶讚</div>
        <ul>
          <li>
            <a href="tel:+88647389719">
              <i class="fa-solid fa-phone"></i> 04-7389719
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/ixqvoiqrD7AzuSGM8" target="_blank">
              <i class="fa-solid fa-location-dot"></i> 彰化縣彰化市大彰路20號
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063732890876"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i> Facebook
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
