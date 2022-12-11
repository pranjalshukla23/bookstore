import { Box, Container, Grid, Typography } from "@mui/material";
import { BookItem } from "./BookItem";
export const BookList = ({ data }) => {
  if (data.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">No Featured Books Found</Typography>
      </Box>
    );
  }
  return (
    <>
      <Grid padding={1} spacing={2} container>
        {data.map((book) => (
          <Grid
            xs={6}
            sm={4}
            md={3}
            lg={2}
            height="400px"
            width={"100%"}
            item
            key={book._id}
            padding={2}
          >
            <BookItem
              title={book.title}
              author={book.author}
              imageUrl={book.imageUrl}
              id={book._id}
              featured={book.featured}
              price={book.price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};