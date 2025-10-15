import * as React from "react";
import Box from "@mui/material/Box";
import IconButton, { IconButtonOwnProps } from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";

import { useTranslation } from "react-i18next";

import FlagPT from "../assets/br.svg";
import FlagEN from "../assets/us.svg";

export function LanguageModeIconDropdown(props: IconButtonOwnProps) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentLang = i18n.language === "pt" ? "pt" : "en";

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLang = (lang: "en" | "pt") => () => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  const icon = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        fontWeight: "bold",
        fontSize: "1rem",
        borderRadius: "50%",
        background: "none",
        color: "inherit",
      }}
    >
      <LanguageIcon />
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton
        data-screenshot="toggle-language"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        {...props}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            elevation: 0,
            sx: {
              my: "4px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem selected={currentLang === "en"} onClick={handleLang("en")}>
          <img
            src={FlagEN}
            alt="English"
            width={20}
            style={{ marginRight: 8 }}
          />{" "}
          English
        </MenuItem>
        <MenuItem selected={currentLang === "pt"} onClick={handleLang("pt")}>
          <img
            src={FlagPT}
            alt="Português"
            width={20}
            style={{ marginRight: 8 }}
          />{" "}
          Português
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
