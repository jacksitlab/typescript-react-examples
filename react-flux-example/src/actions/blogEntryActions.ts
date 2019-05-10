import dispatcher from '../flux/dispatcher';
import { Actions } from '../flux/actions';
import BlogEntry from '../models/blogEntry';


export class BlogEntryActions {
    public static ACTION_FILL: string = "ACTION_FILL";

}

export function loadBlogEntries(): void {

    dispatcher.dispatch({
        type: Actions.ACTION_LOADING_START,
        data: null
    });
    setTimeout(() => {
        dispatcher.dispatch({
            type: BlogEntryActions.ACTION_FILL,
            data: [new BlogEntry('123', '456', "first things first")]
        })
        dispatcher.dispatch({
            type: Actions.ACTION_LOADING_END,
            data: null
        });
    }, 1500);

}