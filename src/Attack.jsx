import React from "react";
import { Form, Button } from "react-bootstrap";
import MacroShow from "./MacroShow";
export default class Skill extends React.Component {
  macro = () =>
    `/me &{template:PFAttack} {{name= @title }}
     {{subtags= @{Selected|Token_Name}}}  
     {{attack=[[1d20cs>@crit+?{@atkboni|@mod}]]}} 
     {{damage= [[?{@dmgDice|@dice}]]}}
     {{confirm=[[1d20+?{@atkboni|@mod}]]}} 
     @crit {{notes=@notes}}`;
  crit = () => "{{dmgcrit=[[?{@dmgDice|@dice}]]}}";

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
          <Form.Group key="title" controlId="title">
            <Form.Label>"Makrotitel"</Form.Label>
            <Form.Control
              type="title"
              placeholder="Zu anzeigender Name für das Macro eingeben"
            />
          </Form.Group>
          <Form.Group key="atkboni" controlId="atkboni">
            <Form.Label>"Angriffsmodifizierer"</Form.Label>
            <Form.Control type="atkboni" placeholder="Angriffsboni: z.B. +4" />
          </Form.Group>
          <Form.Group key="dmg" controlId="dmg">
            <Form.Label>"Schadenswurf"</Form.Label>
            <Form.Control type="dmg" placeholder="Schadenswurf: z.B. 2d8+4" />
          </Form.Group>
          <Form.Group key="dmg" controlId="dmg">
            <Form.Label>"Wert für Crit"</Form.Label>
            <Form.Control type="dmg" placeholder="Schadenswurf: z.B. 2d8+4" />
          </Form.Group>
        </Form>

        <MacroShow macro={this.state.macro} />
        <Button onClick={this.createMacro}>Create Macro</Button>
      </div>
    );
  }
}
