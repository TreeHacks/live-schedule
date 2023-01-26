import React, { useEffect, useState } from "react";
import Bricklayer from "bricklayer";
import data from "./data.yaml";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();

    this.state = {
      tag: null,
      searchInput: "",
      companyData: data.companies,
    };
    this.onTagClick = this.onTagClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
    //const dataC = [{ name: "Belgium", continent: "Europe" }];
    if (this.state.searchInput.length > 0) {
      const filtered = this.state.companyData.filter(
        (country) =>
          country.apis[0].title
            .toLowerCase()
            .includes(this.state.searchInput) ||
          country.apis[0].description
            .toLowerCase()
            .includes(this.state.searchInput)
      );
      this.setState({ companyData: filtered });
      console.log(filtered);
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
    this.bricklayer3 = new Bricklayer(this.myRef3.current);
  }
  onTagClick(tag) {
    this.bricklayer.destroy();
    this.bricklayer2.destroy();
    this.bricklayer3.destroy();

    if (tag == this.state.tag) {
      this.setState({ tag: null }, () => {
        this.bricklayer = new Bricklayer(this.myRef.current);
        this.bricklayer2 = new Bricklayer(this.myRef2.current);
        this.bricklayer3 = new Bricklayer(this.myRef3.current);
      });
    } else {
      this.setState({ tag: tag }, () => {
        this.bricklayer = new Bricklayer(this.myRef.current);
        this.bricklayer2 = new Bricklayer(this.myRef2.current);
        this.bricklayer3 = new Bricklayer(this.myRef3.current);
      });
    }
  }

  render() {
    const grandPrizeData = [
      {
        name: "Moonshot Prize",
        description: "The craziest, most out-of-this-world project",
        contents: "Segway - G30Max Electric Kick Scooter",
        quantity: 4,
      },
      {
        name: "Most Technically Complex Hack",
        description: "The project built using the most technical skills",
        contents: "Mac Minis",
        quantity: 4,
      },
      {
        name: "Most Creative Hack",
        description: "The project with the most innovative idea and deployment",
        contents: "Sonos Roam",
        quantity: 4,
      },
      {
        name: "Best Hardware Hack",
        description: "Best hack that incorporates hardware",
        contents: "Monoprice Maker Select 3D Printer v2",
        quantity: 4,
      },
      {
        name: "Most Impactful Hack",
        description: "The largest social impact project",
        contents: "Apple TV Wi-FI + Ethernet (128 GB)",
        quantity: 4,
      },
      {
        name: "Best Beginner Hack",
        description:
          "Best hack made by a majority-beginner team. Beginners are hackers for whom TreeHacks is their first hackathon.",
        contents: "Audio Technica MX50 Headphones",
        quantity: 4,
      },
      {
        name: "Overall Leaderboard Winner",
        description: "Most points tallied on our leaderboard system",
        contents: "TreeHacks Engraved AirPods (3rd generation)",
      },
    ];

    const trackPrizeData = [
      {
        name: "Healthcare Grand Prize",
        description: "Best healthcare project",
        contents: "Apple Watch SE",
        quantity: 4,
      },
      {
        name: "Sustainbility Grand Prize",
        description: "Best sustainability project",
        contents: "Apeman M4 DLP Projector 1080P",
        quantity: 4,
      },
      {
        name: "New Frontiers Grand Prize",
        description: "Best project incorporating cutting edge tech",
        contents: "Quest 2",
        quantity: 4,
      },
      {
        name: "Web 3.0 and Fintech Grand Prize",
        description: "Best Web 3.0 project",
        contents: "Airline Gift Card to go to a crypto conference!",
        quantity: 4,
      },
      {
        name: "Education Grand Prize",
        description: "Best education project",
        contents: "Nintendo Switch",
        quantity: 4,
      },
      {
        name: "Privacy and Safety Grand Prize",
        description: "Best Privacy and Safety project",
        contents: "Mark VII + AC Tacitcal Wifi Pineapples",
        quantity: 4,
      },
    ];

    const sponsorPrizeData = [
      {
        name: "Best Chat App",
        description: "The most innovative AI chat application",
        contents: "",
        company: "You.com",
      },
      {
        name: "Best Use of the You.com Open Platform",
        description:
          "Awarded to the team who creates the best You.com Open Platform Search app using the Developer Dashboard. Documentation and examples can be found at https://you.com/developers",
        contents: "",
        company: "You.com",
      },
      {
        name: "Best Web Frontend",
        description:
          "For the team that sweats the details. Every pixel of the UI has been polished and intentionally crafted. This award goes to the team who can merge the design and development worlds.",
        contents: "Vercel swag box ($100 value)",
        company: "Vercel",
      },
      {
        name: "Vercel Free Tier",
        description:
          "Vercel offers a 100% free tier, perfect for Hackathons, to get your React, Vue, Svelte, Nuxt, Next.js, or similar projects deployed to the Web. ",
        contents: "",
        company: "Vercel",
      },
      {
        name: "Skydio 2+",
        description:
          "Skydio 2+ does all the shooting so you can concentrate on the adventure at hand. Launch Skydio into the air and after just 27 minutes, you will have over 100,000 breathtaking 4K stills to choose from, export and share. And when you’re ready to take your drone photography to the next level, Skydio Panorama Skills gives you live previews of massive horizontal, vertical and spherical images in up to 72 megapixels.",
        contents: "",
        company: "Skydio",
      },
      {
        name: "BIG IDEA: Best Technology-Enabled Patient Safety Solution",
        description:
          "We’re in search of bold new thinking. This is an invitation to solve the problem of medical error that harms millions of U.S. patients, kills approximately 250,000 patients, and costs billions of dollars every year. We’re calling on TreeHacks teams to envision the best technology-enabled patient safety solution that has the potential to avert patient harm and save lives and will be awarding $2,000 to the top team. Your hack must align with one of the following five leading patient safety challenges facing health care across the continuum of care: Medication errors, procedural/surgical errors, errors during routine patient care (e.g. pressure ulcers, blood clots, falls), infections and diagnostic safety. We encourage teams to consider autonomous tech-enabled patient safety solutions – those that are able to take action with little or no human supervision – as well. Learn more about the problem and get access to resources to help your hack here.",
        contents: "$2,000 cash to the top team",
        company: "Pateint Safety Initiative",
      },
      {
        name: "Best Real-World Crypto Hack",
        description:
          "Build something using technologies like Bitcoin, Ethereum, ZetaChain that provides real utility for real people.",
        contents: "1x Ledger Nano X per teammate",
        company: "ZetaChain",
      },
      {
        name: "Best Omnichain Smart Contract Application",
        description:
          "Build an useful application that spans multiple chains using ZetaChain’s smart contract and/or messaging!n",
        contents: "$2500 USDC",
        company: "ZetaChain",
      },
      {
        name: "Most Cyberpunk Hardware Hack",
        description:
          "Our future is most definitely going to be a cyberpunk dystopia. Show us your best hack that interacts with the physical world. This could be a robotic arm controlled by A.I., a custom pentest gadget, taking control of a consumer product, or a matrix of blinking LEDs meant to distract the masses. The best physical hack takes home the prize!",
        contents:
          "4 Arduino Machine Vision Bundle Kits for the winning team members",
        company: "Arduino",
      },
      {
        name: "Best use of Arduino Cloud/API",
        description:
          "Integrate the Arduino IoT Cloud in any way to qualify for this prize. Most interesting and creative implementation wins!",
        contents: "",
        company: "Arduino",
      },
      {
        name: "Best Use of Aptos",
        description:
          "This prize goes to the team that best uses Aptos to create an innovative social or gaming product / service on the blockchain or enables a better developer experience on Aptos",
        contents: "$1000",
        company: "Aptos",
      },
      {
        name: "Top Uses of NEAR Social (3x)",
        description:
          "This goes to the top 3 teams that implement NEAR Social the best. Whether it is indexing data from NEAR Social into your projects or directly building a widget on NEAR Social.",
        contents: "$1,000 Per team",
        company: "NEAR Protocol",
      },
      {
        name: "Replit",
        description: "",
        contents:
          "First place winner: 3,000 Cycles (~ 3 months of Hacker)\nSecond place winner: 2,000 Cycles (~ 2 months of Hacker)\nThird place winner: 1,000 Cycles (~ 1 month of Hacker)",
        company: "Replit",
      },
      {
        name: "Best Omnichain Smart Contract Application",
        description:
          "Build an useful application that spans multiple chains using ZetaChain’s smart contract and/or messaging!n",
        contents: "$2500 USDC",
        company: "ZetaChain",
      },
      {
        name: "Wolfram Award",
        description:
          "Everyone on the top twelve teams with a max of 60 individuals",
        contents:
          "One year of Wolfram|One Personal Edition + one-year subscription to Wolfram|Alpha Pro ($375 per hacker)",
        company: "Wolfram",
      },
      {
        name: "Best use of Supabase",
        description:
          "Award to the project that uses more Supabase features in the most creative way.",
        contents:
          "A Supabase swag pack (Black mode T-shirt, Supabase hat, cam cover, and stickers) for each member of the team.",
        company: "Supabase",
      },
      {
        name: "Most Innovative Hack",
        description: "",
        contents: "Back pack, blankets, sweat shirts, t-shirts, beanies  ",
        company: "Meta",
      },
      {
        name: "Most likely to become a business",
        description:
          "Product: Build something people want. Market Size: Address a significant opportunity. Team: Founders would consider committing for long-term.",
        contents:
          "Product: Build something people want. Market Size: Address a significant opportunity. Team: Founders would consider committing for long-term.",
        company: "Neo",
      },
      {
        name: "Best use of Data Hack",
        description:
          "Effective use of data is important to the decisions we make at Hudson River Trading, and we’re always looking for innovative new ways to strategize with data. This prize will be awarded to the hack that best integrates the use of data into their project.",
        contents:
          "Effective use of data is important to the decisions we make at Hudson River Trading, and we’re always looking for innovative new ways to strategize with data. This prize will be awarded to the hack that best integrates the use of data into their project.",
        company: "HRT",
      },
      {
        name: "Best Payments Hack",
        description:
          "This prize will be awarded to the team that has the most interesting payments-based hack.",
        contents: "$500",
        company: "Checkbook.io",
      },
      {
        name: "Checkbook API Best Implementation",
        description:
          "This prize will be awarded to the team that has the most interesting use-case of the Checkbook.io platform.",
        contents: "AirPod Pros for each member ",
        company: "Checkbook.io",
      },
      {
        name: "Best use of Drone Technology",
        description:
          "Parrot is the European leader in the drone industry building Nano drones (under 2 pounds). As drones continue to find applications in a wide range of verticals, such as, industrial inspections, defense, first responders and surveillance, there is a need for development of innovative and specific software mission or customize accessories relevant for different use case. we are therefore interested by what can be the drone technology of tomorrow, how such a technology would be operated and in which mission contexts.",
        contents: "Anafi AI Drone",
        company: "Parrot Drones",
      },
      {
        name: "Best Startup",
        description:
          "Given to the top performing teams in Y Combinator’s challenge.  These are the teams that we think are most likely to succeed at a startup.",
        contents: "AirPod Pros for each member ",
        company: "Checkbook.io",
      },
      {
        name: "Checkbook API Best Implementation",
        description:
          "This prize will be awarded to the team that has the most interesting use-case of the Checkbook.io platform.",
        contents:
          "Real interview for Y Combinator (no expiration, come interview whenever you want with whoever you want) Dinner on Sunday, with YC team (if in person)",
        company: "Y Combinator",
      },
      {
        name: "Dev tools",
        description: "Best developer tool",
        contents: "4 Xbox Series S",
        company: "Warp",
      },
      {
        name: "Best Hack Using Frontier Tech",
        description:
          "For hackers using cutting-edge tech like Zero Knowledge Proofs, Federated Learning, or Quantum Computing, a chance to showcase your skills!",
        contents:
          "$1,000 cash prize and upto $100,000 uncapped SAFE (more below)",
        company: "Pear VC",
      },
      {
        name: "Best Hack for a Real World Use Case ",
        description:
          "For hackers looking to solve any real world problems with technology. You could be helping college students get food delivery, fighting misinformation online, or increasing opportunities to equal education. There’s no shortage of problems in the world that would benefit from even the simplest technology.",
        contents:
          "$1,000 cash prize and upto $100,000 uncapped SAFE (more below)",
        company: "Pear VC",
      },
      {
        name: "Best Hack Using AI/ML",
        description:
          "Beyond the buzzwords, we have the chance to change the way we interact with computers. We’re at the cusp of a brand new set of possibilities. For hackers looking to push the envelope here with their technical approach or application domain, this is the prize to win!",
        contents:
          "$1,000 cash prize and upto $100,000 uncapped SAFE (more below)",
        company: "Pear VC",
      },
      {
        name: "Retool Hack Ninjas",
        description:
          "Build your hackathon project faster with the power of Retool, and get your project demo ready in no time. Retool is perfect for beginners or coding veterans alike to build your apps 10x faster than usual. We’re looking for cool apps that utilize Retool in their hack!",
        contents:
          "Ducky One 3 SF Pure White 65% Hotswap RGB Mechanical Keyboard per team member",
        company: "Retool",
      },
      {
        name: "Best Use of Estuary",
        description:
          "This prize will go to the students who best demonstrate Estuary's use case and use creative ways to incorporate our API. The first place prize will be iPads and second place will be keyboards.",
        contents:
          "1st Prize - 4 iPad 10th Generation\n2nd Prize - 4 Mechanical/gaming keyboards",
        company: "Warp",
      },
      {
        name: "Best hack to connect with others through food",
        description:
          "Best hack to connect with others through food” for the improvement of the world’s wellbeing & happiness with food! The prize will be $500 DoorDash credit (treat yourself with good food) and $250 Spa experience during the busy school year (We’ll make sure to look after your wellbeing as you help others!). Also, you will get a chance to further develop the idea with Otsuka & Valuenex through an amazing summer internship.",
        contents:
          "Good life package - DoorDash gift card ($500) + Spa gift card ($250) = Total: $3000",
        company: "Otsuka <> Valuenex",
      },
      {
        name: "Best VALUENEX Radar Hack",
        description:
          "Best VALUENEX Radar Hack for the best VALUENEX Radar use case to show the world! Each winning team member will be awarded a $250 Amazon gift card and an annual VALUENEX Radar subscription. ",
        contents:
          "VALUENEX package - Amazon gift card ($250 x 4 people = $1000) and VALUENEX Radar 1 year membership",
        company: "Otsuka <> Valuenex",
      },
      {
        name: "Best Natural Language Hack",
        description:
          "The project with the best application of natural language processing",
        contents:
          "1st place: AirPods Max for each team member ($500/ea)\n2nd place: Ember Mug for each team member ($125/ea)\n3rd place: Amazon Echo Dot (5th gen) for each team member ($50/ea)",
        company: "Mem",
      },
      {
        name: "Best Use of InterSystems IntegratedML",
        description:
          "InterSystems is issuing a challenge to build the most interesting and innovative application using **InterSystems IntegratedML** -- in-database automated machine learning, the simplest way to create, deploy and use ML models to power next-generation intelligent applications.\nTo qualify for the prize, your solution needs to use InterSystems IntegratedML. InterSystems will provide free access to cloud-hosted accounts* and *onsite mentors' support. You will be able to submit your project to one of the main tracks as well.*",
        contents: "1st place: $2000\n2nd place: $1500\n3rd place: $1000",
        company: "InterSystems",
      },
      {
        name: "Best Use of Estuary",
        description:
          "This prize will go to the students who best demonstrate Estuary's use case and use creative ways to incorporate our API. The first place prize will be iPads and second place will be keyboards.",
        contents:
          "1st Prize - 4 iPad 10th Generation\n2nd Prize - 4 Mechanical/gaming keyboards",
        company: "Warp",
      },
      {
        name: "Best use of Convex",
        description:
          "This prize goes to the team that makes the best use of the Convex platform to create a novel and compelling web or mobile multi-user app. Real-time or reactive elements are a plus.",
        contents:
          "- Massive Lego: 5’ Eiffel Tower, 2 meter RC Airplane kit: E-flite DRACO 2.0m BNF Basic Electric Airplane, Arduino-based quadruped robot: Lynxmotion SQ3U, Various batteries, chargers, and accessories to finish the above projects",
        company: "Convex",
      },
    ];

    const rows = grandPrizeData.reduce(function (rows, key, index) {
      return (
        (index % 8 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
        rows
      );
    }, []);

    return (
      <div>
        <div
          style={{ backgroundColor: "#151729", paddingTop: "0px" }}
          className="prizes"
        >
          <div className="row">
            <h1
              className="api-title"
              style={{ marginTop: "0px", paddingTop: "20px", color: "white" }}
            >
              Prizes
            </h1>
          </div>
          <div className="row" style={{ color: "white" }}>
            Check out all the cool prizes you can compete for!
          </div>

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
                    <p style={{ color: "white" }}>
                      {col.contents} for each team member
                    </p>
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
                      {col.contents} for each team member
                    </p>
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

          <div className="bricklayer" ref={this.myRef3}>
            {sponsorPrizeData.map((col) => {
              return (
                <div className="api-item-container">
                  <div
                    className="card api-item"
                    style={{
                      backgroundImage: "linear-gradient(90deg, black, #0089B6)",
                      color: "white",
                      border: "1px solid #0089B6",
                    }}
                  >
                    <h3>{col.name}</h3>
                    <p>{col.description}</p>
                    <p style={{ color: "white" }}>{col.contents}</p>
                    <h3 style={{ color: "white" }}>
                      Sponsored by {col.company}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
