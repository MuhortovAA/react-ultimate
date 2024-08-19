import React from 'react';
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import { useData } from "./DataContext";
import FileInput from './components/FileInput';

export const Step3 = () => {

    const history = useNavigate();
    const { data, setValues } = useData();
    const { control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files,
          },
    });
  
    const onSubmit = (data) => {
      history('/result');
      setValues(data);
      console.log(data);
   };
  
    return (
      <MainContainer>
        <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control} />
            <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    );
  };