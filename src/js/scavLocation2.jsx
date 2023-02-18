import React from "react";
import MainQuad from "./scavPics/quad.jpeg";
import Statues from "./scavPics/statues.jpeg";
import Cantor from "./scavPics/cantor.jpeg";
import GreenFountain from "./scavPics/greenfountain.jpeg";
import Hoover from "./scavPics/hoover.jpeg";
import LakeLag from "./scavPics/lakelag.webp";
import Clark from "./scavPics/clark.jpeg";
import Claw from "./scavPics/claw.jpeg";
import Gates from "./scavPics/gates.jpeg";
import Hello from "./scavPics/hello.jpeg";
import Oval from "./scavPics/oval.jpeg";
import Tressider from "./scavPics/tress.jpeg";
import Huang from "./scavPics/huang.jpeg";
import { Textfit } from "react-textfit";

class RoomStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      locationData: null,
    };
  }

  render() {
    const validLocations2 = [
      "route2Start",
      "lj47b",
      "rwez3",
      "o9lwg",
      "lwwer",
      "2csgz",
      "99j53",
    ];

    const route2Data = {
      route2Start: {
        currentLoc: "Huang Engineering Center",
        img: Huang,
        description:
          "Welcome to Stanford, you are now at the Huang Engineering Center. Jen-Hsun Huang is the Founder and CEO of NVIDIA, a company that designs graphics processing units (GPUs) for the gaming and professional markets.   ",
        clue: "ya like jazz?",
        nextLoc: "37.4242, -122.1714", //main quad
      },
      lj47b: {
        currentLoc: "Tressider (back patio area)",
        img: Tressider,
        description:
          "Trivia nights! Jazz performances! Comedy routines! Throw in a few thousand cardboard boxes from the package center and you’ve got Tressider: the student union and a hub for meetings and socializing.",
        clue: "the site of the Berkeley bear’s murder...",
        nextLoc: "37.4249, -122.1694", //statues
      },
      rwez3: {
        currentLoc: "White Memorial Fountain (The Claw)",
        img: Claw,
        description:
          "Stanford, as you may have heard, has some funky traditions. Fountain hopping might be the best of them. Fountains across campus are chlorinated and prepared for the enjoyment and de-stressing of students. Affectionately dubbed “The Claw” by students, this fountain is centered in White Plaza and is perhaps the most famous of Stanford’s many fountains.        ",
        clue: "dessert as a reward for yet another year of being the best school in the world :)",
        nextLoc: "37.4252, -122.1676", //cantor
      },
      o9lwg: {
        currentLoc: "Hello by Xu Zhen (Churro)",
        img: Hello,
        description:
          "At Stanford, we love coming up with names for everything (remember the claw?). This sculpture, though, is new – and its common name is as yet undecided. Some students call it the churro; do you think that fits? Also in front of you is Green library, the intellectual center of campus, and coupa cafe, the coffee-date center of campus.",
        clue: "how do you feel about circles? What if they’re a little longer…",
        nextLoc: "37.4297, -122.1695", //cantor
      },
      lwwer: {
        currentLoc: "The Oval",
        img: Oval,
        description:
          "Welcome to Stanford’s iconic entrance: a palm-lined drive leading to “the oval” – an expansive field with a Stanford “S” written in flowers in the center. This contemplative spot fills up on sunny afternoons with students working, picnicking, frisbeeing, and just generally soaking up the rays",
        clue: "the mitochondria is the powerhouse of the cell…        ",
        nextLoc: "37.4319, -122.1742", //hoocver
      },
      "2csgz": {
        img: Clark,
        currentLoc: "Clark Center",
        description:
          "Fun fact: nobody has ever been inside this building. That might be an overstatement, but it’s definitely not a total lie. The fashionable Clark Center is home to the Bio-X program, one of Stanford’s famous interdisciplinary projects that brings together biology and medicine under one collaborative roof.        ",
        clue: "this guy started a company or something…        ",
        nextLoc: "37.4299, -122.1734", //lake lag
      },
      "99j53": {
        currentLoc: "Gates",
        img: Gates,
        clue: "Congratulations—you’ve just finished our scavenger hunt! Head back to Huang to claim your points.",
        descriptin:
          "Unsurprisingly, this building—donated by Bill Gates—houses Stanford’s computer science department. Around the building are exhibits installed by the Computer History Museum, and if you venture up to the fifth floor, you can even find the original 1971 Galaxy Star Wars computer game!        ",
        nextLoc: "Done!",
      },
    };
    if (!validLocations2.includes(this.props.match.params.locationID)) {
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
          {route2Data[this.props.match.params.locationID].currentLoc}
        </h2>
        <p style={{ marginTop: "20px" }}>
          {route2Data[this.props.match.params.locationID].description}
        </p>
        <p style={{ marginTop: "20px" }}>
          Clue for the next location:{" "}
          {route2Data[this.props.match.params.locationID].clue}
        </p>
        <img
          src={route2Data[this.props.match.params.locationID].img}
          style={{ width: "65%", marginTop: "10px" }}
          alt="logo"
        />

        {route2Data[this.props.match.params.locationID].nextLoc === "Done!" ? (
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
            {route2Data[this.props.match.params.locationID].nextLoc}
          </h3>
        )}
      </div>
    );
  }
}

export default RoomStatus;
