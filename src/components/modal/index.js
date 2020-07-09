import React from 'react'
import { Modal, Form, Col, Button } from 'react-bootstrap'
import { Component } from 'react';
import './modalStyles.css';

export class ModalForm extends Component {
    state = {
        model: {
            codigo: '',
            dominio: '',
            status: '',
            ip: '',
            numSerie: '',
            fabricante: '',
            modelo: '',
            versaoOS: '',
            chaveWindows: '',
            versaoOffice: '',
            chaveOffice: '',
            obs: ''
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

                            <Form.Group as={Col} controlId="Dominio">
                                <Form.Label>Domínio</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dominio"
                                    defaultValue={model.dominio}
                                    onChange={(event) => this.handleInputChange(event, 'dominio')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="Status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="status"
                                    defaultValue={model.status}
                                    onChange={(event) => this.handleInputChange(event, 'status')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="Status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    as="select"
                                    type="text"
                                    name="status"
                                    defaultValue={model.status}
                                    onChange={(event) => this.handleInputChange(event, 'status')}
                                    required
                                >
                                    <option></option>
                                    <option>Disponível</option>
                                    <option>Alocada</option>
                                </Form.Control>
                            </Form.Group> */}
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="Ip">
                                <Form.Label>IP</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ip"
                                    defaultValue={model.ip}
                                    onChange={(event) => this.handleInputChange(event, 'ip')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="NumSerie">
                                <Form.Label>Nº de Série</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="numSerie"
                                    defaultValue={model.numSerie}
                                    onChange={(event) => this.handleInputChange(event, 'numSerie')}
                                    required
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
                                    defaultValue={model.fabricante}
                                    onChange={(event) => this.handleInputChange(event, 'fabricante')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="Modelo">
                                <Form.Label>Modelo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="modelo"
                                    defaultValue={model.modelo}
                                    onChange={(event) => this.handleInputChange(event, 'modelo')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="VersaoOS">
                                <Form.Label>Versão Windows</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="versaoOS"
                                    defaultValue={model.versaoOS}
                                    onChange={(event) => this.handleInputChange(event, 'versaoOS')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="ChaveWindows">
                                <Form.Label>Chave do Windows</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="chaveWindows"
                                    defaultValue={model.chaveWindows}
                                    onChange={(event) => this.handleInputChange(event, 'chaveWindows')}
                                    required
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
                                    defaultValue={model.versaoOffice}
                                    onChange={(event) => this.handleInputChange(event, 'versaoOffice')}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="ChaveOffice">
                                <Form.Label>Chave do Office</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="chaveOffice"
                                    defaultValue={model.chaveOffice}
                                    onChange={(event) => this.handleInputChange(event, 'chaveOffice')}
                                    required
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