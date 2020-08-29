import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiEdit, FiSearch, FiInfo } from 'react-icons/fi'

import './styles.css'
import ModalForm from '../../components/modal/'
import api from '../../services/api'

import logoImg from '../../assets/logo-alliance-002.png';

export default function Computers() {
    const name = localStorage.getItem('name');
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const [computers, setComputers] = useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [search, setSearch] = useState('');

    const renderModal = (stateModal, infoModal) => {
        setModalShow(stateModal);
        setModalInfo(infoModal);
    }

    const handleUpdateComputer = async (data) => {
        const codigoAtivo = data.codigo;
        const payload = {
            torre: data.torre,
            status: data.status,
            ip: data.ip,
            numSerie: data.numSerie,
            fabricante: data.fabricante,
            modelo: data.modelo,
            versaoOS: data.versaoOS,
            chaveWindows: data.chaveWindows,
            versaoOffice: data.versaoOffice,
            chaveOffice: data.chaveOffice,
            usuario: data.usuario
        }

        try {
            api.put('computers/update/' + codigoAtivo, payload);
            setModalShow(false);
            alert(`Ativo ${codigoAtivo} atualizado com sucesso !`)
        } catch (err) {
            alert('Não foi possível atualizar, tente novamente !');
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    useEffect(() => {
        const params = {}

        if (search) {
            params.codigo = search
        }

        api.get('computers', { params })
            .then(res => {
                setComputers(res.data);
            })
            .catch(err => console.log(err))
    }, [search])

    return (
        <div className="computers-container">
            <header>
                <img src={logoImg} alt="Alliance Consultoria" />
                <span>Bem vindo, <strong>{name}</strong></span>
                <Link className="button-default" to="/computers/register/new">Cadastrar novo ativo</Link>
                <button onClick={handleLogout}>
                    <FiPower size={20} color="#1DC6BC" />
                </button>
            </header>

            <div className="main-search">
                <div className="search-container">
                    <h1>Procure pelo computador</h1>

                    <div className="form-search">
                        <button><FiSearch size={25} color="#222" /></button>
                        <input
                            placeholder="Digite o código do ativo"
                            value={search}
                            onChange={(e => setSearch(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            <div className="aside-container">
                <h1 className="title">Computadores cadastrados</h1>

                <ul>
                    {computers.map(computer => (
                        <li key={computer.codigo}>
                            <strong>CÓDIGO:</strong>
                            <p>{computer.codigo}</p>

                            <strong>MARCA:</strong>
                            <p>{computer.fabricante}</p>

                            <strong>TORRE:</strong>
                            <p>{computer.torre}</p>

                            <button onClick={() => renderModal(true, computer)}>
                                <FiEdit size={18} color="#1DC6BC" />
                            </button>
                            <button onClick={() => renderModal(true, computer)}>
                                <FiInfo size={18} color="#1DC6BC" />
                            </button>
                        </li>
                    ))
                    }
                </ul>
            </div>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
                infoModal={modalInfo}
                onChange={handleUpdateComputer}
            />

        </div>
    )
}