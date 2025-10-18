import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export default function ColorModeSelect(props: SelectProps) {

  const { t } = useTranslation();

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark')
      }
      SelectDisplayProps={{
        // @ts-ignore
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
      <MenuItem value="system">{t("System")}</MenuItem>
      <MenuItem value="light">{t("Light")}</MenuItem>
      <MenuItem value="dark">{t("Dark")}</MenuItem>
    </Select>
  );
}
