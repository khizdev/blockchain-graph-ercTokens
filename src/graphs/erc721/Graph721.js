import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const APIURL = `${process.env.graph721}`;

const tokensQuery = `query {
    transfers(first:5, orderBy:tokenId){
      id
      to
      from
      tokenId
    }
  }
`
const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
})
export default function Graph721() {

    const [getData, setData] = React.useState([]);

    client
        .query({
            query: gql(tokensQuery),
        })
        .then((data) => {
            setData(data.data.transfers)
        })
        .catch((err) => {
            console.log('Error fetching data: ', err)
        })

    var transfer = getData.map(items => {
        var getData = {
            transferFrom: items['from'],
            transferTo: items['to'],
            tansferTokenId: items['tokenId'],
            type: items['__typename'],
            id: items['id']
        }
        return getData;
    });

    return (
        <div>
            <h1>
                Graph ERC721 Query
            </h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"><b>Type</b></TableCell>
                            <TableCell align="left"><b>Transfer From</b></TableCell>
                            <TableCell align="left"><b>Transfer To</b></TableCell>
                            <TableCell align="left"><b>Token Ids</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transfer.map((transfer) => (
                            <TableRow
                                key={transfer.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {transfer.type}
                                </TableCell>
                                <TableCell align="left">{transfer.transferFrom}</TableCell>
                                <TableCell align="left">{transfer.transferTo}</TableCell>
                                <TableCell align="left">{transfer.tansferTokenId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
