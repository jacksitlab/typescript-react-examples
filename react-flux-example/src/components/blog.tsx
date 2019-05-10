import * as React from 'react';
import BlogEntry from '../models/blogEntry';
import blogEntryStore from '../stores/blogEntryStore';
import { loadBlogEntries } from '../actions/blogEntryActions';

export interface IBlogState {
    loading: boolean,
    entries: BlogEntry[]
}
export interface IBlogProps {

};

class Blog extends React.Component<IBlogProps, IBlogState> {


    constructor(props: IBlogProps) {
        super(props);
        this.changeListener = this.changeListener.bind(this);
        this.state = {
            loading: false,
            entries: blogEntryStore.getEntries()
        }
    }

    componentWillMount() {
        blogEntryStore.on("change", this.changeListener);
    }
    componentWillUnmount() {
        blogEntryStore.removeListener("change", this.changeListener);
    }
    private changeListener(): void {
        this.setState({
            loading: false,
            entries: blogEntryStore.getEntries()
        });
    }
    private generateContent() {
        return <div>
            {this.state.entries.map(function (entry) {
                return <div key={entry.getTitle()}>
                    <h1>{entry.getTitle()}</h1>
                    <p>{entry.getDescription()}</p>
                </div>
            })}

        </div>
    }
    private loadEntries(): void {
        loadBlogEntries();
    }
    render() {
        let content;
        if (this.state.loading) {
            content = "Loading..."
        }
        else {
            content = this.generateContent();
        }
        return <main role="main" className="container page">
            <button onClick={this.loadEntries}>Load</button>
            {content}
        </main>

    }

}

export default Blog;
