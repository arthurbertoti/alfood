import IRestaurante from "../../interfaces/IRestaurante";
import { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";
import axios from 'axios';

const AdministracaoRestaurantes = () => {

    const [restaurante, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Head do negócio
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurante.map(restaurante =>
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default AdministracaoRestaurantes;