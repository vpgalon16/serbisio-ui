import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Serbisio</Heading>
			<FooterLink href="#">About us</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">House Cleaning</FooterLink>
			<FooterLink href="#">Gardening</FooterLink>
		</Column>
		<Column>
			<Heading>Help</Heading>
			<FooterLink href="#">F.A.Q</FooterLink>
			<FooterLink href="#">Terms & Conditions</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Pricing Policy</FooterLink>
		</Column>
		<Column>
			<Heading>Search for</Heading>
			<FooterLink href="#">Service Provider</FooterLink>
			<FooterLink href="#">Services</FooterLink>

		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
