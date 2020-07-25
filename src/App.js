import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Skill from "./Skill.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "atk"
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={k => this.setState({ key: k })}
      >
        <Tab eventKey="atk" title="ATK-Macro">
          XXX
        </Tab>
        <Tab eventKey="skill" title="Skill-Macro">
          <Skill />
        </Tab>
        <Tab eventKey="spell" title="Spell-Macro">
          XXXX
        </Tab>
      </Tabs>
    );
  }
}
