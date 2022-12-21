import Image from 'next/image'
import Link from 'next/link'

export default function CoffeeCard(props) {
  return (
    <Link
      href={props.url}
      className="relative z-50"
      data-blobity-offset-x="12"
      data-blobity-offset-y="12"
      data-blobity-radius="8"
      data-blobity-color="#252523"
    >
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        <Image
          src={props.img}
          alt={props.name}
          width={800}
          height={300}
          className="h-48 object-cover object-center"
        />
        <div className="space-y-2 px-4 py-6 sm:px-6">
          <h2 className="font-display text-2xl font-semibold">{props.name}</h2>
          <p className="text-lg text-gray-700">{props.description}</p>
        </div>
      </div>
    </Link>
  )
}
