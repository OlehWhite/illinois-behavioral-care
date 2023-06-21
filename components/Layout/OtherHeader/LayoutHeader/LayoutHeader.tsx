import {
  ContactAndFollow,
  Follow,
  FollowInfo,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
  LinkA,
} from "./styled";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import IMGFollowIcon from "../../../../public/silver-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import Image from "next/image";
import { PRIVATE_DATA } from "../../../../otherPages/privateData";
import LogoImgDark from "../../../LogoImgDark/LogoImgDark";

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
      <LogoImgDark />
      <ContactAndFollow>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={50}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title sx={{ fontSize: '14.5px' }}>Follow Us</Title>
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
