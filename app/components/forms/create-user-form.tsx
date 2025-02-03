import { useFetcher } from "react-router";

const CreateUserForm = () => {
    const fetcher = useFetcher();

    return (
        <div>
            <fetcher.Form method="post" action="/user">
                <input type="text" name="username" placeholder="username" className="border mb-2" />
                <input type="text" name="email" placeholder="email" className="border mb-2" />
                <button type="submit">submit</button>
            </fetcher.Form>
        </div>
    )
}

export default CreateUserForm;