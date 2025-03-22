import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import api from "../api";

export const Dashboard = () => {
	const [balance, setBalance] = useState(null);

	useEffect(() => {
		const fetchBalance = async () => {
			try {
				const response = await api.get("/account/balance", {
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("token"),
					},
				});
				setBalance(response.data.balance);
			} catch (error) {
				console.error(
					"Failed to fetch balance:",
					error.response?.data || error.message
				);
			}
		};
		fetchBalance();
	}, []);

	return (
		<div>
			<Appbar />
			<div className="m-8">
				<Balance value={balance !== null ? balance : "Loading..."} />
				<Users />
			</div>
		</div>
	);
};
