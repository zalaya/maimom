import project1Image from '/images/project-1.jpg'
import project2Image from '/images/project-2.jpg'
import NoteWithPhoto from './NoteWithPhoto/NoteWithPhoto'
import { Section } from './section'

const projects = [
  {
    title: 'Gallina artesana',
    subtitle: 'Gallina de tela hecha a mano',
    description:
      'Gallina suave y acogedora, confeccionada a mano con telas cálidas y detalles bordados. Pensada para dar un toque tierno y divertido a cualquier rincón de la casa.',
    year: 2025,
    image: project1Image,
    tags: ['Gallina', 'Hecho a mano', 'Decoración']
  },
  {
    title: 'Cerdito artesano',
    subtitle: 'Cerdito de tela hecha a mano',
    description:
      'Cerdito de tela con forma redondeada y expresión simpática, cosido a mano con mucho cariño y remates cuidados. Ideal como pieza decorativa o compañero de estantería.',
    year: 2025,
    image: project2Image,
    tags: ['Cerdito', 'Hecho a mano', 'Colección']
  }
]

const CollectionSection = () => {
  return (
    <Section
      id="collection"
      header={{
        name: 'Colección',
        title: 'Piezas hechas a mano',
        subtitle:
          'Una selección de trabajos hechos con calma, cariño y dedicación.'
      }}
      isFirst
    >
      {projects.map((project, index) => {
        const isEven = index % 2 === 0

        return (
          <NoteWithPhoto
            key={project.title}
            isReversed={!isEven}
            photo={{
              src: project.image,
              alt: project.subtitle,
              rotation: isEven ? '-rotate-2' : 'rotate-2'
            }}
            note={{
              year: project.year,
              title: project.title,
              description: project.description,
              tags: project.tags
            }}
          />
        )
      })}
    </Section>
  )
}

export default CollectionSection
