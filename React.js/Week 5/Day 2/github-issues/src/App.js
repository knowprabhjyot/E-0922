import logo from "./logo.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Switch,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./themeConfig";
import { useEffect, useState } from "react";
import IssuesContext from "./context/IssuesContext";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Issues from "./pages/IssuesPage";
import IssueDetail from "./pages/IssueDetailPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import Home from "./pages/HomePage";

function App() {
  const [appTheme, setAppTheme] = useState("dark");
  const [issuesData, setIssuesData] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/angular/angular/issues")
      .then((response) => {
        setIssuesData(response.data);
      });
  }, []);

  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <IssuesContext.Provider value={issuesData}>
      <ThemeProvider theme={appTheme === "dark" ? darkTheme : lightTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Search
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  placeholder="Enter Repository name"
                  value={searchedKeyword}
                  onChange={(event) => setSearchedKeyword(event.target.value)}
                  startAdornment={
                    <InputAdornment position="start" variant="outlined">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Switch defaultChecked onChange={toggleTheme} />
            </Box>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/issues" element={<Issues />} /> */}
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </IssuesContext.Provider>
  );
}

export default App;
