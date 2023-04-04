import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CryptoTable = ({ currencyData }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Coin</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Market Cap</TableCell>
                        <TableCell>Rank</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        currencyData.map((currency, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box display="flex" alignItems="center" gap={5}>
                                        <img src={currency.image} width={30} height={30} alt='' />
                                        <Link to={`currency/${currency.id}`}>
                                            <span>{currency.name}</span>
                                        </Link>

                                        <Box display={"flex"} alignItems="center">
                                            <span style={{
                                                color: currency.price_change_percentage_24h > 0 ? 'green' : 'red'
                                            }}> {currency.price_change_percentage_24h.toFixed(2)}</span>

                                            {
                                                currency.price_change_percentage_24h > 0 ? <ArrowUpwardIcon style={{ color: 'green' }} /> : <ArrowDownwardIcon style={{ color: 'red' }} />
                                            }
                                        </Box>


                                    </Box>
                                </TableCell>

                                <TableCell>
                                    {currency.current_price}
                                </TableCell>
                                <TableCell>
                                    {currency.market_cap}
                                </TableCell>
                                <TableCell>
                                    {currency.market_cap_rank}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default CryptoTable;