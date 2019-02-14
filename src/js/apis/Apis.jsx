import React from "react";
import Bricklayer from "bricklayer";
import data from "./data.yaml";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        new Bricklayer(this.myRef.current);
    }
    render() {
        return (<div class="apis container">
            <div className="row">
                <h1 className="api-title">API Directory</h1>
            </div>
            <div className="bricklayer" ref={this.myRef}>
                {data.map(company =>
                    company.apis.map(api =>
                        <div className="api-item-container">
                            <div className="card api-item" key={api.title}>
                                <h3>{api.title}</h3>
                                <p>{api.description}</p>
                                {company.slack &&
                                    <p>slack: <strong>#{company.slack}</strong></p>
                                }
                                {api.links.map(link =>
                                    <a target="_blank" href={link.url}>
                                        <button className="green-button">{link.title || link.url}</button>
                                    </a>
                                )}
                            </div>
                        </div>)
                    )}
            </div>
        </div>);
    }
}