import Image from 'next/image'
import Link from 'next/link'
import { Pacifico } from 'next/font/google'
import Icons from '@/utils/icons'
import Carousel from '@/components/Carousel'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export default function SalonPage({ params }: { params: { slug: string } }) {
  // Esta es una simulación de datos. En una aplicación real, estos datos vendrían de una base de datos o API.
  const salonData = {
    name: "Salón Elegancia",
    description: "Un espacio sofisticado y versátil para tus eventos más exclusivos.",
    capacity: 150,
    location: "Av. Principal 123, Centro, Ciudad",
    phone: "+52 123 456 7890",
    email: "contacto@salonelegancia.com",
    instagram: "@salonelegancia",
    images: [
      "/placeholder.svg?height=400&width=600&text=Salón+Elegancia+1",
      "/placeholder.svg?height=400&width=600&text=Salón+Elegancia+2",
      "/placeholder.svg?height=400&width=600&text=Salón+Elegancia+3",
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <Link href="/" className="text-purple-600 hover:text-purple-800 transition duration-300 inline-flex items-center">
            <Icons.ArrowLeft className="mr-2 text-2xl" />
            Volver a Inicio
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className={`text-4xl md:text-5xl font-bold text-purple-600 mb-6 ${pacifico.className}`}>
          {salonData.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-8">

          {/* <div className='flex flex-col justify-between px-10'>
            <Image 
              src={salonData.images[0]} 
              alt={salonData.name} 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg mb-4 self-center"
            />
            <div className="flex col md:row justify-around">
              {salonData.images.slice(1).map((img, index) => (
                <Image 
                  key={index}
                  src={img} 
                  alt={`${salonData.name} ${index + 2}`} 
                  width={280} 
                  height={200} 
                  className="rounded-lg shadow-md"
                />
              ))}
            </div>
          </div> */}

          {/* SE LE ENVIARIA UN PROP DE LAS IMAGENES */}
          <Carousel/>

          <div>
            <div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <p className="text-gray-700 text-lg mb-4">{salonData.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Icons.MapPin className="mr-2" size={20} />
                    <span>{salonData.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icons.Phone className="mr-2" size={20} />
                    <a href={`https://wa.me/${salonData.phone.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
                      {salonData.phone} (WhatsApp)
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icons.Mail className="mr-2" size={20} />
                    <a href={`mailto:${salonData.email}`} className="hover:text-purple-600 transition duration-300">
                      {salonData.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Icons.Instagram className="mr-2" size={20} />
                    <a href={`https://instagram.com/${salonData.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
                      {salonData.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg font-bold text-base transition duration-300 shadow-lg">
              Reservar Ahora
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className={`text-3xl font-bold text-purple-600 mb-6 ${pacifico.className}`}>
            Ubicación
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.761237045603!2d-99.16869368469961!3d19.42702468688713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZocalo%2C%20Centro%20Histórico%20de%20la%20Cdad.%20de%20México%2C%20Centro%2C%20Cuauhtémoc%2C%2006000%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1sen!2smx!4v1625761990772!5m2!1sen!2smx" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </main>

      <footer className="bg-purple-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2024 Fiori. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-pink-400 transition duration-300">Facebook</Link>
            <Link href="#" className="hover:text-pink-400 transition duration-300">Instagram</Link>
            <Link href="#" className="hover:text-pink-400 transition duration-300">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

