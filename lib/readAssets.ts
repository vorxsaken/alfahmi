import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = join(process.cwd(), '_posts')

function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

function getProjectImages(slug: string) {
    const landscapeImages = fs.readdirSync(join(process.cwd(), `public/projects/${slug}/landscape`));

    return {
        landscapeImages
    };
}

function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}

async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export { getPostSlugs, getPostBySlug, getAllPosts, markdownToHtml, getProjectImages }

