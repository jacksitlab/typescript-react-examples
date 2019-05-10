
export interface IAction {
    type: string,
    data: any
}
export class Actions {
    public static ACTION_LOADING_START: string = "ACTION_LOADING_START";
    public static ACTION_LOADING_END: string = "ACTION_LOADING_END";

}