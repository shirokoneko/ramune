// Types
import type { AuthenticatedUser, User } from "gizmo-api/lib/types";

export function getUserFromAuthenticatedUser (user: AuthenticatedUser): User {

	/*
		@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/#((((((((((#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@@@@@@@(#%%##(%#&%&%%%%&&&&%%%&&&%##@@@@@@@@@@@@@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@%#%%#(/(#%##%%%%%%%%&%&%%%&%%&&%%%&&&&%##@@@@@@@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@(%%###%%%%%%%#&%%&%%%%#&%%%%%&&&&&&%&%%%&%#&&&#@@&@@@@@@@@@@@@@@@
		@@@@@@@@@@@@(#((%%%%%%%%%&&&%%%&%&&%%%&%&&&&&&&%%&%&%&%&%%%&&%&&#@@@@@@@@@@@@@@@
		@@@@@@@@@@/#%%%&&&%%&%%&%&%%#%%%%%%%%&%&&#%%%%%%%%%%%%&%%%&%%%&&&&%#%@@@@@@@@@@@
		@@@@@@@@%(%&%%%%%%%%%%%%%%%%%%%&&%%%&%%%&%%%%%%%%%%%%%#%%&%%%%%%%&&&&(@@@@@@@@@@
		@@@@@@@(#%%%&%%%%%&%%%&%&%%%&%%&%%%%%%%%%%%%%%&%%%&&&%%&&&&%&%&&&%%&%&&(%@@@@@@@
		@@@@@@(#%%%%%%%%%&%%%%&&&&%%%%&%%%%%&%%%%%&%%&%%%&%%%%&%&&%%&&%%&%%%%&&&%(@@@@@@
		@@@@@/#%%&&&&&&%&&%%&&&&&&&&%&&&%%&&&%%%%&%%&&&&&%&&&&&&&%&%&&&%&%%&&%%&&%(@@@@@
		@@@@@##%&&%&&&&&&@&&&&&&@&&@&@&&&%%&&%%%&&&&&&&&@&@&&&&&&&&%&&&&&&%&%%%&&&%%@@@@
		@@@@###&%&&&&&&@&@&&@@@&@&&&@&&%%&&&&%%&&&@@@@&&@@&&&&@@&&&&&%%%%&&%%&&&&&&%@@@@
		@@@%#%%%%&&&&&&&&@@@&@@@&@&&&@&&&&&&&&&&&@&&@@@@@@@@@@&&&@&&&&&&%&%%%%%%%%&%#@@@
		@@@&#%%%%%&&&&&&@@@@@@&@@@@@&@&&@&&&%%&&&&@&@@@@&@@@@@@@@&@&&&%&%%&%%%&&&&&&%@@@
		@@@@%%%&%&%&&&&&&@&@@@&@&@@&&@&%&&&%&&&&&&@@@@@@&@&@@@&@@@@&&&&&&%%&%&&&&&&%#@@@
		@@@@%%&%&&&&&&&&@@&@@@@@@&@@@&@&&&&%%&%&&&&&&@@@&@@&@@@&&&&&&&&&&&&&&&&&%&&&%@@@
		@@@&%&%%&&&&&&&&&@&&&@@&@&&@&&&&&&&&%&&&&&@&&&&&&@&&&&&&&&&&&&&&&&&&&&&%&%&%%@@@
		@@@&&&&&%&&&&&&@&&@&&@%&&@&&&&%%%&%&&%&&&&&&%&&@&&&&&@@&@&%&&%&&&&&&&%&%&&%%#@@@
		@@@@%&%&%&%&&&&&&&&&&&&&&&&&&&&%%&%%%%%&%%&%&&&&&&&&&&&%&%&%&%&&&&&%&&&&&&%%%@@@
		@@@@@%%&&%%#%#%&&&&&%&&%&&&%%%&&&#%&%%%%%%&%%&&&&&%%&&&&&&%&%&%&&&%&@&&&&&%%(@@@
		@@@@@%%&&&%%%&%%%%%%%&&&&%&&&&&%&&&%&&&&&&&&%&&&%%&&&&%&&&&%&&&&&&&&&&&&&%%%@@@@
		@@@@@@%%&&&%%&&%&&&@&@%&&&&@@&&&&&&&&&&@&@&&&&&&@&&&&@&&&&&&@&&&&&&&%&%&%&%(@@@@
		@@@@@@@#&&&%&%&&&@&@@@&&@@@@&@@@@@&&&&@@@&&@&&&@&&@@@&@&@@&&%%%&%&&&&&&&%%((@@@@
		@@@@@@@@%&&&%%&&&&&&&&&&%&&&&&&&%&&&&&&&&&&&&&&%&&&&&&&&&&%&&&%&&&%&%&%&%##@@@@@
		@@@@@@@@%(%&&&%&&&&&&&%&&&&&&&&&&&&&&&&&&&&%&&&&&&&&%&%&&%%&%%%%&%%%&&%%#@@@@@@@
		@@@@@@@@@@@#%&&@%%&&%%%%&%&&%%%&&&%%%&&&&&&&%%%&%&&&&%%%%%%#%%&%&&&&%%%@@@@@@@@@
		@@@@@@@@@@@@@##%%&%&%%%&&%%&%&&&%%&&%&&%&%&&&%%%%&&&%&&%%&&%&%&%&%%%%#@@@@@@@@@@
		@@@@@@@@@@@@@@@@#&&&%&&%%%%&&%&%&%%%%&%%%%%%%%%%%%%%%%##%##%%%##(##@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@@@#&&%%&%%%%&&%%%%%&#%%%%%%%%%&%%%%######%(((##@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@@@@@@##%&&&%%#&&%&%%%%%%%%#%%(%##%#(//(#%(@@@@@@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&(#%%%%%%%%%%%###(#%##&&%@@@@@@@@@@@@@@@@@@@@@@@@@
		@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	*/

	// Because it somehow fucking ruins the Vuex user???? Fuck off
	// The solution to life's problems
	user = { ...user };

	delete ((user as unknown) as Record<string, unknown>).token;

	return user as User;
}