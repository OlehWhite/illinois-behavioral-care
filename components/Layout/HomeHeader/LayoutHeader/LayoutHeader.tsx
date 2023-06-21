import {
  ContactAndFollow,
  Follow,
  FollowInfo,
  LinkA,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
} from "./styled";
import React, { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import IMGFollowIcon from "../../../../public/white-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import { PRIVATE_DATA } from "../../../../otherPages/privateData";
import LogoImg from "../../../LogoImg/LogoImg";

const ID_Links = "illinoisBehavioralCareAllLinksIstagramLink";

export const LayoutHeader: FC = () => {
  const [linkFacebook, setLinkFaceBook] = useState<string>("");
  const [linkLinkedin, setLinkLinkedin] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID_Links}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setLinkFaceBook(response.data.items[0].fields.facebook);
        setLinkLinkedin(response.data.items[0].fields.linkedIn);
      });
  });

  return (
    <Wrapper>
      <Box>
        <LogoImg />
      </Box>
      <ContactAndFollow>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={0}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <LinkA href={linkFacebook} target="_blank">
                <Image
                  src={IMGFacebook}
                  width={12}
                  height={12}
                  alt="Facebook"
                  title="Facebook"
                />
              </LinkA>
              <LinkA href={linkLinkedin} target="_blank">
                <Image
                  src={IMGLinkedin}
                  width={12}
                  height={12}
                  alt="Linkedin"
                  title="Linkedin"
                />
              </LinkA>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
      </ContactAndFollow>
    </Wrapper>
  );
};
