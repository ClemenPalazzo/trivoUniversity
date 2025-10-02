import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Trail Running',
    description: 'Curso completo de trail running',
    level: 'Nivel principiante',
    imageSrc: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
    imageAlt: 'Hombre corriendo en trail con mochila de hidratación'
  },
  {
    id: 2,
    title: 'Running',
    description: 'Domina las bases del running',
    level: 'Nivel principiante',
    imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    imageAlt: 'Mujer corriendo en parque'
  },
  {
    id: 3,
    title: 'Ciclismo',
    description: 'Entrenamiento de ciclismo en ruta',
    level: 'Nivel intermedio',
    imageSrc: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center',
    imageAlt: 'Ciclista en ruta con casco y ropa deportiva'
  }
];

export default function CoursesSection() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              level={course.level}
              imageSrc={course.imageSrc}
              imageAlt={course.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
