import { GitHub } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Footer() {


  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        marginTop: '40px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        position: 'fixed',
        width: '100%',
        bottom: '0',
      }}

    >
      <Typography variant='h4' as='p'>TodoJuegos</Typography>
      
      <Divider style={{ width: '50%', margin: '20px auto', borderColor: grey[800] }} />

      <Typography variant='body1' sx={{ marginBottom: '10px' }}>Consegui los ultimos juegos del mercado</Typography>
      <a href='https://github.com/reddodragon' target='_blank' rel='noreferrer'>
        <GitHub fontSize='large' sx={{ color: '#ffffff' }} />
      </a>
    </Box>
  )
}