import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Paper from '@mui/material/Paper';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { styled } from '@mui/system';
import { Controller } from 'react-hook-form';

const FileInput = ({ control, name }) => {
  const [files, setFiles] = useState([]);

  const commonStyles ={
    root: {
      backgroundColor: "#eee",
      textAlign: "center",
      cursor: "pointer",
      color: "#333",
      padding: "10px",
      marginTop: "20px",
    },
    icon: {
      marginTop: "16px",
      color: "#888888",
      fontSize: "42px",
    },
  };

  const StyledCloudUploadIcon = styled(CloudUploadIcon)(commonStyles.icon);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)})));
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <Controller
    name={name}
    control={control}
    defaultvalue={[]}
    render={({ field: { onChange, onBlur, value } }) => 
    <>
    <Box onDrop={onChange}>
            <Paper variant="outlined" {...getRootProps()}>
                <StyledCloudUploadIcon />
                <input {...getInputProps()} name={name} onBlur={onBlur}/>
                <p>Drag 'n' drop files here, or click to select files</p> 
            </Paper>
      </Box>
      {files.length > 0 && (
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
      )}

    </>}
  />
  );
};

export default FileInput;