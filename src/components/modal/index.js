import React from 'react'
import { Modal, Form, Col, Button, Tabs, Tab } from 'react-bootstrap'
import { Component } from 'react';
import './modalStyles.css';

export class ModalForm extends Component {
    state = {
        model: {
            codigo: '',
            torre: '',
            status: '',
            ip: '',
            numSerie: '',
            fabricante: '',
            modelo: '',
            versaoOS: '',
            chaveWindows: '',
            versaoOffice: '',
            chaveOffice: '',
            obs: '',
            alocadoCom: '',
        },

        isLoading: false,
    }

    handleInputChange = (event, name) => {
        const { model } = this.state;
        model[name] = event.target.value;
        this.setState({ model });
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.onChange(this.state.model);
    }

    componentDidUpdate(prevPros) {
        if (this.props.infoModal !== prevPros.infoModal) {
            this.setState(prevState => ({
                ...prevState,
                model: this.props.infoModal,

            }));
        }
    }

    render() {
        const { model, isLoading } = this.state;

        if (isLoading) {
            return (
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="modal-container">
                            <div className="lds-facebook" >
                                <div></div>
                                <div></div>
                                <div></div>
                            </div >
                        </div>
                    </Modal.Body>
                </Modal>
            )
        }

        return (
            <Modal
                //{...this.props}
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editar ativo - {model.codigo}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="control" id="uncontrolled-tab-example">
                        <Tab eventKey="control" title="Controle Interno">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="Codigo">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="codigo"
                                            required
                                            defaultValue={model.codigo}
                                            disabled
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="Torre">
                                        <Form.Label>Torre</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="torre"
                                            required
                                            defaultValue={model.torre}
                                            onChange={(event) => this.handleInputChange(event, 'torre')}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="Status">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="status"
                                            required
                                            defaultValue={model.status}
                                            onChange={(event) => this.handleInputChange(event, 'status')}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="AlocadoCom">
                                        <Form.Label>Alocada com</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="alocadoCom"
                                            required
                                            defaultValue={model.alocadoCom}
                                            onChange={(event) => this.handleInputChange(event, 'alocadoCom')}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Label>Observação</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="obs"
                                        defaultValue={model.obs}
                                        onChange={(event) => this.handleInputChange(event, 'obs')}
                                    />
                                </Form.Row>
                            </Form>
                        </Tab>

                        <Tab eventKey="technical" title="Ficha técnica">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="Ip">
                                        <Form.Label>IP</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="ip"
                                            required
                                            defaultValue={model.ip}
                                            onChange={(event) => this.handleInputChange(event, 'ip')}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="numSérie">
                                        <Form.Label>Nº de Série</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="numSerie"
                                            required
                                            defaultValue={model.numSerie}
                                            onChange={(event) => this.handleInputChange(event, 'numSerie')}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="Fabricante">
                                        <Form.Label>Fabricante</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="fabricante"
                                            required
                                            defaultValue={model.fabricante}
                                            onChange={(event) => this.handleInputChange(event, 'fabricante')}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="Modelo">
                                        <Form.Label>Modelo</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="modelo"
                                            required
                                            defaultValue={model.modelo}
                                            onChange={(event) => this.handleInputChange(event, 'modelo')}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="VersaoOS">
                                        <Form.Label>Sistema Operacional</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="versaoOS"
                                            required
                                            defaultValue={model.versaoOS}
                                            onChange={(event) => this.handleInputChange(event, 'versaoOS')}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="chaveWindows">
                                        <Form.Label>Chave Windows</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="chaveWindows"
                                            required
                                            defaultValue={model.chaveWindows}
                                            onChange={(event) => this.handleInputChange(event, 'chaveWindows')}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="VersaoOffice">
                                        <Form.Label>Versão Office</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="versaoOffice"
                                            required
                                            defaultValue={model.versaoOffice}
                                            onChange={(event) => this.handleInputChange(event, 'versaoOffice')}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="chaveOffice">
                                        <Form.Label>Chave Office</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="chaveOffice"
                                            required
                                            defaultValue={model.chaveOffice}
                                            onChange={(event) => this.handleInputChange(event, 'chaveOffice')}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={this.submitForm}>Salvar</Button>
                    <Button onClick={this.props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalForm;