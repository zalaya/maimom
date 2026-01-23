import { NoteWithPhoto } from '@/components/note-with-photo'
import { PaperNote } from '@/components/paper-note'
import { PolaroidPhoto } from '@/components/polaroid-photo'
import { Section } from '@/components/section'

const projects = [
  {
    title: 'Gallina artesana',
    subtitle: 'Gallina de tela hecha a mano',
    description:
      'Gallina suave y acogedora, confeccionada a mano con telas cálidas y detalles bordados. Pensada para dar un toque tierno y divertido a cualquier rincón de la casa.',
    year: '2025',
    imageUrl: '/images/project-1.jpg',
    tags: ['Gallina', 'Hecho a mano', 'Decoración']
  },
  {
    title: 'Cerdito artesano',
    subtitle: 'Cerdito de tela hecha a mano',
    description:
      'Cerdito de tela con forma redondeada y expresión simpática, cosido a mano con mucho cariño y remates cuidados. Ideal como pieza decorativa o compañero de estantería.',
    year: '2025',
    imageUrl: '/images/project-2.jpg',
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
      {projects.map((project, index) => (
        <NoteWithPhoto key={project.title} reversed={index % 2 !== 0}>
          <PolaroidPhoto
            src={project.imageUrl}
            caption={project.subtitle}
            rotate={index % 2 === 0 ? -2 : 2}
          />

          <PaperNote
            section={project.year}
            title={project.title}
            content={project.description}
            footer={project.tags.join(' · ')}
          />
        </NoteWithPhoto>
      ))}
    </Section>
  )
}

export default CollectionSection
