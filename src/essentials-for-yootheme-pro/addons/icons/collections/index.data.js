import { createContentLoader } from 'vitepress';

export default createContentLoader('/essentials-for-yootheme-pro/addons/icons/collections/*.md', {
    excerpt: true,
    transform(rawData) {
        return rawData
            .filter((item) => !item.frontmatter?.index)
            .map((item) => {
                const name = item.frontmatter?.title?.toLowerCase().replace(/ /g, '-');

                return {
                    ...item.frontmatter,
                    icon: `/essentials-for-yootheme-pro/addons/icons/assets/icon/${name}.svg`,
                    link: item.url,
                };
            });
    },
});