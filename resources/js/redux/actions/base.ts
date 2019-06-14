import { set } from 'lodash';

type Methods = "get" | "post" | "put" | "remove";
type AjaxActions = {
    pending: string;
    fulfilled: string;
    rejected: string;
}
type CrudActions = {
    get: AjaxActions;
    post: AjaxActions;
    put: AjaxActions;
    remove: AjaxActions;
};

export const createAjaxAction = (type: string, method: Methods): AjaxActions => {
    const prefix = `${type.toUpperCase()}_${method.toUpperCase()}`;
    return {
        "pending": `${prefix}_PENDING`,
        "fulfilled": `${prefix}_FULFILLED`,
        "rejected": `${prefix}_REJECTED`,
    };
}

export const createCrudAction = (type: string): CrudActions => ["get", "post", "put", "remove"]
    .reduce((results: CrudActions, method: Methods) => {
        return set(results, method, createAjaxAction(type, method));
    }, {} as CrudActions);
