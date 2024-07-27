import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  // state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        toast.success("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #e2e2e2, #f7f8f9)',
        padding: 3,
      }}
    >
      <Box
        maxWidth={500}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={5}
        borderRadius={8}
        boxShadow="0 15px 30px rgba(0, 0, 0, 0.2)"
        className="bg-white"
        sx={{
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <Typography
          variant="h4"
          className="text-gray-900 font-semibold mb-6"
          textAlign="center"
          sx={{
            color: '#333',
            fontSize: '2rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
          }}
        >
          Register
        </Typography>

        <form onSubmit={handleSubmit} className="w-full">
          <TextField
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type="text"
            required
            fullWidth
            variant="outlined"
            className="mb-4"
            InputProps={{
              style: {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:focus': {
                  borderColor: '#4f9dff',
                  boxShadow: '0 0 5px rgba(79, 157, 255, 0.5)',
                },
              },
            }}
          />
          <TextField
            placeholder="Email"
            value={inputs.email}
            name="email"
            margin="normal"
            type="email"
            required
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-4"
            InputProps={{
              style: {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:focus': {
                  borderColor: '#4f9dff',
                  boxShadow: '0 0 5px rgba(79, 157, 255, 0.5)',
                },
              },
            }}
          />
          <TextField
            placeholder="Password"
            value={inputs.password}
            name="password"
            margin="normal"
            type="password"
            required
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-6"
            InputProps={{
              style: {
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:focus': {
                  borderColor: '#4f9dff',
                  boxShadow: '0 0 5px rgba(79, 157, 255, 0.5)',
                },
              },
            }}
          />

          <Button
            type="submit"
            sx={{
              borderRadius: 4,
              padding: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#007bff',
                boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
                transform: 'scale(1.05)',
              },
            }}
            variant="contained"
            color="primary"
            className="w-full mb-4"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/login")}
            sx={{
              borderRadius: 4,
              padding: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#e0e0e0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)',
              },
            }}
            className="w-full"
          >
            Already registered? Please Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
