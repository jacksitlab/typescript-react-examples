
class BlogEntry {
    private title: string;
    private link: string;
    private description: string;
    constructor(title: string, link: string, description: string) {
        this.title = title;
        this.link = link;
        this.description = description;
    }
    public getTitle(): string {
        return this.title;
    }
    public getLink(): string {
        return this.link;
    }
    public getDescription(): string {
        return this.description;
    }
}
export default BlogEntry;
