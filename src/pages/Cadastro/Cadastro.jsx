import React from 'react';
import { Fragment } from 'react';
import {Button, Container, TextField, Typography} from '@material-ui/core';

const Cadastro = () => {
    return(
        <Fragment>
            <Container maxWidth="sm">
             <Typography 
                    variant="h4"
                    align="center"
                    >Cadastro de produtos
                </Typography>   
                <TextField
                label= "Name"
                margin= "normal"
                type= "text"
                variant= "outlined"
                fullWidth
            />  
            <TextField
                label= "Marca"
                margin= "normal"
                type= "text"
                variant= "outlined"
                fullWidth
            />
            <Button
                type= "submit"
                variant= "contained"
                color= "primary"
                fullWidth
                >Enviar
            </Button>
            </Container> 
    
        
        </Fragment>
        
    )
}
export default Cadastro;

