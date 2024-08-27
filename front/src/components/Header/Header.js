import "./Header.css";
import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
	const { user, onClose, onAlert } = useTelegram();

	return (
		<div className={"header"}>
			<Button onClick={onAlert}>Alert</Button>
			<span className={"username"}>{user?.username}</span>
		</div>
	);
};
export default Header;
