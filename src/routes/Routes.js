import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Graph20 from '../graphs/erc20/Graph20';
import Graph721 from '../graphs/erc721/Graph721';
import Graph1155 from '../graphs/erc1155/Graph1155';

export default function Navigation() {
    return (
    <div>
        <ListItem button style={{ marginTop: 10 }} component={Link} to="/Graph20" element={<Graph20/>}>
            <ListItemText primary="ERC20 Transfers" />
        </ListItem>
        <ListItem button style={{ marginTop: 10 }} component={Link} to="/Graph721" element={<Graph721/>}>
            <ListItemText primary="ERC721 Transfers" />
        </ListItem>
        <ListItem button style={{ marginTop: 10 }} component={Link} to="/Graph1155" element={<Graph1155/>}>
            <ListItemText primary="ERC1155 Transfers" />
        </ListItem>
    </div>
    );
}
