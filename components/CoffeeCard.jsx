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
      data-blobity-color="#271c19"
    >
      <div className="overflow-hidden bg-gray-100 divide-y divide-gray-200 rounded-lg shadow-lg">
        <Image
          src={props.img}
          alt={props.name}
          width={800}
          height={300}
          className="object-cover object-center h-48"
        />
        <div className="px-4 py-6 space-y-2 sm:px-6">
          <h2 className="text-2xl font-semibold font-display">{props.name}</h2>
          <p className="text-lg text-gray-700">{props.description}</p>
        </div>
      </div>
    </Link>
  )
}
