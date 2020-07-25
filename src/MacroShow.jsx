import { Form } from "react-bootstrap";
import React from "react";
export default function MacroShow(props) {
  return (
    <Form.Group controlId="macro">
      <Form.Label>Created Macro</Form.Label>
      <Form.Control disabled as="textarea" rows="3" value={props.macro} />
    </Form.Group>
  );
}
