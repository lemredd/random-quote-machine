import * as React from "react";
import { Quote as Props } from "../types";

export default function TweetBtn({ text, author }: Props) {
	const TWEET_TEXT_PARAM = `text="${text}" -${author}`;
	const ADDITIONAL_PARAMS = 'hashtags=quotes&related=freecodecamp';
	const TWEET_LINK = `https://twitter.com/intent/tweet?${ADDITIONAL_PARAMS}&${TWEET_TEXT_PARAM}`;

	return (
		<a href={TWEET_LINK} id="tweet-quote" target="_blank">
			<i className="fa-brands fa-square-twitter fs-1"></i>
		</a>
	)
}
