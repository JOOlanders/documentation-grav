import {get} from 'lodash'
import {getAllPosts} from '@/api'
import {ReferenceIndex} from '@/components/ReferenceIndex'
import navigation from '../nav.json'

export default function FormAreaFields({index = []}) {
  return (
    <>
      <ReferenceIndex index={index}/>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('essentials-for-yoothemepro/forms/captcha', [
    'title',
    'slug',
    'description',
    'icon',
    'preset'
  ])

  const index = get(navigation, 'sections.2.links.1.links')
    .map(link => posts.find(p => link.href === p.slug))
    .filter(Boolean)

  return {
    props: {
      index
    },
  }
}