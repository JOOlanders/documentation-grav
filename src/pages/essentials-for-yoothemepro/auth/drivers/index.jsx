import {get} from 'lodash'
import {getAllPosts} from '@/api'
import {ReferenceIndex} from '@/components/ReferenceIndex'
import navigation from '../../nav.json'

export default function SectionIndex({index = []}) {
  return (
    <>
      <p className="lead">Available Drivers for <a href="/essentials-for-yoothemepro/oauth-keys-secrets">Auths, Keys & Secrets</a>.</p>
      <ReferenceIndex index={index}/>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts('essentials-for-yoothemepro/auth/drivers', [
    'title',
    'slug',
    'description',
    'icon',
    'preset'
  ])

  const index = get(navigation, 'sections.2.links.2.links')
    .map(link => posts.find(p => link.href === p.slug))
    .filter(Boolean)

  return {
    props: {
      markdoc: {
        frontmatter: {
          title: 'Auth Drivers',
        },
      },
      index
    },
  }
}