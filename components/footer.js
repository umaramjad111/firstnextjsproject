import styled from "styled-components";

export default function Footer() {
  const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <FooterSection>
      <p>Next 2021 @ Best Company</p>
    </FooterSection>
  );
}
