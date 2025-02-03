import type { Route } from "./+types/user";
import { db } from "~/lib/db";

const users = [
    { id: 1, name: "Ryan" },
    { id: 2, name: "Michael" },
];

export async function loader({ request }: Route.LoaderArgs) {
    await new Promise((res) => setTimeout(res, 300));
    let url = new URL(request.url);
    let query = url.searchParams.get("q");

    if (query) return users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

    return {}
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const username = formData.get("username") as string;
    const email = formData.get('email') as string;

    if (!username || !email) return { error: 'You left a field empty!' }

    const user = await db.user.create({ data: { username, email } })

    if (!user) return { error: 'Something went wrong!' }

    return { user }
}
