import ZapIcon from '@/icons/zap.icon';
import {
  Box,
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy';

const tones = [
  'Encouraging',
  'Persuasive',
  'Thoughtful',
  'Personal',
  'Witty',
  'Funny',
  'Empathetic',
  'Compassionate',
];

const Editor = () => {
  return (
    <Modal aria-labelledby="modal-title" aria-describedby="modal-desc" open>
      <ModalDialog layout="center" size="sm">
        <ModalClose />
        <Typography>Editor</Typography>
        <Stack sx={{ mt: 1 }} gap={2}>
          <Textarea minRows={7} />
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Select placeholder="Select tone">
              {tones.map((tone) => (
                <Option key={tone} value={tone}>
                  {tone}
                </Option>
              ))}
            </Select>
            <Button
              color="info"
              endDecorator={<ZapIcon width={16} height={16} />}
            >
              Generate
            </Button>
          </Stack>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default Editor;
