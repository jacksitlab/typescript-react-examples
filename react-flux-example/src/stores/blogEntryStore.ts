import { EventEmitter } from 'events'
import BlogEntry from '../models/blogEntry';
import dispatcher from '../flux/dispatcher';
import { IAction } from '../flux/actions';
import { BlogEntryActions } from '../actions/blogEntryActions';
export class BlogEntryStore extends EventEmitter {

    private entries: BlogEntry[];
    constructor() {
        super();
        this.entries = [];
    }
    public getEntries(): BlogEntry[] {
        return this.entries;
    }

    public fillEntries(entries: BlogEntry[]): void {
        this.entries = entries;
        this.emit("change");
    }
    public handleAction(action: IAction) {
        switch (action.type) {
            case BlogEntryActions.ACTION_FILL:
                this.fillEntries(action.data as BlogEntry[]);
                break;
        }
    }

}
const blogEntryStore = new BlogEntryStore();
dispatcher.register(blogEntryStore.handleAction.bind(blogEntryStore))
export default blogEntryStore; 