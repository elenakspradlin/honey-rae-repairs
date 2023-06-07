import { EmployeeViews } from "./EmployeeViews"
import { CusotmerViews } from "./CustomerViews"

export const ApplicationViews = () => {

	const localHoneyUser = localStorage.getItem("honey_user")
	const honeyUserObject = JSON.parse(localHoneyUser)

	if (honeyUserObject.staff) {
		return <EmployeeViews />

	}

	else {

		return <CusotmerViews />
	}
}

