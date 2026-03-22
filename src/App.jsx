import "./App.css";
import { useState } from "react";

import manInDarkRoomImg from "./assets/man_in_dark_house.jpg";
import manInDarkRoomPortraitImg from "./assets/man_in_dark_house_portrait.jpg";
import githubImg from "./assets/github.svg";
import openLinkImg from "./assets/open-link.svg";
import xImg from "./assets/x.svg";
import battleshipImg from "./assets/battleship.png";
import todoListImg from "./assets/todolist.png";
import weatherAppImg from "./assets/weatherApp.png";
import ticTacToeImg from "./assets/tic-tac-toe.png";
import calculatorImg from "./assets/calculator.png";
import etchASketchImg from "./assets/etch-a-sketch.png";
import rockPaperScissorsImg from "./assets/rock-paper-scissors.png";

const myWorkData = [
  {
    screenshotSrc: battleshipImg,
    screenshotAlt: "Battleship game design",
    myWorkName: "Battleship",
    repoLink: "https://github.com/PRINCE-OBOT/battleship.git",
    livePreviewLink: "https://prince-obot.github.io/battleship/",
    desc: "Players place ships on a grid and take turns attacking coordinates to sink their opponent’s fleet."
  },
  {
    screenshotSrc: todoListImg,
    screenshotAlt: "Todo list design",
    myWorkName: "Todo-list",
    repoLink: "https://github.com/PRINCE-OBOT/Todo-List.git",
    livePreviewLink: "https://prince-obot.github.io/Todo-List/",
    desc: "A productivity app that allows users to create, organize, and manage daily tasks."
  },
  {
    screenshotSrc: weatherAppImg,
    screenshotAlt: "Weather app design",
    myWorkName: "Weather App",
    repoLink: "https://github.com/PRINCE-OBOT/weather_app.git",
    livePreviewLink: "https://prince-obot.github.io/weather_app/",
    desc: "A simple weather application that displays current weather conditions."
  },
  {
    screenshotSrc: ticTacToeImg,
    screenshotAlt: "Tic tac toe design",
    myWorkName: "Tic Tac Toe",
    repoLink: "https://github.com/PRINCE-OBOT/Tic-Tac-Toe.git",
    livePreviewLink: "https://prince-obot.github.io/Tic-Tac-Toe/",
    desc: "A digital version of Tic Tac Toe where two players take turns marking a grid to achieve three in a row."
  },
  {
    screenshotSrc: calculatorImg,
    screenshotAlt: "Calculator design",
    myWorkName: "Calculator",
    repoLink: "https://github.com/PRINCE-OBOT/on-screen-calculator.git",
    livePreviewLink: "https://prince-obot.github.io/on-screen-calculator/",
    desc: "A simple calculator application for basic arithmetic operations."
  },
  {
    screenshotSrc: etchASketchImg,
    screenshotAlt: "Etch a Sketch design",
    myWorkName: "Etch A Sketch",
    repoLink: "https://github.com/PRINCE-OBOT/Etch-a-Sketch.git",
    livePreviewLink: "https://prince-obot.github.io/Etch-a-Sketch/",
    desc: "A digital version of the classic Etch A Sketch toy. Users can draw by moving a cursor across the screen."
  },
  {
    screenshotSrc: rockPaperScissorsImg,
    screenshotAlt: "Rock paper scissors design",
    myWorkName: "Rock, Paper, Scissors",
    repoLink: "https://github.com/PRINCE-OBOT/my_project.git",
    livePreviewLink: "https://prince-obot.github.io/my_project/",
    desc: "A simple interactive version of Rock Paper Scissors where the user plays against the computer."
  }
].map((work, index) => {
  work.key = index;
  return work;
});

