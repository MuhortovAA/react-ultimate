import React from 'react';
import { MainContainer } from './components/MainContainer';
import { TableBody, TableHead, Typography } from '@mui/material';
import { useData } from './DataContext';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export const Result = () => {

const {data} = useData();
const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
const { files } = data;

console.log('files',files);

  return (
    <MainContainer>
    <Typography component="h2" variant="h5">
    📋 Form Values
  </Typography>
  <TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>
            Field
        </TableCell>
        <TableCell align="right">
            Value
        </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {entries.map(entry=>(
                <TableRow key={entry[0]}>
                  <TableCell component="th" scope="row">
                    {entry[0]}
                  </TableCell>
                  <TableCell align="right">{entry[1]?.toString()}</TableCell>
                </TableRow>
            ))}
    </TableBody>
    </Table>
  </TableContainer>
  {files && (
          <>
            <Typography component="h2" variant="h5">
              📦 Files
            </Typography>
            <List>
              {files.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFileIcon />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
  <Link to="/">Start over</Link>
  </MainContainer>
  );
};