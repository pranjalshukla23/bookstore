import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

export const Form = ({ data, onSubmit }) => {
  const [inputs, setInputs] = useState(
    data
      ? {
          title: data.title,
          author: data.author,
          imageUrl: data.imageUrl,
          featured: data.featured,
          price: data.price,
        }
      : {
          title: "",
          author: "",
          imageUrl: "",
          featured: false,
          price: 0,
        }
  );

  const handleChange = (e) => {
    e.preventDefault();

    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(inputs);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "80%",
        margin: "auto",
        boxShadow: "10px 10px 20px #ccc",
      }}
    >
      <Typography
        color="#cc5333"
        textAlign="center"
        fontWeight="bold"
        variant="h5"
        mt={1}
        padding={2}
      >
        {data ? "Book Detail" : "Add Book"}
      </Typography>
      <Box padding={3} display="flex" flexDirection="column">
        <FormLabel
          sx={{
            marginTop: "10px",
          }}
        >
          Title
        </FormLabel>
        <TextField
          name="title"
          margin="normal"
          value={inputs.title}
          onChange={handleChange}
        />
        <FormLabel
          sx={{
            marginTop: "10px",
          }}
        >
          Author
        </FormLabel>
        <TextField
          name="author"
          margin="normal"
          value={inputs.author}
          onChange={handleChange}
        />
        <FormLabel
          sx={{
            marginTop: "10px",
          }}
        >
          ImageUrl
        </FormLabel>
        <TextField
          name="imageUrl"
          margin="normal"
          value={inputs.imageUrl}
          onChange={handleChange}
        />
        <FormLabel
          sx={{
            marginTop: "10px",
          }}
        >
          Price
        </FormLabel>
        <TextField
          name="price"
          margin="normal"
          value={inputs.price}
          onChange={handleChange}
        />
        <FormLabel
          sx={{
            marginTop: "10px",
          }}
        >
          Featured
        </FormLabel>
        <Checkbox
          name="featured"
          checked={inputs.featured}
          onChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              featured: e.target.checked,
            }))
          }
          sx={{
            marginRight: "auto",
          }}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  );
};