function MyWork({
  screenshotSrc,
  screenshotAlt,
  myWorkName,
  repoLink,
  livePreviewLink,
  desc
}) {
  return (
    <div className="my_work_box">
      <div className="my_work">
        <div
          style={{
            height: "55%"
          }}
        >
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "20px 20px 0 0",
              objectFit: "cover"
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 20px 20px",
              columnGap: "20px"
            }}
          >
            <h3>{myWorkName}</h3>
            <a href={repoLink} target="_blank">
              <img src={githubImg} alt="repo" className="icon" />
            </a>
            <a href={livePreviewLink} target="_blank">
              <img src={openLinkImg} alt="live preview" className="icon" />
            </a>
          </div>
          <div>{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Picture({ landscapeImg, portraitImg, alt, className }) {
  return (
    <picture>
      <source srcSet={landscapeImg} media="(min-width: 800px)" />
      <img src={portraitImg} alt={alt} className={className} />
    </picture>
  );
}

function App() {
  return (
    <div id="container">
      <div className="profile_section_design"></div>

      <header>
        <section className="profile_section">
          <Picture
            landscapeImg={manInDarkRoomImg}
            portraitImg={manInDarkRoomPortraitImg}
            alt="Man in a dark house"
            className="profile_img"
          />
          <h1 className="profile_name">Prince Obot</h1>
        </section>

        <section className="about_me_section">
          <h2 className="about_me">About me</h2>
          <p className="about_me_desc">
            Now that you are equipped with the necessary knowledge to make your
            websites more accessible to many users, the question arises: How can
            we verify the correct implementation of a11y features? Are there any
            mistakes to be corrected, or potential improvements to be made? In
            this lesson, we will answer those questions to help push your a11y
            skills over the top. Now that you are equipped with the necessary
            knowledge to make your websites more accessible to many users, the
            question arises: How can we verify the correct implementation of
            a11y features? Are there any mistakes to be corrected, or potential
            improvements to be made? In this lesson, we will answer those
            questions to help push your a11y skills over the top.
          </p>
          <div className="social_handle_section">
            <a href="https://github.com/PRINCE-OBOT/" target="_blank">
              <img src={githubImg} alt="Github icon" className="icon" />
            </a>
            <a href="https://x.com/obot_princ7790" target="_blank">
              <img src={xImg} alt="X icon" className="icon" />
            </a>
          </div>
        </section>
      </header>

      <main>
        <div className="my_work_section">
          <h2 className="my_work_title">My Work</h2>
          <div className="my_work_wrapper">
            {myWorkData.map(
              ({
                screenshotSrc,
                screenshotAlt,
                myWorkName,
                repoLink,
                livePreviewLink,
                desc,
                key
              }) => (
                <MyWork
                  screenshotSrc={screenshotSrc}
                  screenshotAlt={screenshotAlt}
                  myWorkName={myWorkName}
                  repoLink={repoLink}
                  livePreviewLink={livePreviewLink}
                  desc={desc}
                  key={key}
                />
              )
            )}
          </div>
        </div>
      </main>
      <footer>
        <section className="footer_top_section">
          <h2>Contact me</h2>
          <p>
            Please get in touch if you think our work could be mutually
            beneficial
          </p>

          <address>
            <p>1234 Random Road</p>
            <p>Random Town, California 12345</p>
          </address>

          <div>
            <p>08145231098</p>
            <p>princessamuel@gmail.com</p>
          </div>

          <div className="social_handle_section">
            <a href="https://github.com/PRINCE-OBOT/" target="_blank">
              <img src={githubImg} alt="Github icon" className="icon" />
            </a>
            <a href="https://x.com/obot_princ7790" target="_blank">
              <img src={xImg} alt="X icon" className="icon" />
            </a>
          </div>
        </section>
        <section className="footer_bottom_section">
          <Picture
            landscapeImg={manInDarkRoomPortraitImg}
            portraitImg={manInDarkRoomPortraitImg}
            alt="Man in a dark house"
            className="footer_img"
          />
        </section>
      </footer>
    </div>
  );
}

export default App;
