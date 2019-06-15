"use strict";

import { createCrudAction } from "./base";

export const eventActions = {
    ...createCrudAction("event"),
};
