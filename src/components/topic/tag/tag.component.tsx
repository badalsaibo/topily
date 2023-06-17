import { Chip, Palette, useTheme } from '@mui/joy';
import { DefaultColorPalette } from '@mui/joy/styles/types';

const palettes = ['danger', 'info', 'neutral', 'primary', 'success', 'warning'];

const Tag = ({ name }: { name: string }) => {
  const theme = useTheme();

  const palette = palettes[
    Math.floor(Math.random() * palettes.length)
  ] as DefaultColorPalette;

  const colorPalette = theme.palette[palette];

  return (
    <Chip
      size="sm"
      sx={{
        bgcolor: colorPalette[100],
        color: colorPalette[600],
        fontWeight: 'bold',
      }}
    >
      {name}
    </Chip>
  );
};

export default Tag;
