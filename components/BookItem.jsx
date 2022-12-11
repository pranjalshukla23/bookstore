import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { deleteBook } from "../api-helpers/frontend/utils";
import { useRouter } from "next/router";
import { useState } from "react";

export const BookItem = ({ title, id, author, imageUrl, featured, price }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    deleteBook(id)
      .then((value) => {
        // console.log(value);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Card
        sx={{
          width: "100%",
          padding: "10px",
          borderRadius: 3,
          border: "1px solid skyblue",
          boxShadow: "5px 5px 10px #ccc",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "90%",
            height: "170px",
            position: "relative",
          }}
        >
          {featured && (
            <div
              style={{
                position: "absolute",
                top: "0",
                background: "red",
                padding: "5px",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {featured ? "Featured" : ""}
            </div>
          )}

          <img src={imageUrl} alt={title} width={"100%"} height={"100%"} />
        </div>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {`Best Buy: $${price}`}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={`/books/${id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              size="small"
              sx={{
                color: "red",
              }}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Link>
          <Button
            size="small"
            sx={{
              color: "red",
            }}
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>

      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            setOpen(false);
            router.push("/");
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully deleted
          </Alert>
        </Snackbar>
      )}
    </>
  );
};