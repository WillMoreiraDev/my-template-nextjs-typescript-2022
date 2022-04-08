import Head from 'next/head'

interface PropsTitle {
  title : string
}

export function Title({title} : PropsTitle) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}