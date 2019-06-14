"use strict";

import { createCrudAction } from "./base";

export default {
    eventActions: {
        ...createCrudAction("event"),
    }
};
