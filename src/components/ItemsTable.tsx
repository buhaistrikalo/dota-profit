import { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IItem } from 'models/IItem';
import { Link, IconButton } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 300,
    },
    {
        field: 'stonk',
        headerName: 'Stonks',
        type: 'number',
        width: 150,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
    },
    {
        field: 'popularity',
        headerName: 'Popularity',
        type: 'number',
        width: 110,
    },
    {
        field: 'url1',
        headerName: 'Market Link',
        sortable: false,
        width: 160,
        renderCell: (params) => (
            <Link target="_blank" href={params.formattedValue}>
                <IconButton aria-label="market">
                    <LinkIcon />
                </IconButton>
            </Link>
        ),
    },
    {
        field: 'url2',
        headerName: 'Steam Link',
        sortable: false,
        width: 160,
        renderCell: (params) => (
            <Link target="_blank" href={params.formattedValue}>
                <IconButton aria-label="steam">
                    <LinkIcon />
                </IconButton>
            </Link>
        ),
    },
];

interface ItemsTableProps {
    items: IItem[];
}

const ItemsTable: FC<ItemsTableProps> = ({ items }) => {
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={items}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default ItemsTable;
