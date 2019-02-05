import React from "react";
import data from "./data.yaml";

export default () => (<div class="bootstrap container">
    <div className="row">
        <h1 className="col-12 my-4 text-center">API Directory</h1>
    </div>
    <div className="card-columns">
        {data.map(company =>
            company.apis.map(api =>
                <div className="card api-item p-4" key={api.title}>
                    <h3>{api.title}</h3>
                    <p>{api.description}</p>
                    <p><a href={company.slack}>#slack channel</a></p>
                    {api.links.map(link =>
                        <a target="_blank" href={link.url}>
                            <button className="green-button">{link.title || link.url}</button>
                        </a>
                    )}
                </div>)
        )}
    </div>
</div>);