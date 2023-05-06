import React, { useState, useEffect } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from "cdbreact";

const CyfMilestone = () => {
	let [table, setTable] = useState([]);

	//use effect
useEffect ( ()=> {
  async function fetchData() {
    try {
        const response = await fetch("/api/milestone");
        const json = await response.json();
        console.log(json);
        setTable(json);
		} catch (error) {
			console.log(error);
		}
    }
    fetchData();
	},[]);
	return (
		<CDBContainer>
      <h4 className="rounded text-center p-2 border bg-dark text-light" style={{ marginBottom:"-.1rem", letterSpacing:"5px" }}> CYF Milestone Table </h4>
			<CDBTable hover bordered responsive>
				<CDBTableHeader>
					<tr className="bg-danger text-light font-weight-bolder">
						<th className="pb-4 pt-4">Module</th>
						<th className="pb-4 pt-4">Date</th>
						<th className="pb-4 pt-4">Codewars Rank</th>
						<th className="pb-4 pt-4">Github PRs</th>
						<th className="pb-4 pt-4">Codewars Js Points</th>
					</tr>
				</CDBTableHeader>
				<CDBTableBody>
					{table.map((el, key) => {
						return (
							<tr key={key} className="bg-success text-light">
								<td>{el.modulename}</td>
								<td>{el.date.split("T")[0]}</td>
								<td>{el.codewarsrank}</td>
								<td>{el.githubprs}</td>
								<td>{el.codewarsjspoints}</td>
							</tr>
						);
					})}
				</CDBTableBody>
			</CDBTable>
		</CDBContainer>
	);
};
export default CyfMilestone;