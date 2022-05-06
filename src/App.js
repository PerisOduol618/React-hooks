import { Button, styled, Typography } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";

const BlueButton = styled(Button) (({theme}) =>  ({
  backgroundColor: "skyblue",
  color: "#888",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:disabled ": {
    backgroundColor: "gray",
    color: "white",
  },
}));

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">
        Settings
      </Button>
      <Button startIcon={<Add />} color="success" variant="contained">
        Add new item
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>

      <Typography variant="h3">It's my first MUI,happy to learn</Typography>
      <BlueButton>My Unique Button</BlueButton>
      <BlueButton>Another Unique Button</BlueButton>
    </div>
  );
}

export default App;
