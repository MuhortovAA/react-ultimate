import React from 'react';
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Typography from '@mui/material/Typography';
import { Input } from "./components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "./DataContext";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if(!phoneNumber){
    return value
  }

  return (
    phoneNumber.formatInternational() 
  );
};

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useNavigate();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {       
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber, },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history('/step3');
    setValues(data);
 };


  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 2
      </Typography>
      <Form  onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} id="email" type="email" label="Email" name="email" error={!!errors?.email} helperText={errors?.email?.message}/>
        <FormControlLabel 
              control={<Checkbox
                        defaultValue={data.hasPhone} 
                        defaultChecked={data.hasPhone} 
                        color="primary" 
                        {...register('hasPhone')}
                        // ref={register}
                        name="hasPhone"
                      />}
              label="Do you have a phone"/>
        {hasPhone && (
        <Input
            {...register('phoneNumber')}
              id="phoneNumber"
              type="tel"
              label="Phone Number"
              name="phoneNumber"
              onChange={(event) => {
                event.target.value = normalizePhoneNumber(event.target.value);
              }}/>
      )}
      <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};