
export class QueryParamBuilder {
    private query: string;
    public add(name: string, value?: string): QueryParamBuilder {
        if (!value || value.trim() === "") {
            return this;
        }
        if (!this.query) {
            this.query = "";
        }
        if (this.query.trim() === "") {
            this.query += `${name}=${value}`;
        } else {
            this.query += `&${name}=${value}`;
        }
        return this;
    }
    public build(): string {
        return this.query;
    }

    public static buildFromOptions(opts: { [key: string]: any }): string {
        const queryBuilder = new QueryParamBuilder();
        for (let key in opts) {
            let value = opts[key];
            if (value) {
                queryBuilder.add(key, value)
            } else {
                continue;
            }
        }

        return queryBuilder.build();
    }
}