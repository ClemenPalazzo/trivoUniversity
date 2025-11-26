import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CourseCard({ title, description, level, imageSrc, imageAlt }: CourseCardProps) {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden">

      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ border: 'none' }}
        />
      </div>
      
     
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        

        <div className="inline-block">
          <span className="bg-neutral-800 text-white px-3 py-1 rounded-md text-sm">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}
