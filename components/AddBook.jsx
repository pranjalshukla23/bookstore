import { Form } from "./Form";
import axios from "axios";
import { sendBook } from "../api-helpers/frontend/utils";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const AddBook = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const getFormData = (data) => {
    sendBook(data)
      .then((book) => {
        // console.log("book submitted", book);
        setOpen(true);
      })
      .catch((err) => {
        //console.log(err);
      });
  };
  return (
    <>
      <Form onSubmit={getFormData} />
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
            Successfully added book
          </Alert>
        </Snackbar>
      )}
    </>
  );
};