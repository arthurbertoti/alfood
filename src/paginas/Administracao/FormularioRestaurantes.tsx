import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const FormularioRestaurantes = () => {

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: nomeRestaurante
        })
        .then(() => {
            alert(' ${nomeRestaurante} cadastrado com sucesso!')
        })


    }
    return (
        <form onSubmit={ aoSubmeterForm }>
            <TextField value={nomeRestaurante}
                onChange={evento => setNomeRestaurante(evento.target.value)}
                id="standard-basic"
                label='Standard'
                variant="standard"
            />
            <Button type='submit' variant="outlined">
                Salvar
            </Button>
        </form>
    )
}
export default FormularioRestaurantes;