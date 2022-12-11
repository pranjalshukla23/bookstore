import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const [value, setValue] = useState(0);

  const router = useRouter();

  const handleChange = (e, val) => {
    setValue(val);

    if (val === 0) {
      router.push("/");
    } else if (val === 1) {
      router.push("/books");
    } else if (val === 2) {
      router.push("/books/add");
    }
  };
  return (
    <AppBar
      position="relative"
      sx={{
        top: "0",
        bgcolor: "#c83576",
      }}
    >
      <Toolbar>
        <MenuBookIcon
          sx={{
            fontSize: "26px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            margin: "auto",
          }}
        >
          <Tabs textColor="inherit" value={value} onChange={handleChange}>
            <Tab label="Home" />
            <Tab label="All Books" />
            <Tab label="Add Book" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};