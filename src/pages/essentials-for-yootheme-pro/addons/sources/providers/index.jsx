import {get} from 'lodash'
import {getAllPosts} from '@/api'
import {ReferenceIndex} from '@/components/ReferenceIndex'
import navigation from '../nav.json'

export default function SourcesProviders({index = []}) {
  return (
    <>
      <ReferenceIndex index={index}/>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('essentials-for-yootheme-pro/addons/sources/providers', [
    'title',
    'slug',
    'description',
    'icon',
    'preset'
  ])

  const index = get(navigation, 'sections.2.links')
    .map(link => posts.find(p => link.href === p.slug))
    .filter(Boolean)

  return {
    props: {
      index
    },
  }
}