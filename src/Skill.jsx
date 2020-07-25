import React from "react";
import { Form, Button } from "react-bootstrap";
import MacroShow from "./MacroShow";
export default class Skill extends React.Component {
  start = () =>
    `&{template:pf_check} {{name=@{Selected|Token_Name}'s}} {{check=?{Waehle den Wurf|`;
  end = () => `}+?{boni|0}]]}}`;

  single = () => ` @name,@name Check&#125;&#125;{{skill_chk=[[1d20+@mod|`;
  rolls = [
    "Fortitude Save",
    "Reflex Save",
    "Will Save",
    "Acrobatics",
    "Appraise",
    "Bluff",
    "Climb",
    "Craft:Alchemy",
    "Craft:Armor",
    "Craft:Bow",
    "Craft:Firearms",
    "Craft:Weapon",
    "Diplomacy",
    "Disable Device",
    "Disguise",
    "Escape Artist",
    "Fly",
    "Handle Animal",
    "Heal",
    "Intimidate",
    "KN: Arcana ",
    "KN: Dungeoneering",
    "KN: Engineering",
    "KN: Geography",
    "KN: History",
    "KN: Local",
    "KN: Nature",
    "KN: Nobility",
    "KN: Planes",
    "KN: Religion",
    "Linguistics",
    "Perception",
    "Perform",
    "Profession",
    "Ride",
    "Sense Motive",
    "Sleight of Hand",
    "Spellcraft",
    "Stealth",
    "Survival",
    "Swim",
    "Use Magic Device"
  ];

  constructor(props) {
    super(props);
    this.state = {};
    this.forms = this.rolls.map(e => (
      <Form.Group key={e} controlId={e}>
        <Form.Label>{e}</Form.Label>
        <Form.Control
          type={e}
          placeholder={e.concat(" oder automatisch 0 wird eingesetzt")}
        />
      </Form.Group>
    ));
  }
  createMacro = () => {
    let fullAsk = "";
    this.rolls.forEach(element => {
      let mod = this.state[element];
      if (!mod) mod = 0;
      fullAsk += this.single()
        .replace("@mod", mod)
        .replace("@name", element)
        .replace("@name", element);
    });
    this.setState({ macro: this.start() + fullAsk + this.end() });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <Form className="Form" onChange={this.handleChange}>
          {this.forms}
        </Form>
        <MacroShow macro={this.state.macro} />
        <Button onClick={this.createMacro}>Create Macro</Button>
      </div>
    );
  }
}
