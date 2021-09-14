import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

class AccordionItem extends React.Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>
                    {this.props.header}
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={this.props.eventKey}>
                    <Card.Body>{this.props.children}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default AccordionItem