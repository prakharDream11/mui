import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';

function App() {
  return (
    <>
    <Button variant="text">Text</Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Alert severity="error">This is an error alert — check it out!</Alert>
<Pagination count={10} />
<CircularProgress />

    </>
  );
}

export default App;
