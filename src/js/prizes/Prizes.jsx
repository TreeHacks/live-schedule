import React, { useEffect, useState } from "react";
import Bricklayer from "bricklayer";
import Logo from "../../logos/treehacks_logo.webp";
import GrandPrize from "../../logos/bigCheck.webp";
import Otsuka from "../../logos/otsuka.webp";
import Convex from "../../logos/convex.webp";
import InterSystems from "../../logos/intersystems.webp";
import HRT from "../../logos/hrt.webp";
import Warp from "../../logos/warp.webp";
import Parrot from "../../logos/parrot.webp";
import YCombinator from "../../logos/ycombinator.webp";
import Neo from "../../logos/neo.webp";
import PearVC from "../../logos/pear.webp";
import Caldera from "../../logos/caldera.webp";
import Canva from "../../logos/canva.webp";
import Chroma from "../../logos/chroma.webp";
import Intel from "../../logos/intel.webp";
import Pinecone from "../../logos/pinecone.webp";
import Reflex from "../../logos/reflex.webp";
import Taisu from "../../logos/taisu.webp";
import TerraAPI from "../../logos/terra.webp";
import Together from "../../logos/togetherai.webp";
import VespaAI from "../../logos/vespa.webp";
import Fetch from "../../logos/fetch.webp";
import Makerbot from "../../logos/makerbot.webp";
import Reazon from "../../logos/reazon.webp";
import Coframe from "../../logos/coframe.webp";
import Postman from "../../logos/postman.webp";
import Wispr from "../../logos/wispr.webp";
import Codegen from "../../logos/codegen.webp";
import Monster from "../../logos/monster.webp";
import McCoy from "../../logos/mccoy.jpeg";
import QED from "../../logos/qed.webp";
import Roblox from "../../logos/roblox.webp";
import Crossmint from "../../logos/crossmint.webp";
import BGB from "../../logos/bgb.webp";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();

    const sponsorPrizeData = [
      {
        name: "Most Commercially Viable Hack",
        description:
          "Given to the hack that we think has the most potential to make it as a startup! We’ll assess the viability of the product, and will value real-world user research and testing you may have performed",
        contents:
          "Weekly 1 on 1 sessions on how to develop your product, until you launch.",
        company: "TerraAPI",
        logo: TerraAPI,
      },
      {
        name: "Best Use of GenAI using InterSystems IRIS Vector Search",
        description:
          "Build your groundbreaking solution on InterSystems IRIS data platform, which gives you the tools to seamlessly integrate GenAI, tabular AutoML, data interoperability, using simple SQL or Python LangChain/Llamaindex connectors! The most innovative solution that leverages GenAI using InterSystems IRIS will win cash prizes!",
        contents: {
          1: {
            name: "$2,000 Cash",
          },
          2: {
            name: "$1,500 Cash",
          },
          3: {
            name: "$1,000 Cash",
          },
        },
        company: "InterSystems",
        logo: InterSystems,
      },
      {
        name: "Best Use of Intel Developer Cloud",
        description:
          "Show us your innovative and creative technological solutions using Intel Developer Cloud or Prediction Guard LLM APIs for development. ",
        contents: {
          1: {
            name: "$2500 Intel® Developer Cloud credits + Lenovo AI PC for each member",
          },
          2: {
            name: "$1000 Intel® Developer Cloud credit per person",
          },
          3: {
            name: "$500 Intel® Developer Cloud credit per person",
          },
        },
        company: "Intel",
        logo: Intel,
      },
      {
        name: "Best application of Zero Knowledge Proofs",
        description:
          "This prize will be awarded to the team which builds the most innovative or creative application of Zero Knowledge Proof technology.  ",
        contents:
          "$2000 Cash",
        company: "QED Protocol",
        logo: QED,
      },
      {
        name: "Fetch.ai’s Beyond Boundaries AI Agent Prize",
        description:
          "Exceptional use of Fetch.ai’s Success Tree ",
        contents:
          "Engraved iPad and 1-on-1 with Fetch.ai's CEO",
        company: "Fetch AI",
        logo: Fetch,
      },
      {
        name: "Best Use of Drone Technology",
        description: "",
        contents: "Anafi AI Drones",
        company: "Parrot Drones",
        logo: Parrot,
      },
      {
        name: "Best Project Built on Open-Source AI Programs and Models",
        description: "",
        contents: "$2,500 in Together API credits divided amongst the team",
        company: "Together AI",
        logo: Together,
      },
      {
        name: "Best Use of Together API",
        description: "",
        contents: "$2,500 in Together API credits + a pair of AirPods Max",
        company: "Together AI",
        logo: Together,
      },
      {
        name: "Smartest AI Agent Prize",
        description:
          "Two exceptional project ideas and execution",
        contents:
          "$3,000 Cash",
        company: "Fetch AI",
        logo: Fetch,
      },
      {
        name: "Best Use of Convex Features",
        description:
          "The best use of Convex features, (e.g., multiplayer, vector search, server functions, and real-time updates.)",
        contents: {
          1: {
            name: "$1,250 Cash, 6 months Convex Pro",
          },
          2: {
            name: "$500 Cash, 3 months Convex Pro",
          },
          3: {
            name: "$250 Cash",
          },
        },
        company: "Convex",
        logo: Convex,
      },
      {
        name: "MonsterAPI: Best use of our Generative AI APIs",
        description:
          "MonsterAPI: World’s most Advanced Fine-tuner. Our no-code fine-tuner helps developers fine-tune the latest LLMs in just 3 clicks. Build cool Generative AI applications like IronMan’s Jarvis by customising AI models using our LoRA powered fine-tuner which reduces the fine tuning time from weeks to hours. You can fine-tune from a massive range of latest open-source LLMs such as TinyLlama 1B to Llama 2 70B and Mixtral 8x7B and run them with our one-click deployment engine. [Jarvis is just an example, millions of meaningful AI apps can be created. So be creative and submit your most innovative projects]",
        contents: {
          1: {
            name: "4x X BOX Series S",
          },
          2: {
            name: "1 Million MonsterAPI credits for the team ($250 per participant) (Please mention full 1 Million vs 1 Mil to avoid any confusion)",
          },
          3: {
            name: "Total cash: $400 for the team",
          },
        },
        company: "Monster",
        logo: Monster,
      },
      {
        name: "Most Ethically Engaged Hack",
        description:
          "This prize awards the team that can best articulate the ethical tensions and potential hazards latent in their project and create innovative solutions for addressing them. Judging criteria for the prize can be found here: rb.gy/21wpus. Participants are encouraged to attend the Center for Ethics workshop on Saturday at 12:30pm to learn more. To be considered, participants must also include in their devpost submission a written narrative that explains what ethical considerations were most important when developing the project and how they were incorporated into their final product. You can see a previous winner here.",
        contents: "$1,000 Cash",
        company: "McCoy Center for Ethics in Society",
        logo: McCoy,
      },
      {
        name: "Best Developer Tool by Warp",
        description:
          "Build a hack that focuses on improving the developer experience in some meaningful way - this could be tackling any part of the development lifecycle (creating, modifying or testing software)!",
        contents: "Keychron Keyboards + Warp Tumblers",
        quantity: 4,
        company: "Warp",
        logo: Warp,
      },
      {
        name: "Innovative DeFi Award",
        description:
          "The most exceptional hack that pushes the boundaries of what's possible in the DeFi landscape, boldly addressesing any of the following verticals: from pioneering aggregators to revolutionary liquid staking providers, innovative real-world-assets, boundary-pushing DeFi option Vaults, and groundbreaking derivatives platforms. ",
        contents: "$500 Cash",
        company: "Taisu",
        logo: Taisu,
      },
      {
        name: "Creative Web3 Platform Award",
        description:
          "Hack with the most outstanding infrastructure, utility hack and platform, designed to empower market participants with seamless access to the underlying blockchain technology. Celebrating any innovations across developer tools, Decentralized IDs and marketplaces, metaverse-based solutions, SocialFi and DAOs",
        contents: "$500 Cash",
        company: "Taisu",
        logo: Taisu,
      },
      {
        name: "Amazing Web3 Gaming Award ",
        description: "This award celebrates the innovation of blockchain gaming, recognizing  projects within the sphere of web3 gaming, across esports, cutting-edge gaming engines, and innovative launchpads.",
        contents: "$500 Cash",
        company: "Taisu",
        logo: Taisu,
      },
      {
        name: "Best Identity Credential Application Hack:",
        description:
          "The best use of Convex features, (e.g., multiplayer, vector search, server functions, and real-time updates.)",
        contents: {
          1: {
            name: "2 x rabbit r1 + $250 of credit per team member",
          },
          2: {
            name: "4 x ledger nano s plus (or less if team has less than 4 people) + $100 of credit per team member.",
          },
        },
        company: "Crossmint",
        logo: Crossmint,
      },
      {
        name: "Best Use of Reflex",
        description:
          "Best App created using the Reflex framework",
        contents: "$2,000 Cash",
        company: "Reflex",
        logo: Reflex,
      },
      {
        name: "Best Use of Data Hack",
        description:
          "Effective use of data is important to the decisions we make at Hudson River Trading, and we’re always looking for innovative new ways to strategize with data. This prize will be awarded to the hack that best integrates the use of data into their project.",
        contents: "HRT-branded keyboard + mouse set",
        company: "Hudson River Trading",
        logo: HRT,
      },
      {
        name: "Y Combinator / Yoneda Labs ",
        description: "Yoneda Labs is a startup in the current Y Combinator batch. At Yoneda Labs we care about the ability of teams to create prototypes of their ideas and ship fast. For our challenge, we want to see the best prototype which addresses an issue someone on the team faces in a novel manner. We don’t care about slides or fancy presentations, we will be solely focussed on the coding prowess displayed and the ability of the prototype to solve the problem.",
        contents: "Office Hours with a Y Combinator Group Partner ",
        company: "Y Combinator",
        logo: YCombinator,
      },
      {
        name: "Best Hack using a Large Language Model",
        description:
          "ChatGPT set records last year - Large Language Models are now in everyday use. Applications can use APIs to interact with LLMs, or self-host the models in the application. LLMs are changing how users interact with applications - this prize is for the best hack using an LLM to create an awesome UX!",
        contents: "Bose Headphones per teammate",
        company: "VespaAI",
        logo: VespaAI,
      },
      {
        name: "Vespa Cloud API Hack",
        description:
          "Vespa Cloud lets you build a sophisticated application in minutes by running advanced ranking and aggregation functions on your data, possibly using ML models for realtime inference over a large document corpus. Users use Vespa Cloud to create search and recommendation applications, but not limited to this. This prize is for the team who is able to use Vespa’s ranking language, potentially with ML model inference, in an innovative way - example include predictions based on historical data and realtime events, awesome visualizations of multidimensional tensor data, RAG, and more.",
        contents: "Bose Headphones per teammate",
        company: "VespaAI",
        logo: VespaAI,
      },
      {
        name: "Best Senior-Focused Hack",
        description:
          "How can we apply new tech innovations to support the increasingly growing senior population? How can we not only address seniors’ acute problems, but also increase their joy and wellbeing holistically? Think IoT, ASR/AI, and robotics, senior-friendly UX is critical, product ecosystems, social networks, etc. Brainstorm more @ Reazon's booth!",
        contents: "Round-trip tickets to Tokyo during spring break",
        company: "Reazon Holdings",
        logo: Reazon,
      },
      {
        name: "Best AI Hack",
        description:
          "Awarded to the project that showcases the most impressive use of AI. ",
        contents:
          "NVIDIA RTX 4080 GPU",
        company: "Coframe",
        logo: Coframe,
      },
      {
        name: "Best Use of an API with Postman",
        description:
          "Submit a project with positive social impact that makes use of one or more APIs, with a related Postman public workspace for the API(s). Whether you build your own API or find existing APIs from the Postman Public API network, make use of Postman's public workspace to collaborate with your team for development and documentation.",
        contents:
          "Flipper0 + Postman Swag Kit",
        company: "Postman",
        logo: Postman,
      },
      {
        name: "Best Voice Experience",
        description:
          "The world is changing and computers can start to understand natural language. Build an experience with voice that feels intuitive and seamless. This could be a phone / desktop / web app. The award will go to the project with the best attention-to-detail and a new user behavior.",
        contents: "Interview with Wispr founders and visit to Wispr HQ",
        company: "Wispr",
        logo: Wispr,
      },
      {
        name: "Best New Canva App Submission",
        description:
          "Canva’s editor sees millions of user create designs everyday. Embed your tech into Canva using the Apps SDK to gain access to a massive and loyal user base to help grow your reach and share you tech with actual users. The Canva Apps SDK is a React based toolkit that allows you to build tools into the Canva Editor. The SDK includes APIs, example code, and a UI Kit. These tools enable you to quickly develop a UI to allow real Canva users to interact with your LLM, GAN, or design tech. A Canva app can be anything from transforming images into paintings with AI or creating custom SVG shapes based on a user's input.  Not able to get your app production ready in just 36 hours? Talk with the Canva team about bringing your app to the Canva Apps Marketplace even after this weekend and getting access to our Innovation Fund.",
        contents: "Wireless Headphones, exclusive Canva Devs x TreeHacks sweatshirt",
        company: "Canva",
        logo: Canva,
      },
      {
        name: "Most Likely to Get Funded Hack",
        description: "Pear VC’s prize goes to the team most likely to spin off into a company and raise funding. ",
        contents: "$1,500 Cash",
        company: "PearVC",
        logo: PearVC,
      },
      {
        name: "Most likely to become a business",
        description:
          "Product: Build something people want. Market Size: Address a significant opportunity. Team: Founders would consider committing for long-term.",
        contents:
          "Airfare + accommodations for your team to visit a summer retreat with Neo scholars, startups, and veteran mentors",
        company: "Neo",
        logo: Neo,
      },
      {
        name: "Best Hack to Connect with Others through Food",
        description:
          "“Best hack to connect with others through food” for the improvement of the world’s well-being & happiness with food! The prize will be $500 DoorDash credit (treat yourself with good food) and $250 Spa experience during the busy school year (We’ll make sure to look after your well-being as you help others!). Also, you will get a chance to further develop the idea with Otsuka & Valuenex through an amazing summer internship.",
        contents: "Good Life Package ($500 Doordash + $250 Spa)",
        company: "Otsuka/Valuenex",
        logo: Otsuka,
      },
      {
        name: "Most Creative On-Chain Hack",
        description:
          "Awarded to the project that best executes on an original, creative application of blockchain. Preference given to applications with a significant on-chain (smart contract) component",
        contents: "$2,500 Ethereum, split across team members",
        company: "Caldera",
        logo: Caldera,
      },
      {
        name: "Best use of Caldera",
        description:
          "Best project deployed to a Caldera chain.",
        contents: "$1000 in Ethereum, split across team members",
        company: "Caldera",
        logo: Caldera,
      },
      {
        name: "Informed Physicians Prize",
        description: "How might we reach oncologists in the community and academic settings with disease state education messaging to generate excitement and anticipation in this low interest and largely low-urgency category WHILE amplifying corporate presence and commitment to ensure a new brand is eagerly accepted at launch.",
        contents: "$500 Gift Card + Internship Interview (per team member)",
        company: "BGB Group",
        logo: BGB,
      },
      {
        name: "Best Use of AI Agents",
        description:
          "Awarded to the team that demonstrates the most innovative and effective use of AI agents within their project. This prize celebrates creativity, technical excellence, and the strategic implementation of agentic AI. We're looking for teams that push the boundaries of what AI agents can achieve.",
        contents:
          "$3,000 cash, split between team members ",
        company: "Codegen",
        logo: Codegen,
      },
      {
        name: "Visionary Award",
        description:
          "At Roblox, our vision is to reimagine the way people come together to create, play, explore, learn and connect with one another. The Visionary Award is given to the project that best encapsulates our vision to bring people together. Award Criteria: 1.Hackathon project is built using Roblox Studio and/or draws on the Roblox platform as part of their final project. 2.The project and problem space are complex, challenging, and requires team collaboration. 3.Final result offers a unique, novel, and innovative solution.",
        contents:
          "Limited Edition Roblox Blanket, Limited Edition Roblox Backpack, & $100 Gift Card (each per team member)",
        company: "Roblox",
        logo: Roblox,
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
        description: "The craziest, most out-of-this-world project built at TreeHacks",
        contents: "It's a surprise :)) A really huge one!",
        logo: GrandPrize,
      },
      {
        name: "Most Technically Complex Hack",
        description: "The project built using the most technical skills",
        contents: "Mac Mini",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Most Creative Hack",
        description: "The project with the most innovative idea and deployment",
        contents: "Nintendo Switch",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Best Hardware Hack",
        description: "Best hack that incorporates hardware (check out the Hardware Lab @ TreeHacks!)",
        contents: "Prusa MINI+ kit 3D Printer",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Most Impactful Hack",
        description: "The project with the largest impact, whether it be deep or wide ranging",
        contents: "Apple Watch Series 9",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Best Beginner Hack",
        description:
          "Best hack by a majority-beginner team (beginner = this is your first hackathon!)",
        contents: "Razor Keyboard + Mouse",
        logo: Logo,
        quantity: 4,
      },
    ];

    const trackPrizeData = [
      {
        name: "Healthcare Grand Prize",
        description: "Best healthcare project",
        logo: Logo,
        contents: "Oura ring",
        quantity: 4,
      },
      {
        name: "Sustainbility Grand Prize",
        description: "Best sustainability project",
        logo: Logo,
        contents: "Patogonia Jackets",
        quantity: 4,
      },
      {
        name: "Blockchain and Security Grand Prize",
        logo: Logo,
        description: "Best blockchain and/or security project",
        contents: "JBL Partybox",
        quantity: 4,
      },
      {
        name: "Education Grand Prize",
        description: "Best education project",
        contents: "Quest 3",
        logo: Logo,
        quantity: 4,
      },
      {
        name: "Entertainment Grand Prize",
        description: "Best entertainment project",
        contents: "Dell Curved Monitor",
        logo: Logo,
        quantity: 4,
      },
    ];

    return (
      <div>
        <div
          style={{ backgroundColor: "#E3EBDD", paddingTop: "0px" }}
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
            style={{ marginTop: "0px", paddingTop: "20px", color: "#487D5D" }}
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
                      backgroundColor: "#484D7D",
                      color: "white",
                    }}
                  >
                    <h3>{col.name}</h3>
                    <p>{col.description}</p>
                    <p style={{ color: "white", fontWeight: "bold" }}>
                      {col.quantity && col.quantity + "x"} {col.contents}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          class="trackPrizes"
          style={{ backgroundColor: "#E3EBDD", paddingTop: "40px" }}
        >
          <h1
            className="api-title"
            style={{ marginTop: "0px", paddingTop: "20px", color: "#487D5D" }}
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
                      backgroundColor: "#7D4878",
                      color: "white",
                      border: "1px solid #8174b4",
                    }}
                  >
                    <h3>{col.name}</h3>
                    <p>{col.description}</p>
                    <p style={{ color: "white" }}>
                      {col.quantity && col.quantity + "x"} {col.contents}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          class="sponsorPrizes"
          style={{ backgroundColor: "#E3EBDD", paddingTop: "40px" }}
        >
          <h1
            className="api-title"
            style={{ marginTop: "0px", paddingTop: "20px", color: "#487D5D" }}
          >
            Sponsor Prizes
          </h1>

          <input
            type="text"
            placeholder="Search by company, description, prize"
            style={{
              width: "80%",
              borderRadius: "20px",
              color: "#487D5D",
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
