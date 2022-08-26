import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import PaginationRounded from "./components/PaginationRounded";
import SearchAppBar from "./components/SearchAppBar";
import jobs from "./job.json";
// import CssBaseline from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <SearchAppBar />
        <Grid container spacing={0}>
          {jobs.slice(0, 5).map((job) => (
            <Grid key={job.id} item xs={12} md={6} lg={4}>
              <JobCard key={job.id} job={job} />
            </Grid>
          ))}
        </Grid>
        <PaginationRounded />
      </div>
    </ThemeProvider>
  );
}

export default App;
