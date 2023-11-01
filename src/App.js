import React, { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contributors from "./pages/Contributors";
import News from "./pages/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Robocon2023 from "./pages/Robocon2023";
import Notices from "./pages/Notices";
import Upcoming from "./pages/Upcoming"
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Blogs from "./pages/blogs";

// const steps = [
//   {
//     id: "0",
//     message: "Hi , Welcome to amuroboclub's chatbot! My name is Auro",

//     // This calls the next id
//     // i.e. id 1 in this case
//     trigger: "1",
//   },
//   {
//     id: "1",

//     // This message appears in
//     // the bot chat bubble
//     message: "What is your name ?",
//     trigger: "2",
//   },
//   {
//     id: "2",

//     // Here we want the user
//     // to enter input
//     user: true,
//     trigger: "3",
//   },
//   {
//     id: "3",
//     message: " hi {previousValue}, how can I help you?",
//     trigger: 4,
//   },
//   {
//     id: "4",
//     options: [
//       // When we need to show a number of
//       // options to choose we create alist
//       // like this
//       { value: 1, label: "View Courses" },
//       { value: 2, label: "Read Articles" },
//     ],
//     end: true,
//   },
// ];

// // Creating our own theme
// const theme = {
//   background: "#212529",
//   headerBgColor: "#212529",
//   headerFontSize: "20px",
//   botBubbleColor: "white",
//   headerFontColor: "white",
//   botFontColor: "black",
//   userBubbleColor: "lightgrey",
//   userFontColor: "black",
//   botInputColor: "white",
// };

// // Set some properties of the bot
// const config = {
//   botAvatar:
//     "https://res.cloudinary.com/dolthd0mr/image/upload/v1696886469/360_F_136499077_xp7bSQB4Dx13ktQp0OYJ5ricWXhiFtD2_bhwzjg.jpg",
//   floating: true,
// };

const App = () => {
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
        <ChatBot
          // This appears as the header
          // text for the chat bot
          headerTitle="RoboBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/robocon2023" element={<Robocon2023 />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/news" element={<News />} />
          <Route path="/upcomingprojects" element={<Upcoming />} />
         

        </Routes>
      </Router>
    </div>
  );
};

export default App;
