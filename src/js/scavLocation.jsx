import React from "react";
import MainQuad from "./scavPics/quad.jpeg";
import Statues from "./scavPics/statues.jpeg";
import Cantor from "./scavPics/cantor.jpeg";
import GreenFountain from "./scavPics/greenfountain.jpeg";
import Hoover from "./scavPics/hoover.jpeg";
import LakeLag from "./scavPics/lakelag.webp";
import Huang from "./scavPics/huang.jpeg";
import { Textfit } from "react-textfit";

class RoomStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  render() {
    console.log(this.props.match.params.locationID);

    const validLocations1 = [
      "route1Start",
      "rw83j",
      "cdkrp",
      "373p9",
      "9f1jb",
      "8ei5o",
      "8fsga",
    ];

    const route1Data = {
      route1Start: {
        currentLoc: "Huang Engineering Center",
        img: Huang,
        description:
          "Welcome to Stanford, you are now at the Huang Engineering Center. Jen-Hsun Huang is the Founder and CEO of NVIDIA, a company that designs graphics processing units (GPUs) for the gaming and professional markets.   ",
        nextLoc: "37.4274, -122.1703", //main quad
      },
      rw83j: {
        currentLoc: "Main Quad",
        img: MainQuad,
        description:
          "Welcome to the iconic view of Stanford. Imported Palm trees frame a view of Memorial Church, the non-denominational center of campus replete with stained glass and frescoes. Surrounding this, the oldest part of campus, are buildings that house many of the humanities classes.        ",
        nextLoc: "37.4285, -122.1699", //statues
      },
      cdkrp: {
        currentLoc: "Statues",
        img: Statues,
        description:
          "Have you heard of Rodin? Perhaps you’ve heard of his most famous work, the thinker. Rodin sculptures appear at several places on campus, including here, with a direct sightline to Stanford’s iconic entrance: a palm-lined drive leading to “the oval” – an expansive field with a Stanford “S” written in flowers in the center.        ",
        nextLoc: "37.4329, -122.1702", //cantor
      },
      "373p9": {
        currentLoc: "Cantor",
        img: Cantor,
        description:
          "Yo! Art is of paramount importance at Stanford – if the beauty of campus hasn’t convinced you, this next location certainly will. With the largest collection of Rodin sculptures anywhere in the world (besides Paris), come witness the cultural capital of campus ",
        nextLoc: "37.4271, -122.1684", //cantor
      },
      "9f1jb": {
        currentLoc: "Green Fountain",
        img: GreenFountain,
        description:
          "Stanford, as you may have heard, has some funky traditions. Fountain hopping might be the best of them. Fountains across campus are chlorinated and prepared for the enjoyment and de-stressing of students. This historic fountain provides a view of Green Library, the intellectual hub of campus.        ",
        nextLoc: "37.4276, -122.167", //hoocver
      },
      "8ei5o": {
        img: Hoover,
        currentLoc: "Hoover Tower",
        description:
          "Rising 285 feet above campus, this structure’s first nine floors are entirely occupied by library stacks. Visible from almost all corners of Stanford’s campus, this is the monument to (arguably) Stanford’s most famous alum.        ",
        nextLoc: "37.4234, -122.1744", //lake lag
      },
      "8fsga": {
        currentLoc: "Lake Lag",
        img: LakeLag,
        description:
          "Witness one of the most improbable artifacts of 2023! This body of water is filled for the first time in more than a decade, after the historic flooding earlier this year. Brimming with natural life – and now bacterially safe for swimming – this gorgeous locale has revitalized campus.        ",
        nextLoc: "Done!",
      },
    };
    if (!validLocations1.includes(this.props.match.params.locationID)) {
      return <div style={{ marginTop: "20px" }}>invalid location</div>;
    }

    return (
      <div
        style={{
          width: "90%",
          align: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          marginTop: "20px",
          paddingBottom: "20px",
          alignContent: "center",
        }}
      >
        <h2>
          Congrats on making it to:{" "}
          {route1Data[this.props.match.params.locationID].currentLoc}
        </h2>
        <p style={{ marginTop: "20px" }}>
          {route1Data[this.props.match.params.locationID].description}
        </p>
        <img
          src={route1Data[this.props.match.params.locationID].img}
          style={{ width: "65%", marginTop: "10px" }}
          alt="logo"
        />

        {route1Data[this.props.match.params.locationID].nextLoc === "Done!" ? (
          <div>
            <h2 style={{ marginTop: "20px" }}>
              You've finished the scavenger hunt!
            </h2>
            <h3 style={{ marginTop: "20px" }}>Thanks for playing!</h3>
            <h3 style={{ marginTop: "20px" }}>
              Show this code to an organizer so they can give you points on the
              leaderboard!
            </h3>
            <p>th2023</p>
          </div>
        ) : (
          <h3 style={{ marginTop: "20px" }}>
            Coordinates of the next location:{" "}
            {route1Data[this.props.match.params.locationID].nextLoc}
          </h3>
        )}
      </div>
    );
  }
}

export default RoomStatus;
