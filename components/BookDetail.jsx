import { Form } from "./Form";
import { updateBook } from "../api-helpers/frontend/utils";
import { useRouter } from "next/router";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export const BookDetail = ({ fetchedBook, id }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const getFormData = async (data) => {
    //console.log(data);

    updateBook(data, id)
      .then((value) => {
        //console.log(value);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {fetchedBook ? (
        <>
          <Form data={fetchedBook} onSubmit={getFormData} />
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
                Successfully updated
              </Alert>
            </Snackbar>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};