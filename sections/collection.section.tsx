import { Section } from '@/components/layout/section'
import { NoteWithPhoto } from '@/components/note-with-photo'
import { PaperNote } from '@/components/paper-note'
import { PolaroidPhoto } from '@/components/polaroid-photo'
import project1Image from '../public/images/project-1.jpg'
import project2Image from '../public/images/project-2.jpg'

const projects = [
  {
    title: 'Gallina artesana',
    subtitle: 'Gallina de tela hecha a mano',
    description:
      'Gallina suave y acogedora, confeccionada a mano con telas cálidas y detalles bordados. Pensada para dar un toque tierno y divertido a cualquier rincón de la casa.',
    year: '2025',
    image: project1Image,
    tags: ['Gallina', 'Hecho a mano', 'Decoración']
  },
  {
    title: 'Cerdito artesano',
    subtitle: 'Cerdito de tela hecha a mano',
    description:
      'Cerdito de tela con forma redondeada y expresión simpática, cosido a mano con mucho cariño y remates cuidados. Ideal como pieza decorativa o compañero de estantería.',
    year: '2025',
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
          <NoteWithPhoto key={project.title} reversed={!isEven}>
            <PolaroidPhoto
              src={project.image}
              caption={project.subtitle}
              rotation={isEven ? '-rotate-2' : 'rotate-2'}
              hoverRotation={isEven ? 'rotate-0' : 'rotate-1'}
            />
            <PaperNote
              section={project.year}
              title={project.title}
              content={project.description}
              footer={project.tags.join(' · ')}
            />
          </NoteWithPhoto>
        )
      })}
    </Section>
  )
}

export default CollectionSection
