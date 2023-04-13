import logo from "./logo.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Switch,
  TextField,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./themeConfig";
import { useEffect, useState } from "react";
import IssuesContext from "./context/IssuesContext";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import IssueDetail from "./pages/IssueDetailPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import Home from "./pages/HomePage";

function App() {
  const [appTheme, setAppTheme] = useState("dark");
  const [issuesData, setIssuesData] = useState([]);
  const [userAccount, setUserAccount] = useState();
  const [repositoryName, setRepositoryName] = useState("");
  const [repositoryList, setRepositoryList] = useState([]);

  useEffect(() => {
   setTimeout(() => {
    axios
    .get(`https://api.github.com/repos/${userAccount}/${repositoryName.label}/issues`)
    .then((response) => {
      setIssuesData(response.data);
    }).catch((error) => {
      console.log("error block");
    })
   }, 5000);
  }, [repositoryName]);



  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const getUserRepos = () => {
      axios.get(`https://api.github.com/users/${userAccount}/repos`).then((response) => {
         const modifyRepositoryList = response.data.map(repository => {
          return {
            label: repository.name
          }
         });
          setRepositoryList(modifyRepositoryList);
      })
  }

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
                  placeholder="Enter User Account"
                  value={userAccount}
                  onChange={(event) => setUserAccount(event.target.value)}
                  startAdornment={
                    <InputAdornment position="start" variant="outlined">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
                <Button onClick={getUserRepos}>Get Repos</Button>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={repositoryList}
                  onChange={(event, value) => setRepositoryName(value)}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
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
