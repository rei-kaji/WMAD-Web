import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "rgba(255,255,255,0.5);",
        zIndex: 2,
        position: "relative",
        // opacity: "0.5",
        display: "flex",
        flexDirection: "column",
        padding: "5rem",
        marginTop: "5rem",
        width: "60%",
        height: "60%",
        gap: "3rem",
        textAlign: "center",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h2"
        // color="initial"
        sx={{
          color: "white",
          opacity: 1,
          fontWeight: "400",
          fontFamily: "Montserrat",
        }}
      >
        Go To Mars!
      </Typography>
      <TextField
        required
        id="standard-basic"
        label="Name"
        variant="standard"
        sx={{ fontSize: "5rem" }}
      />
      <TextField
        required
        id="standard-basic"
        label="Family"
        variant="standard"
      />
      <TextField
        required
        id="standard-basic"
        type={"number"}
        label="Age"
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value="Mars">Mars</MenuItem>
          <MenuItem value="Planus">Planus</MenuItem>
          <MenuItem value="Earth">Earth</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "white",
          border: "white",
          color: "black",
          width: "10rem",
          margin: "0 auto",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
