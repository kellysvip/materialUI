import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function JobCard({ job }) {
  return (
    <Card
      sx={{
        width: "400px",
        height: "230px",
        mt: 2,
        backgroundColor: "rgb(70, 66, 66)",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.title}
        </Typography>
        <Divider />
        <CardActions>
          {job.skills.slice(0, 4).map((skill, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{
                backgroundColor: "hsl(16, 100%, 50%)",
                borderRadius: 4,
                color: "#fff",
              }}
              size="small"
            >
              {job.skills[i]}
            </Button>
          ))}
        </CardActions>

        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: "#111", backgroundColor: "orange" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
