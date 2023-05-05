const SetMilestone = () => {
	return (
		<div>
			<div>
				<p>
					At CYF, your progress is tracked on a trainee tracker against
					milestones set by the Director of Education. However, you are on your
					own personal journey towards employment. and should really set your
					own milestones.
				</p>
				<p>
					You can go to check `CYF Milestone` at the menu to have a reference on
					how you should set your own milestone.
				</p>
			</div>
			<div>
				Please fill out the following form to create your new milestone.
			</div>
			<form>
				<label htmlFor="milestoneSelect">Select the milestone</label>
				<select id="milestoneSelect" required>
					<option>Start</option>
					<option>HTML-CSS Week 1 </option>
					<option>JS1 Week 1</option>
					<option>JS2 Week 1 </option>
					<option>JS3 Week 3</option>
					<option>React Week 2 </option>
					<option>Node Week 2 </option>
					<option>Databases Week 3 </option>
					<option>Final Projects Week 2 </option>
					<option>Post Graduation </option>
				</select>
				<div>
					<label htmlFor="factorInput">Add your factor</label>
					<input
						type="text"
						id="factorInput"
						placeholder="Enter new factor"
						required
					/>
					<small id="factorHelp">
						The factor entered must be quantified as integral value.
					</small>
				</div>
				<div>
					<label htmlFor="dateInput">Set due date</label>
					<input type="date" id="dateInput" required />
				</div>
				<div>
					<label htmlFor="valueInput">Set the goal value</label>
					<input
						type="number"
						id="valueInput"
						placeholder="Enter factor value "
						required
					/>
				</div>
				<button type="submit">Set a milestone</button>
			</form>
		</div>
	);
};
export default SetMilestone;
