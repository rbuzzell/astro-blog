import { readingTime } from 'reading-time-estimator'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const readingTimeText = readingTime(textOnPage)
		// readingTime.text will give us minutes read as a friendly string,
		// i.e. "3 min read"
		data.astro.frontmatter.minutesRead = readingTimeText.text
	}
}
