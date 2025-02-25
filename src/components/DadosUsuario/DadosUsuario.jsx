import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario () {
  return (
    <form>
      <TextField 
        id="email" 
        label="email" 
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField 
        id="password" 
        label="password" 
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth 
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;