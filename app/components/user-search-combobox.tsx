import { useFetcher } from "react-router";

export function UserSearchCombobox() {
    let fetcher = useFetcher();
    return (
        <div>
            <fetcher.Form method="get" action="/user">
                <input
                    type="text"
                    name="q"
                    className="border"
                    onChange={(event) => {
                        fetcher.submit(event.currentTarget.form);
                    }}
                />
            </fetcher.Form>
            {fetcher.data && (
                <ul
                className="mt-2"
                    style={{
                        opacity: fetcher.state === "idle" ? 1 : 0.25,
                    }}
                >
                    {fetcher.data.map((user: any) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
