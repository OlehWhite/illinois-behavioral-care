import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => {
  return {
    width: 1300,
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    padding: "20px 0",

    "@media (max-width: 950px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});


export const ContactAndFollow = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "@media (max-width: 950px)": {
      display: "none",
    },
  };
});

export const Follow = styled(Box)(() => {
  return {
    display: "flex",
    color: "white",
  };
});


export const FollowInfo = styled(Box)(() => {
  return {
    width: 100,
  };
});

export const Title = styled(Box)(() => {
  return {
    marginBottom: 6,
  };
});

export const WrapperFollow = styled(Box)(() => {
  return {
    display: "flex",
    marginLeft: 8,
  };
});

export const LinkA = styled("a")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    padding: 5,
    borderRadius: "50%",
    backgroundColor: "#ffffff42",
    cursor: "pointer",
    marginRight: 6,
    transition: ".3s",

    "&:hover": {
      transition: ".3s",
      backgroundColor: "rgba(52,152,219,0.49)",
    },
  };
});

export const WrapperImg = styled(Box)(() => {
  return {
    marginRight: 12,
  };
});
