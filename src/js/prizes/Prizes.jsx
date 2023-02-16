import React, { useEffect, useState } from "react";
import Bricklayer from "bricklayer";
import Logo from "../../logos/treehacks_logo.webp";
import Otsuka from "../../logos/otsuka.webp";
import Estuary from "../../logos/estuary.webp";
import Convex from "../../logos/convex.webp";
import InterSystems from "../../logos/intersystems.webp";
import OpenAI from "../../logos/OpenAI.webp";
import Modal from "../../logos/modal.webp";
import Vercel from "../../logos/vercel.webp";
import Palantir from "../../logos/palantir.webp";
import Cotopaxi from "../../logos/cotopaxi.webp";
import Citadel from "../../logos/citadel.webp";
import You from "../../logos/you.webp";
import Skydio from "../../logos/skydio.webp";
import Cadence from "../../logos/cadence.webp";
import EIS from "../../logos/EIS.webp";
import Arduino from "../../logos/arduino.webp";
import Zetachain from "../../logos/zetachain.webp";
import Phri from "../../logos/phri.webp";
import Mem from "../../logos/mem.webp";
import Cypherd from "../../logos/cypherd.webp";
import HRT from "../../logos/hrt.webp";
import Meta from "../../logos/meta.webp";
import Cisco from "../../logos/cisco.webp";
import SquareL from "../../logos/square.webp";
import Retool from "../../logos/retool.webp";
import Dolby from "../../logos/dolby.webp";
import Warp from "../../logos/warp.webp";
import Bnb from "../../logos/bnb.webp";
import Checkbook from "../../logos/checkbook.webp";
import Parrot from "../../logos/parrot.webp";
import YCombinator from "../../logos/ycombinator.webp";
import Neo from "../../logos/neo.webp";
import Pear from "../../logos/pear.webp";
import GeneralTask from "../../logos/generaltask.webp";
import Replit from "../../logos/replit.webp";
import Algolia from "../../logos/algolia.webp";
import Wolfram from "../../logos/wolfram.webp";
import Makerbot from "../../logos/makerbot.webp";
import Twilio from "../../logos/twilio.webp";
import Supabase from "../../logos/supabase.webp";
import Voiceflow from "../../logos/voiceflow.webp";
import Aptos from "../../logos/aptos.webp";
import Near from "../../logos/near.webp";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();

    const sponsorPrizeData = [
      {
        name: "Best Chat App",
        description: "The most innovative AI chat application",
        contents: "2k per team (cash)",
        company: "You.com",
        logo: You,
      },
      {
        name: "Best Use of Dolby.io",
        description:
          "Add high-quality audio & video experiences to your application using Dolby.io Real-time Communications and Streaming.",
        contents: "$1000 Cash prize (gift cards)",
        company: "Dolby.io",
        logo: Dolby,
      },
      {
        name: "Best Use of the You.com Open Platform",
        description:
          "Awarded to the team who creates the best You.com Open Platform Search app using the Developer Dashboard. Documentation and examples can be found at https://you.com/developers",
        contents: "1k per team (Cash)",
        company: "You.com",
        logo: You,
      },
      {
        name: "Best Use of OpenAI Models",
        description:
          "Awarded to the team who uses OpenAI's models to create the most innovative application.",
        contents: "$2,500 in API Credits",
        company: "OpenAI",
        logo: OpenAI,
      },
      {
        name: "Highest Frequency Award",
        description:
          "For the team that makes the best use of RF and microwave design workflows for high-frequency solutions",
        contents: "True Wireless Earbuds",
        company: "Cadence",
        logo: Cadence,
        quantity: 5,
      },
      {
        name: "Best Web Frontend",
        description:
          "For the team that sweats the details. Every pixel of the UI has been polished and intentionally crafted. This award goes to the team who can merge the design and development worlds.",
        contents: "Vercel swag box ($100 value)",
        quantity: 4,
        company: "Vercel",
        logo: Vercel,
      },
      {
        name: "Vercel Free Tier",
        description:
          "Vercel offers a 100% free tier, perfect for Hackathons, to get your React, Vue, Svelte, Nuxt, Next.js, or similar projects deployed to the Web. ",
        contents: "n/a",
        company: "Vercel",
        logo: Vercel,
      },
      {
        name: "Best Drone Hack",
        description:
          "Skydio 2+ does all the shooting so you can concentrate on the adventure at hand. Launch Skydio into the air and after just 27 minutes, you will have over 100,000 breathtaking 4K stills to choose from, export and share. And when you’re ready to take your drone photography to the next level, Skydio Panorama Skills gives you live previews of massive horizontal, vertical and spherical images in up to 72 megapixels.",
        contents: "Skydio 2+ Drone",
        company: "Skydio",
        logo: Skydio,
      },
      {
        name: "BIG IDEA: Best Technology-Enabled Patient Safety Solution",
        description:
          "We’re in search of bold new thinking. This is an invitation to solve the problem of medical error that harms millions of U.S. patients, kills approximately 250,000 patients, and costs billions of dollars every year. We’re calling on TreeHacks teams to envision the best technology-enabled patient safety solution that has the potential to avert patient harm and save lives and will be awarding $2,000 to the top team. Your hack must align with one of the following five leading patient safety challenges facing health care across the continuum of care: Medication errors, procedural/surgical errors, errors during routine patient care (e.g. pressure ulcers, blood clots, falls), infections and diagnostic safety. We encourage teams to consider autonomous tech-enabled patient safety solutions – those that are able to take action with little or no human supervision – as well. Learn more about the problem and get access to resources to help your hack here.",
        contents: "$2,000 cash to the top team",
        company: "Pateint Safety Initiative",
        logo: Phri,
      },
      {
        name: "Palantir Prize",
        description: "Best use of Palantir Foundry",
        contents: "$2,000 cash prize",
        company: "Palantir",
        logo: Palantir,
      },
      {
        name: "Best Real-World Crypto Hack",
        description:
          "Build something using technologies like Bitcoin, Ethereum, ZetaChain that provides real utility for real people.",
        contents: "Ledger Nano X",
        company: "ZetaChain",
        quantity: 4,
        logo: Zetachain,
      },
      {
        name: "Best Omnichain Smart Contract Application",
        description:
          "Build an useful application that spans multiple chains using ZetaChain’s smart contract and/or messaging!n",
        contents: "$2500 USDC",
        company: "ZetaChain",
        logo: Zetachain,
      },
      {
        name: "Most Cyberpunk Hardware Hack",
        description:
          "Our future is most definitely going to be a cyberpunk dystopia. Show us your best hack that interacts with the physical world. This could be a robotic arm controlled by A.I., a custom pentest gadget, taking control of a consumer product, or a matrix of blinking LEDs meant to distract the masses. The best physical hack takes home the prize!",
        contents:
          "Arduino Machine Vision Bundle Kits for the winning team members",
        company: "Arduino",
        quantity: 4,
        logo: Arduino,
      },
      {
        name: "Best use of Arduino Cloud/API",
        description:
          "Integrate the Arduino IoT Cloud in any way to qualify for this prize. Most interesting and creative implementation wins!",
        contents: "",
        company: "Arduino",
        logo: Arduino,
      },
      {
        name: "Best Use of Aptos",
        description:
          "This prize goes to the team that best uses Aptos to create an innovative social or gaming product / service on the blockchain or enables a better developer experience on Aptos",
        contents: "$1000",
        company: "Aptos",
        logo: Aptos,
      },
      {
        name: "Top Uses of NEAR Social (3x)",
        description:
          "This goes to the top 3 teams that implement NEAR Social the best. Whether it is indexing data from NEAR Social into your projects or directly building a widget on NEAR Social.",
        contents: "$1,000 Per team",
        company: "NEAR Protocol",
        logo: Near,
      },
      {
        name: "Replit's Choice Award",
        description:
          "This prize goes to the teams that the Replit team thinks made the coolest projects!",
        contents: {
          1: {
            name: "3,000 Cycles (~ 3 months of Hacker)",
          },
          2: {
            name: "2,000 Cycles (~ 2 months of Hacker)",
          },
          3: {
            name: "1,000 Cycles (~ 1 month of Hacker)",
          },
        },
        company: "Replit",
        logo: Replit,
      },
      {
        name: "Best Omnichain Smart Contract Application",
        description:
          "Build an useful application that spans multiple chains using ZetaChain’s smart contract and/or messaging!n",
        contents: "$2500 USDC",
        company: "ZetaChain",
        logo: Zetachain,
      },
      {
        name: "Wolfram Award",
        description:
          "Everyone on the top twelve teams with a max of 60 individuals",
        contents:
          "One year of Wolfram|One Personal Edition + one-year subscription to Wolfram|Alpha Pro ($375 per hacker)",
        company: "Wolfram",
        logo: Wolfram,
      },
      {
        name: "Best use of Supabase",
        description:
          "Award to the project that uses more Supabase features in the most creative way.",
        contents:
          "A Supabase swag pack (Black mode T-shirt, Supabase hat, cam cover, and stickers) for each member of the team.",
        company: "Supabase",
        quantity: 4,
        logo: Supabase,
      },
      {
        name: "Most Ethically Engaged Hack",
        description:
          "This prize awards the team that can best articulate the ethical tensions and potential hazards latent in their project and create innovative solutions for addressing them. Judging criteria for the prize can be found here: rb.gy/21wpus. Participants are encouraged to attend the Center for Ethics workshop on Saturday at 12:30pm to learn more. To be considered, participants must also include in their devpost submission a written narrative that explains what ethical considerations were most important when developing the project and how they were incorporated into their final product. You can see a previous winner here: https://devpost.com/software/soteria-58hg6m",
        contents: "$1000 Cash Prize",
        company: "Stanford Center for Ethics in Society",
        logo: EIS,
      },
      {
        name: "Peak Modal",
        description:
          "Best project that’s hosted on Modal, or used Modal somewhere along the line for training or data processing.",
        contents: "$1000/mo in Modal credits for the winning team for life",
        company: "Modal",
        logo: Modal,
      },
      {
        name: "Most Innovative Hack",
        description: "",
        contents: "Back pack, blankets, sweat shirts, t-shirts, beanies  ",
        company: "Meta",
        quantity: 4,
        logo: Meta,
      },
      {
        name: "Most likely to become a business",
        description:
          "Product: Build something people want. Market Size: Address a significant opportunity. Team: Founders would consider committing for long-term.",
        contents:
          "Product: Build something people want. Market Size: Address a significant opportunity. Team: Founders would consider committing for long-term.",
        company: "Neo",
        logo: Neo,
      },
      {
        name: "Best use of Data Hack",
        description:
          "Effective use of data is important to the decisions we make at Hudson River Trading, and we’re always looking for innovative new ways to strategize with data. This prize will be awarded to the hack that best integrates the use of data into their project.",
        contents: "Acesss to online HRT VIP Swag Store + $150 Amazon Gift Card",
        company: "HRT",
        quantity: 4,
        logo: HRT,
      },
      {
        name: "Best Payments Hack",
        description:
          "This prize will be awarded to the team that has the most interesting payments-based hack.",
        contents: "$500",
        company: "Checkbook.io",
        logo: Checkbook,
      },
      {
        name: "Checkbook API Best Implementation",
        description:
          "This prize will be awarded to the team that has the most interesting use-case of the Checkbook.io platform.",
        contents: "AirPod Pros",
        company: "Checkbook.io",
        logo: Checkbook,
        quantity: 4,
      },
      {
        name: "Best use of Drone Technology",
        description:
          "Parrot is the European leader in the drone industry building Nano drones (under 2 pounds). As drones continue to find applications in a wide range of verticals, such as, industrial inspections, defense, first responders and surveillance, there is a need for development of innovative and specific software mission or customize accessories relevant for different use case. we are therefore interested by what can be the drone technology of tomorrow, how such a technology would be operated and in which mission contexts.",
        contents: "Anafi AI Drone",
        company: "Parrot Drones",
        quantity: 1,
        logo: Parrot,
      },
      {
        name: "Best Startup",
        description:
          "Given to the top performing teams in Y Combinator's challenge. These are the teams that we think are most likely to succeed at a startup.",
        contents:
          "Real interview for Y Combinator (no expiration, come interview whenever you want with whoever you want) Dinner on Sunday, with YC team (if in person)",
        company: "Y Combinator",
        logo: YCombinator,
      },
      {
        name: "Dev tools",
        description: "Best developer tool",
        contents: "Xbox Series S",
        quantity: 4,
        company: "Warp",
        logo: Warp,
      },
      {
        name: "Best Hack Using Frontier Tech",
        description:
          "For hackers using cutting-edge tech like Zero Knowledge Proofs, Federated Learning, or Quantum Computing, a chance to showcase your skills!",
        contents:
          "$1,000 cash prize and upto $100,000 uncapped SAFE (more below)",
        company: "Pear VC",
        logo: Pear,
      },
      {
        name: "Cotopaxi's Choice Award",
        description:
          "The Cotopaxi team will choose a team that is working on a project closely tied to Cotopaxi's values of sustainability and extreme poverty alleviation",
        contents:
          "Cotopaxi Allpa 28L Backpack, filled with a Dopp Kit, Cotopaxi hat, and MiiR x Cotopaxi camping mug. $250 value/ea",
        company: "Cotopaxi",
        logo: Cotopaxi,
        quantity: 4,
      },
      {
        name: "Best Hack for a Real World Use Case ",
        description:
          "For hackers looking to solve any real world problems with technology. You could be helping college students get food delivery, fighting misinformation online, or increasing opportunities to equal education. There’s no shortage of problems in the world that would benefit from even the simplest technology.",
        contents:
          "$1,000 cash prize and upto $100,000 uncapped SAFE (more below)",
        company: "Pear VC",
        logo: Pear,
      },
      {
        name: "Best Hack Using AI/ML",
        description:
          "Beyond the buzzwords, we have the chance to change the way we interact with computers. We’re at the cusp of a brand new set of possibilities. For hackers looking to push the envelope here with their technical approach or application domain, this is the prize to win!",
        contents:
          "$1,000 cash prize and upto $100,000 uncapped SAFE (more below)",
        company: "Pear VC",
        logo: Pear,
      },
      {
        name: "Retool Hack Ninjas",
        description:
          "Build your hackathon project faster with the power of Retool, and get your project demo ready in no time. Retool is perfect for beginners or coding veterans alike to build your apps 10x faster than usual. We’re looking for cool apps that utilize Retool in their hack!",
        contents:
          "Ducky One 3 SF Pure White 65% Hotswap RGB Mechanical Keyboard",
        quantity: 4,
        company: "Retool",
        logo: Retool,
      },
      {
        name: "Best Use of Estuary",
        description:
          "This prize will go to the students who best demonstrate Estuary's use case and use creative ways to incorporate our API. The first place prize will be iPads and second place will be keyboards.",
        contents: {
          1: {
            name: "iPad 10th Generation",
            quantity: 4,
          },
          2: {
            name: "4 Mechanical/gaming keyboards",
            quantity: 4,
          },
        },
        company: "Warp",
        logo: Warp,
      },
      {
        name: "Best hack to connect with others through food",
        description:
          "Best hack to connect with others through food” for the improvement of the world’s wellbeing & happiness with food! The prize will be $500 DoorDash credit (treat yourself with good food) and $250 Spa experience during the busy school year (We’ll make sure to look after your wellbeing as you help others!). Also, you will get a chance to further develop the idea with Otsuka & Valuenex through an amazing summer internship.",
        contents:
          "Good life package - DoorDash gift card ($500) + Spa gift card ($250) = Total: $3000",
        company: "Otsuka <> Valuenex",
        logo: Otsuka,
      },
      {
        name: "Best VALUENEX Radar Hack",
        description:
          "Best VALUENEX Radar Hack for the best VALUENEX Radar use case to show the world! Each winning team member will be awarded a $250 Amazon gift card and an annual VALUENEX Radar subscription. ",
        contents:
          "VALUENEX package - Amazon gift card ($250) and VALUENEX Radar 1 year membership",
        company: "Otsuka <> Valuenex",
        quantity: 4,
        logo: Otsuka,
      },
      {
        name: "Best Natural Language Hack",
        description:
          "The project with the best application of natural language processing",
        contents: {
          1: {
            name: "AirPods Max ($500/each)",
            quantity: 4,
          },
          2: {
            name: "Ember Mug ($125/each)",
            quantity: 4,
          },
          3: {
            name: "Amazon Echo Dot (5th gen) ($50/ea)",
            quantity: 4,
          },
        },
        company: "Mem",
        logo: Mem,
      },
      {
        name: "Best Use of InterSystems IntegratedML",
        description:
          "InterSystems is issuing a challenge to build the most interesting and innovative application using **InterSystems IntegratedML** -- in-database automated machine learning, the simplest way to create, deploy and use ML models to power next-generation intelligent applications.\nTo qualify for the prize, your solution needs to use InterSystems IntegratedML. InterSystems will provide free access to cloud-hosted accounts* and *onsite mentors' support. You will be able to submit your project to one of the main tracks as well. https://events.intersystems.com/treehacks2023",
        contents: "1st place: $2000\n2nd place: $1500\n3rd place: $1000",
        company: "InterSystems",
        logo: InterSystems,
      },

      {
        name: "Best use of Convex",
        description:
          "This prize goes to the team that makes the best use of the Convex platform to create a novel and compelling web or mobile multi-user app. Real-time or reactive elements are a plus.",
        contents:
          "- Massive Lego: 5’ Eiffel Tower, 2 meter RC Airplane kit: E-flite DRACO 2.0m BNF Basic Electric Airplane, Arduino-based quadruped robot: Lynxmotion SQ3U, Various batteries, chargers, and accessories to finish the above projects",
        company: "Convex",
        logo: Convex,
      },
    ];

    this.state = {
      tag: null,
      searchInput: "",
      sData: sponsorPrizeData,
      constantSData: sponsorPrizeData,
    };
    this.onTagClick = this.onTagClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
    //const dataC = [{ name: "Belgium", continent: "Europe" }];
    if (e.target.value.length == 0) {
      this.setState({ sData: this.state.constantSData });
    } else if (this.state.searchInput.length > 0) {
      const filtered = this.state.constantSData.filter(
        (country) =>
          country.name.toLowerCase().includes(this.state.searchInput) ||
          country.description.toLowerCase().includes(this.state.searchInput) ||
          country.company.toLowerCase().includes(this.state.searchInput) ||
          Object.keys(country.contents)
            .map(function (item) {
              return country.contents[item].name;
            })
            .join(" ")
            .toLowerCase()
            .includes(this.state.searchInput)
      );

      this.setState({
        sData: filtered,
      });
    }
  };

  /*

  const filtered = constantProjectData.filter(
    (project) =>
      project.projectTitle?.includes(search) ||
      project.projectDescription?.includes(search) ||
      project.builders?.includes(search) ||
      project.submitFirstName?.includes(search) ||
      project.submitLastName?.includes(search)
  );*/

  componentDidMount() {
    this.bricklayer = new Bricklayer(this.myRef.current);
    this.bricklayer2 = new Bricklayer(this.myRef2.current);
  }
  onTagClick(tag) {
    this.bricklayer.destroy();
    this.bricklayer2.destroy();

    if (tag == this.state.tag) {
      this.setState({ tag: null }, () => {
        this.bricklayer = new Bricklayer(this.myRef.current);
        this.bricklayer2 = new Bricklayer(this.myRef2.current);
      });
    } else {
      this.setState({ tag: tag }, () => {
        this.bricklayer = new Bricklayer(this.myRef.current);
        this.bricklayer2 = new Bricklayer(this.myRef2.current);
      });
    }
  }

  render() {
    const grandPrizeData = [
      {
        name: "Moonshot Prize",
        description: "The craziest, most out-of-this-world project",
        contents: "Segway - G30Max Electric Kick Scooter",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Most Technically Complex Hack",
        description: "The project built using the most technical skills",
        contents: "Mac Minis",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Most Creative Hack",
        description: "The project with the most innovative idea and deployment",
        contents: "Sonos Roam",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Best Hardware Hack",
        description: "Best hack that incorporates hardware",
        contents: "Monoprice Maker Select 3D Printer v2",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Most Impactful Hack",
        description: "The largest social impact project",
        contents: "Apple TV Wi-FI + Ethernet (128 GB)",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Best Beginner Hack",
        description:
          "Best hack made by a majority-beginner team. Beginners are hackers for whom TreeHacks is their first hackathon.",
        contents: "Audio Technica MX50 Headphones",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Overall Leaderboard Winner",
        description: "Most points tallied on our leaderboard system",
        logo: Logo,
        contents: "TreeHacks Engraved AirPods (3rd generation)",
        quantity: 1,
      },
    ];

    const trackPrizeData = [
      {
        name: "Healthcare Grand Prize",
        description: "Best healthcare project",
        logo: Logo,
        contents: "Apple Watch SE",
        quantity: 4,
      },
      {
        name: "Sustainbility Grand Prize",
        description: "Best sustainability project",
        logo: Logo,
        contents: "Apeman M4 DLP Projector 1080P",
        quantity: 4,
      },
      {
        name: "New Frontiers Grand Prize",
        logo: Logo,
        description: "Best project incorporating cutting edge tech",
        contents: "Quest 2",
        quantity: 4,
      },
      {
        name: "Web 3.0 and Fintech Grand Prize",
        description: "Best Web 3.0 project",
        logo: Logo,
        contents: "Airline $250 Gift Card to go to a crypto conference!",
        quantity: 4,
      },
      {
        name: "Education Grand Prize",
        description: "Best education project",
        contents: "Nintendo Switch",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Privacy and Safety Grand Prize",
        description: "Best Privacy and Safety project",
        contents: "Mark VII + AC Tacitcal Wifi Pineapples",
        logo: Logo,
        quantity: 4,
      },
    ];

    return (
      <div>
        <div
          style={{ backgroundColor: "#151729", paddingTop: "0px" }}
          className="prizes"
        >
          {/*  <div className="row">
            <h1
              className="api-title"
              style={{ marginTop: "0px", paddingTop: "20px", color: "white" }}
            >
              Prizes
            </h1>
          </div>
          <div className="row" style={{ color: "white" }}>
            Check out all the cool prizes you can compete for!
          </div> */}

          <h1
            className="api-title"
            style={{ marginTop: "0px", paddingTop: "20px", color: "white" }}
          >
            Grand Prizes
          </h1>

          <div className="bricklayer" ref={this.myRef}>
            {grandPrizeData.map((col) => {
              return (
                <div className="api-item-container">
                  <div
                    className="card api-item"
                    style={{
                      backgroundImage: "linear-gradient(90deg, black, #105E54)",
                      color: "white",
                    }}
                  >
                    <h3>{col.name}</h3>
                    <p>{col.description}</p>
                    <p style={{ color: "white", fontWeight: "bold" }}>
                      {col.quantity && col.quantity + "x"} {col.contents}
                    </p>
                    <h3 style={{ color: "white", marginTop: "10px" }}>
                      Sponsored by
                    </h3>
                    <img
                      src={col.logo}
                      className="resource-6"
                      style={{
                        backgroundColor: "white",
                        marginTop: "10px",
                        borderRadius: "20px",
                        padding: "20px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          class="trackPrizes"
          style={{ backgroundColor: "#151729", paddingTop: "40px" }}
        >
          <h1
            className="api-title"
            style={{ marginTop: "0px", paddingTop: "20px", color: "white" }}
          >
            Track Prizes
          </h1>

          <div className="bricklayer" ref={this.myRef2}>
            {trackPrizeData.map((col) => {
              return (
                <div className="api-item-container">
                  <div
                    className="card api-item"
                    style={{
                      backgroundImage: "linear-gradient(90deg, black, #8174b4)",
                      color: "white",
                      border: "1px solid #8174b4",
                    }}
                  >
                    <h3>{col.name}</h3>
                    <p>{col.description}</p>
                    <p style={{ color: "white" }}>
                      {col.quantity && col.quantity + "x"} {col.contents}
                    </p>
                    <h3 style={{ color: "white", marginTop: "10px" }}>
                      Sponsored by
                    </h3>
                    <img
                      src={col.logo}
                      className="resource-6"
                      style={{
                        backgroundColor: "white",
                        marginTop: "10px",
                        borderRadius: "20px",
                        padding: "20px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          class="sponsorPrizes"
          style={{ backgroundColor: "#151729", paddingTop: "40px" }}
        >
          <h1
            className="api-title"
            style={{ marginTop: "0px", paddingTop: "20px", color: "white" }}
          >
            Sponsor Prizes
          </h1>

          <input
            type="text"
            placeholder="Search by company, description, prize"
            style={{
              width: "80%",
              borderRadius: "20px",
              color: "white",
              fontSize: "20px",
              backgroundColor: "transparent",
              border: "1px solid white",
              padding: "10px 15px",
              fontFamily: "Avenir",
              margin: "20px 0",
            }}
            id="searchInput"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {this.state.sData.length > 0 &&
                this.state.sData.map((col) => {
                  return (
                    <div className="api-item-container">
                      <div
                        className="card api-item sponsor"
                        style={{
                          color: "white",
                          border: "1px solid #0089B6",
                          paddingBottom: "0px",
                        }}
                      >
                        <h3>{col.name}</h3>
                        <p>{col.description}</p>
                        <br />
                        <p style={{ color: "white" }}>Winners get: </p>

                        {typeof col.contents == "object" ? (
                          <div>
                            {Object.keys(col.contents).map((item) => {
                              return (
                                <p style={{ color: "white" }}>
                                  {item == 1
                                    ? "1st Place: "
                                    : item == 2
                                    ? "2nd Place: "
                                    : item == 3
                                    ? "3rd Place: "
                                    : ""}
                                  {col.contents[item].quantity &&
                                    col.contents[item].quantity + "x"}{" "}
                                  {col.contents[item].name}
                                </p>
                              );
                            })}
                          </div>
                        ) : (
                          <p style={{ color: "white" }}>
                            {col.quantity && col.quantity + "x"} {col.contents}
                          </p>
                        )}

                        <h3 style={{ color: "white" }}>
                          Sponsored by {col.company}
                        </h3>
                        <img
                          src={col.logo}
                          className="resource-6"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "10px",
                            scale: "0.7",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              {this.state.sData.length == 0 && (
                <div>
                  <h1 style={{ color: "white", paddingBottom: "30px" }}>
                    No results found
                  </h1>
                </div>
              )}
            </Masonry>
          </ResponsiveMasonry>
          <div></div>
        </div>
      </div>
    );
  }
}
