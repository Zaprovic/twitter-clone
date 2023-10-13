import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
	const supabase = createServerComponentClient({ cookies });
	const { data: posts } = await supabase.from("posts").select("*");

	return (
		<div>
			<h1>Hello</h1>

			<pre>{JSON.stringify(posts, null, 2)}</pre>
		</div>
	);
}
